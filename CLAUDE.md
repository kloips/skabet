# Skabet

Personlig outfit-app. Trykker på en knap og får trukket et tilfældigt sæt tøj
fra min egen garderobe, vist som et flat-lay med rigtige billeder.

Bygget til mig selv, primært til brug på mobil om morgenen. Ikke et produkt,
ingen brugere ud over mig, ingen login.

## Status lige nu

Statisk side, hostet live på GitHub Pages (se Hosting). Tre filer —
`index.html` (markup), `style.css`, `script.js` — ingen build, ingen
npm-dependencies, ingen server, ingen database. Kan stadig åbnes lokalt
ved at dobbeltklikke på `index.html`, men bruges i praksis via den
offentlige adresse.

Roadmappets seks trin er alle gennemført (database er bevidst sprunget
over, se Roadmap). Det virker. Næste skridt er ikke at bygge om, men at
forbedre i små trin.

## Filstruktur

```
skabet/
  index.html          markup, linker til style.css og script.js
  style.css           al CSS
  script.js           al JS
  manifest.json        PWA-manifest til "Føj til hjemmeskærm"
  icon-source.svg       kilde-SVG til hjemmeskærm-ikonet (groent "S")
  icons/                genererede PNG-ikoner (192, 512, apple-touch-icon)
  img/
    lock-icon.jpg       laase-ikon (bruges)
    pil.jpg             pil-ikon til skift-knapperne (bruges, zoomet ind i CSS)
    next-icon.jpg        gammelt "skift"-ikon fra foer swipe/pile - ubrugt
    outerwear-*.png, mid-*.png, top-*.png, bottom-*.png, shoes-*.png   fritlagte PNG'er
    shorts-*.png          shorts-pulje, se "Sådan virker logikken"
    original-jpg/       de oprindelige fotos, git-ignoreret, bruges ikke af appen
  CLAUDE.md
```

Filerne er en simpel 3-vejs opdeling (HTML/CSS/JS) af det der tidligere var
én fil — intet build-trin tilføjet, `index.html` linker bare til de to andre
via `<link rel="stylesheet">` og `<script src>`.

## Datamodel

Tøjet kommer fra to kilder, som laegges sammen til ét `items`-array ved
opstart (`rebuildItems()`):

1. **Hardcodet** i objektet `files` øverst i `script.js`:
   ```js
   const files = {
     "top-7.png":       { navn: "Sort t-shirt", paenhed: 4 },
     "outerwear-14.png":{ navn: "Sort lang frakke", regn: true, paenhed: 5 },
     ...
   };
   ```
   Filnavnet før første bindestreg er kategorien. Værdien må være enten ren
   tekst (kun navnet) eller et objekt med flere oplysninger:
   - `navn` — vises i favorit- og meta-chips.
   - `paenhed` — 1 (mest afslappet) til 5 (pusset op). Bruges af
     lejlighedsmenuen. Mangler den, bruges `STANDARD_PAENHED` (3).
   - `regn` — `true` markerer en regnjakke, se "Sådan virker logikken".
2. **Tilføjet fra formularen** ("+"-knappen i footeren). Gemmes i
   `localStorage` under nøglen `skabet-extra-items` — findes derfor kun
   på den enhed/browser det er tilføjet fra. Billedet skaleres til maks
   1000px og gemmes som PNG (bevarer transparens) via `resizeImage()`.

Der er fem slots i layoutet:

| Kategori    | Slot i layoutet   |
|-------------|-------------------|
| `outerwear` | jakker, frakker   |
| `mid`       | trøjer, strik     |
| `top`       | t-shirts, skjorter|
| `bottom`    | bukser, jeans     |
| `shoes`     | sko, støvler      |

Derudover findes en sjette pulje, `shorts`, der IKKE har sit eget slot —
se "Sådan virker logikken" for hvordan den bruges.

Kategorinavnene er hardcodet flere steder: i `data-cat` på hvert `.slot`
(`index.html`), i `CATS`-arrayet (`script.js`), i `grid-template-areas` i
`.lay` (`style.css`), og i kategori-selecten i tilføj-formularen
(`index.html`). Ændrer du et af dem, skal alle steder rettes.

## Sådan virker logikken

`buildOutfit()` vælger et stykke i alle fem kategorier hver gang — der er
ikke længere nogen temperatur-afhængig fravalg af `mid`/`outerwear` (det
var oprindeligt sådan, men blev bevidst fjernet). Vejret bruges kun til
visning i headeren, ikke til at styre valget af tøj.

**Vejr:** hentes fra **yr.no** (MET Norway) på
`api.met.no/weatherapi/locationforecast/2.0/compact`, ingen API-nøgle.
Var før Open-Meteo. Der bruges **timedata**, begrænset til `VEJR_FRA`–
`VEJR_TIL` (kl. 10-20) i `fetchWeather()`; af de timer tages laveste og
højeste temperatur samt det kraftigste vejr. Vil du ændre tidsrummet, er
det de to konstanter der skal rettes — resten af logikken bruger bare
`min`/`max`/`navn`/`regn`.

To ting der er værd at kende ved yr.no:

- De leverer **kun fra nu og frem**. Åbner du appen kl. 7, fås hele
  10-20; åbner du kl. 19, kun 19-20. Er der ingen timer tilbage i dag,
  bruges morgendagens vindue i stedet for at vise ingenting.
- Deres vilkår kræver en `User-Agent` der identificerer appen, men den
  header kan en browser ikke sætte (spærret af Fetch-standarden). Vi er
  derfor teknisk set ikke helt på linje med vilkårene. De har selv slået
  CORS til, så browserklienter er forventede, men de kan lukke for det.
  Sker det, er Open-Meteo den oplagte reserve.

Vejret beskrives med tekst-koder (`"cloudy"`, `"lightrainshowers_day"`,
`"rainandthunder"`), ikke tal som Open-Meteos WMO-koder. `VEJR_TYPER` i
`script.js` oversætter dem til dansk og markerer hvilke der tæller som
regn. **Listen er sorteret efter kraftighed, kraftigst øverst** — den
rækkefølge bruges flere steder, så flyt ikke rundt på den uden at tænke
over alle tre:

1. **Navnet** er det vejr der fylder flest timer, ikke det kraftigste.
   Ved lige mange timer vinder det kraftigste. Det var før det kraftigste
   alene, men så døbte to timers torden hele dagen "Torden".
2. **Detaljelinjen** vises kun hvis der er kraftigere vejr i en del af
   tidsrummet, og nævner det med klokkeslæt: "torden 16–18". Timetallet
   lægges +1 til, fordi et symbol gælder timen *fra* det klokkeslæt.
3. **Regnjakken** tvinges frem hvis bare én time i tidsrummet er våd —
   uafhængigt af hvad beskrivelsen siger.

**Lejlighed:** menuen over flat-layet vælger hvor pænt tøjet skal være.
Hver lejlighed er et interval på `paenhed` (`OCCASIONS` i `script.js`):
Alt 1-5, Fint tøj 5, Fødselsdag 4-5, Skole 1-4, ØLLGAARD 3-5, Arbejde 1-2.
Valget gemmes i `localStorage` (`skabet-lejlighed`) og påvirker både
"Giv mig et sæt" og pilene.

`filtrerPaaLejlighed()` er bevidst et blødt filter: har en kategori intet
inden for intervallet, vælges det der ligger **tættest på** i stedet for at
åbne helt op. Det er nødvendigt, fordi der fx ikke findes nogen `mid` med
`paenhed` 5 — "Fint tøj" giver derfor en 4'er, ikke en tilfældig hoodie, og
et slot kan aldrig ende tomt. Tilføjer du tøj i den høje ende, retter det
sig selv.

**Undgå gentagelser:** `buildOutfit()` sammenligner med gårsdagens sæt
(gemt i `localStorage` under `skabet-history`) og undgår at vælge samme
stykke to dage i træk, hvis kategorien har et alternativ.

**Lås:** hvert slot har et låse-ikon (øverst til højre). Tryk toggler
kategorien i `lockedCats` (et `Set` i JS) — låste kategorier beholder
deres nuværende stykke ved næste shuffle, og pilene (se nedenfor) gør
ingenting på en låst kategori.

**Skift enkeltvis:** hvert slot har én pil-knap (`pil.jpg`) i ikon-zonen
til højre, der trækker et tilfældigt andet stykke i kategorien
(`cycleSlot()`), inden for den valgte lejlighed. Det nuværende stykke
filtreres fra puljen, så et tryk altid giver et synligt skift. Puljen
tages fra det viste stykkes egen kategori, ikke slottets navn — ellers
ville bukse-slottet skifte fra shorts til lange bukser på en varm dag.
Et lille "nik" i pilens retning
(`@keyframes bump-left/bump-right`, trigget fra JS) giver visuel feedback
ved klik — `:active` i CSS er ikke pålideligt nok på iOS Safari uden en
touch-lytter et sted på siden.

**Favoritter:** ☆-knappen i footeren gemmer/fjerner det viste sæt i
`localStorage` (`skabet-favorites`). Gemte sæt vises som en chip-liste
på "Favorit Outfits"; tryk henter sættet frem og skifter til "Vælg
Outfit" (ignorerer låse).

**Menu og visninger:** ☰-knappen i headeren åbner en menu med tre
visninger (`visView()` i `script.js`):

| Menupunkt | Sektion | Indhold |
|-----------|---------|---------|
| Mit klædeskab | `#view-skab` | alt tøjet i et gitter, kategori for kategori |
| Vælg Outfit | `#view-outfit` | flat-layet, lejlighedsmenuen og meta-chips |
| Favorit Outfits | `#view-favoritter` | gemte sæt |

Menuen folder sig ud fra ikonet (`@keyframes menu-fold-ud`/`-ind` i
`style.css`), og punkterne daler forskudt ind bagefter.

Menu-ikonet er en inline-SVG i knappen, ikke et tegn eller en billedfil.
De tre streger (`.mi-streg`) er identiske i markup — når menuen åbnes,
svinger den øverste og nederste ud som pilespids (`rotate(±45deg)`), den
midterste bliver skaftet, og løkken (`.mi-loekke`) tegner sig ind via
`stroke-dashoffset`, så ikonet forvandler sig til en "gå tilbage"-pil.
Begge tilstande bruger **samme transform-funktioner i samme rækkefølge**
(`translate` → `rotate` → `scaleX`); ellers falder browseren tilbage på
matrix-interpolation og bevægelsen bliver grim. `transform-box:view-box`
er nødvendig for at `transform-origin` regnes i viewBox-koordinater.

Selve lukningen styres af en **timer**
(`MENU_LUK_MS`), ikke af `animationend` — sidstnævnte udløses aldrig hvis
brugeren har slået animationer fra i systemet, og menuen ville så aldrig
blive skjult. Ændrer du varigheden i CSS, skal `MENU_LUK_MS` følge med.

Det er ikke en router — alle tre sektioner ligger i `index.html`, og der
skiftes ved at sætte `hidden` på de øvrige. Der er ingen URL pr. visning,
og valget huskes ikke: appen starter altid på "Vælg Outfit", fordi det er
det man skal bruge om morgenen.

Footeren hører til visningen: "Vælg Outfit" har shuffle + ☆, "Mit
klædeskab" har "+ Tilføj tøj", og "Favorit Outfits" har ingen knapper
(hele footeren skjules). Grupperne står som `.footer-group` med et
`data-footer`-attribut der matcher visningens navn.

I klædeskabet kan kun tøj tilføjet via formularen slettes (× på ruden) —
det hardcodede tøj står i `files` og skal fjernes der. Ruderne er
kvadratiske, netop så billedet kan roteres 90 grader uden at stikke uden
for sin rude.

**Billedskift (crossfade):** `renderSlot()` lader gammelt og nyt billede
ligge oveni hinanden i samme grid-celle (`grid-area:1/1` på `.garment`)
og krydsblender dem samtidig — venter med at fade det nye billede ind til
det faktisk er loadet (`img.onload`), så det ikke popper frem sent hvis
det ikke er cachet.

Slots uden tøj rendres som stiplede felter i stedet for at blive skjult
(sker i praksis ikke længere, siden alle fem kategorier altid vælges,
men koden er der stadig som sikkerhedsnet).

**Shorts:** over 22 grader skifter `buildOutfit()` puljen for `bottom`-slottet
fra kategorien `bottom` til `shorts` (se kommentaren ved `benKat` i
`buildOutfit()`) — selve slottet hedder stadig `bottom`, der findes ikke
noget separat shorts-slot i layoutet.

**Størrelse og placering per kategori:** hver af de fem kategorier har sine
egne CSS custom properties i `:root` (`style.css`) til både tøjbilledet og
ikonerne, uafhængigt af hinanden:
- `--h-<kategori>` (boks-højde) og `--y-<kategori>` (lodret placering af
  billedet i boksen, 0px = centreret, negativt = op)
- `--lock-<kategori>` / `--lock-y-<kategori>` (låse-ikonets størrelse/placering)
- `--arrow-<kategori>` / `--arrow-y-<kategori>` (pil-ikonernes størrelse/placering)

hvor `<kategori>` er `jacket`, `mid`, `top`, `bottom` eller `shoes`. Det er
den letteste måde at justere udseendet af én kategori uden at påvirke de
andre.

## Konventioner

- Vanilla JS. Ingen frameworks, ingen npm, intet build-trin til selve
  appen. Node/Homebrew-værktøjer er kun blevet brugt til engangsopgaver
  (GitHub CLI til deploy, `rsvg-convert` til at generere ikoner) — ikke
  en runtime-dependency for appen selv. Spørg før du introducerer noget
  der ændrer på det.
- Tre filer (`index.html`/`style.css`/`script.js`) — splittet fra én fil
  da den blev for stor til nemt at navigere. Splitter vi yderligere, skal
  det være fordi en af de tre er blevet uoverskuelig, ikke på forhånd.
- CSS-variabler til farver og mål, defineret i `:root`. Ingen hardcodede
  hex-værdier længere nede i filen.
- To skrifttyper: `Instrument Serif` til titlen, og `Bitter` (variablen
  `--font-label`) til lejlighed og vejr. Vil du prøve en anden, skal både
  `<link>`-tagget i `index.html` og `--font-label` rettes. Nære alternativer:
  `Zilla Slab`, `Rokkitt`, `Arvo`.
- `.occasion select` har `appearance:none` med en selvtegnet pil. Det er
  **ikke** pynt: Safari ignorerer `padding` på en native `<select>` og giver
  den sin egen faste højde (22px mod ~39px i Chrome). Uden `appearance:none`
  kan vejret til højre ikke flugte pålideligt i begge browsere.
- `[hidden]{display:none !important}` står med vilje øverst i `style.css`.
  Uden den ville en almindelig `display:flex`-regel vinde over browserens
  egen `[hidden]`-regel, så `el.hidden = true` ikke ville skjule noget —
  det rammer både menuen, footer-grupperne og visningerne.
- Kommentarer i koden er på dansk uden æ, ø og å.
- Billeder vises med `object-fit: contain` i slots med fast højde. Det er
  det der holder layoutet stabilt når fotos har forskellige dimensioner.
  Lav det ikke om til `cover`.
- `.slot` er `display:grid` (ikke flex) med `container-type:size` — det
  er det der gør `cqw`/`cqh`-enhederne tilgængelige, som bruges til at
  kompensere for at alt tøj (også sko, siden seneste fotoomgang) er
  fotograferet på siden og roteres 90 grader i CSS (`transform:rotate(90deg)`).
  Almindelig `%`-baseret `max-height` er upålidelig i et grid uden fast
  række-højde — brug cqw/cqh, ikke `%`, til billedstørrelse i `.slot`.
  Et enkelt billede der er gemt allerede opret (i stedet for på siden) vil
  blive drejet forkert af denne fælles regel — ret i så fald selve
  billedfilen (rotér den), ikke CSS'en.
- Skifter du indholdet af en billedfil UDEN at ændre filnavnet (fx retter
  en fejl som ovenstående), så bump `ASSET_VERSION` i `script.js` (lige
  over `builtInItems`). Ellers bliver den gamle udgave siddende fast i
  Safaris cache på telefonen, selvom den nye fil er pushet. Det samme
  gælder efter en større CSS/JS-ændring — Safari kan cache `style.css`/
  `script.js` selv, ikke kun billeder (Indstillinger → Safari → Avanceret →
  Webstedsdata → slet, for at tvinge en frisk hentning under aktiv udvikling).
- **`style.css` og `script.js` linkes med `?v=<dato>` i `index.html`.** Bump
  den dato hver gang du ændrer en af de to filer. Uden det kan Safari sidde
  fast på en gammel `style.css` sammen med en ny `index.html` — og så mangler
  reglerne til det nye markup, hvilket viser sig som elementer der falder
  sammen eller forsvinder (fx et menu-ikon uden størrelse). Det er sket flere
  gange og er nu den faste forklaring at tjekke først, når noget "ikke er
  opdateret" på telefonen.
- Tøj-billedet (det faktiske billede af en genstand) har altid klassen
  `garment`, adskilt fra ikon-billeder (lås/pil), så CSS-reglerne for
  rotation/størrelse/crossfade ikke ved et uheld rammer ikonerne.

## Kendte problemer

- Alle billeder er skiftet ud (ny fotoomgang) og auto-beskåret til deres
  faktiske indhold, hvilket løste det meste af den tidligere skala-uro
  mellem tøjstykker fotograferet på forskellig afstand. Reel fysisk
  størrelsesforskel (en jakke fylder mere end et t-shirt) er stadig korrekt
  og skal ikke rettes.

## Roadmap

Rækkefølgen er bevidst. Tag ét trin ad gangen, og spørg før du springer frem.

1. ✅ Rigtigt vejr. yr.no (MET Norway), ingen API-nøgle. Startede på
   Open-Meteo. København er 55.68, 12.57.
2. ✅ Undgå gentagelser. Historik gemmes i `localStorage`, samme stykke
   undgås dagen efter det er brugt.
3. ✅ Gem favoritsæt, så et godt sæt kan hentes frem igen.
4. ✅ Formular til at tilføje tøj i appen. Nyt tøj tilføjet via formularen
   gemmes i `localStorage` (kun på den enhed det er tilføjet fra) og
   lægges sammen med det hardcodede tøj fra `files` ved opstart.
5. ⏭️ Database. Bevidst sprunget over — trin 4 (formularen) har ikke
   gjort `files`-objektet upraktisk, og der er ingen grund til det endnu.
6. ✅ PWA-manifest, så appen kan ligge på hjemmeskærmen. `manifest.json` +
   `icons/` + Apple-specifikke `<meta>`-tags i `<head>`. Giver mening nu
   siden appen har en stabil offentlig adresse (se Hosting) — husk at
   slette og gen-tilføje et evt. gammelt hjemmeskærm-ikon der blev lavet
   før manifestet fandtes.

Roadmappet er dermed gennemført. Videre arbejde er ad hoc-forbedringer,
ikke en fast rækkefølge længere.

Ikke på roadmappet: AI-genererede outfits, brugerkonti, deling.

## Hosting

Appen ligger på GitHub Pages: https://kloips.github.io/skabet/
Repo: https://github.com/kloips/skabet (public — det er en nødvendighed for
gratis GitHub Pages, ikke et bevidst valg om deling. Der er ingen login,
så adressen er reelt offentlig for alle der har linket).

Deploy sker ved at pushe til `main` — ingen build, ingen CI, statiske filer
serveres direkte. `img/original-jpg/` er git-ignoreret og ligger kun lokalt.

Dette var oprindeligt fravalgt ("ikke på roadmappet: hosting"), men blev
lavet fordi den lokale løsning (npx serve på hjemmenetværket) krævede at
Mac'en var tændt og på samme wifi som telefonen, hvilket ikke var
acceptabelt til daglig brug.

## Databaseskema til senere

Bruges ikke endnu. Ligger her så trin 5 ikke starter forfra. `wear_log` er
den vigtigste tabel, fordi den gør det muligt at filtrere nyligt brugt tøj fra.

```sql
CREATE TABLE items (
  id            INTEGER PRIMARY KEY,
  name          TEXT NOT NULL,
  category      TEXT NOT NULL,   -- top, bottom, outerwear, mid, shoes
  subcategory   TEXT,
  color_primary TEXT,
  color_second  TEXT,
  pattern       TEXT,            -- solid, striped, checked, print
  material      TEXT,
  formality     INTEGER,         -- 1 = afslappet, 5 = formelt
  warmth        INTEGER,         -- 1 = tyndt, 5 = vinter
  seasons       TEXT,            -- JSON-array
  image_path    TEXT,
  is_favorite   INTEGER DEFAULT 0,
  is_active     INTEGER DEFAULT 1,
  created_at    TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE outfits (
  id         INTEGER PRIMARY KEY,
  name       TEXT,
  occasion   TEXT,
  temp_min   INTEGER,
  temp_max   INTEGER,
  source     TEXT,               -- ai, manual
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE outfit_items (
  outfit_id INTEGER NOT NULL REFERENCES outfits(id) ON DELETE CASCADE,
  item_id   INTEGER NOT NULL REFERENCES items(id)   ON DELETE CASCADE,
  PRIMARY KEY (outfit_id, item_id)
);

CREATE TABLE wear_log (
  id        INTEGER PRIMARY KEY,
  item_id   INTEGER NOT NULL REFERENCES items(id) ON DELETE CASCADE,
  outfit_id INTEGER REFERENCES outfits(id) ON DELETE SET NULL,
  worn_on   TEXT NOT NULL
);

CREATE INDEX idx_items_category ON items(category);
CREATE INDEX idx_wear_log_item  ON wear_log(item_id, worn_on);
```

## Sådan vil jeg have hjælp

- Svar på dansk, kort og konkret.
- Skriv præcis hvilken fil og hvilken linje der skal ændres. Gå ikke ud fra
  at jeg husker en tidligere fremgangsmåde.
- Har du svaret, så giv det færdigt til copy-paste i stedet for at bede mig
  finde det.
- Ved fejl: foreslå én årsag ad gangen, ikke en liste af muligheder.
- Byg ikke hele filen om for at løse noget lille. Lav den mindste ændring
  der virker.
- Er noget en dårlig idé, så sig det direkte i stedet for at bygge det.
