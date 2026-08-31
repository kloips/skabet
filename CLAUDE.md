# Skabet

Personlig outfit-app. Trykker på en knap og får trukket et tilfældigt sæt tøj
fra min egen garderobe, vist som et flat-lay med rigtige billeder.

Bygget til mig selv, primært til brug på mobil om morgenen. Ikke et produkt,
ingen brugere ud over mig, ingen login.

## Status lige nu

Statisk side, hostet live på GitHub Pages (se Hosting). Stadig én HTML-fil
med inline CSS og vanilla JS — ingen build, ingen npm-dependencies, ingen
server, ingen database. Kan stadig åbnes lokalt ved at dobbeltklikke på
`index.html`, men bruges i praksis via den offentlige adresse.

Roadmappets seks trin er alle gennemført (database er bevidst sprunget
over, se Roadmap). Det virker. Næste skridt er ikke at bygge om, men at
forbedre i små trin.

## Filstruktur

```
skabet/
  index.html          hele appen: markup, CSS og JS i én fil
  manifest.json        PWA-manifest til "Føj til hjemmeskærm"
  icon-source.svg       kilde-SVG til hjemmeskærm-ikonet (groent "S")
  icons/                genererede PNG-ikoner (192, 512, apple-touch-icon)
  img/
    lock-icon.jpg       laase-ikon (bruges)
    pil.jpg             pil-ikon til skift-knapperne (bruges, zoomet ind i CSS)
    next-icon.jpg        gammelt "skift"-ikon fra foer swipe/pile - ubrugt
    outerwear-*.png, mid-*.png, top-*.png, bottom-*.png   fritlagte PNG'er
    shoes-*.JPG          stadig JPG, se Kendte problemer
    original-jpg/       de oprindelige fotos, git-ignoreret, bruges ikke af appen
  CLAUDE.md
```

## Datamodel

Tøjet kommer fra to kilder, som laegges sammen til ét `items`-array ved
opstart (`rebuildItems()`):

1. **Hardcodet** i objektet `files` øverst i `<script>` i `index.html`:
   ```js
   const files = {
     "top-1.png": "Sort t-shirt",
     ...
   };
   ```
   Filnavnet før første bindestreg er kategorien. Værdien er navnet der
   vises i favorit- og meta-chips.
2. **Tilføjet fra formularen** ("+"-knappen i footeren). Gemmes i
   `localStorage` under nøglen `skabet-extra-items` — findes derfor kun
   på den enhed/browser det er tilføjet fra. Billedet skaleres til maks
   1000px og gemmes som PNG (bevarer transparens) via `resizeImage()`.

Der er præcis fem gyldige kategorier:

| Kategori    | Slot i layoutet   |
|-------------|-------------------|
| `outerwear` | jakker, frakker   |
| `mid`       | trøjer, strik     |
| `top`       | t-shirts, skjorter|
| `bottom`    | bukser, jeans     |
| `shoes`     | sko, støvler      |

Kategorinavnene er hardcodet flere steder: i `data-cat` på hvert `.slot`,
i `CATS`-arrayet i JS, i `grid-template-areas` i `.lay` (CSS), og i
kategori-selecten i tilføj-formularen. Ændrer du et af dem, skal alle
steder rettes.

## Sådan virker logikken

`buildOutfit()` vælger et stykke i alle fem kategorier hver gang — der er
ikke længere nogen temperatur-afhængig fravalg af `mid`/`outerwear` (det
var oprindeligt sådan, men blev bevidst fjernet). Vejret bruges kun til
visning i headeren, ikke til at styre valget af tøj.

**Undgå gentagelser:** `buildOutfit()` sammenligner med gårsdagens sæt
(gemt i `localStorage` under `skabet-history`) og undgår at vælge samme
stykke to dage i træk, hvis kategorien har et alternativ.

**Lås:** hvert slot har et låse-ikon (øverst til højre). Tryk toggler
kategorien i `lockedCats` (et `Set` i JS) — låste kategorier beholder
deres nuværende stykke ved næste shuffle, og pilene (se nedenfor) gør
ingenting på en låst kategori.

**Skift enkeltvis:** hvert slot har to pil-knapper (`pil.jpg`, spejlvendt
for venstre) der blader frem/tilbage gennem den kategoris tøj i rækkefølge
(`cycleSlot()`), ikke tilfældigt. Et lille "nik" i pilens retning
(`@keyframes bump-left/bump-right`, trigget fra JS) giver visuel feedback
ved klik — `:active` i CSS er ikke pålideligt nok på iOS Safari uden en
touch-lytter et sted på siden.

**Favoritter:** ☆-knappen i footeren gemmer/fjerner det viste sæt i
`localStorage` (`skabet-favorites`). Gemte sæt vises som en chip-liste
under outfittet; tryk henter sættet frem igen (ignorerer låse).

**Billedskift (crossfade):** `renderSlot()` lader gammelt og nyt billede
ligge oveni hinanden i samme grid-celle (`grid-area:1/1` på `.garment`)
og krydsblender dem samtidig — venter med at fade det nye billede ind til
det faktisk er loadet (`img.onload`), så det ikke popper frem sent hvis
det ikke er cachet.

Slots uden tøj rendres som stiplede felter i stedet for at blive skjult
(sker i praksis ikke længere, siden alle fem kategorier altid vælges,
men koden er der stadig som sikkerhedsnet).

## Konventioner

- Vanilla JS. Ingen frameworks, ingen npm, intet build-trin til selve
  appen. Node/Homebrew-værktøjer er kun blevet brugt til engangsopgaver
  (GitHub CLI til deploy, `rsvg-convert` til at generere ikoner) — ikke
  en runtime-dependency for appen selv. Spørg før du introducerer noget
  der ændrer på det.
- Alt bliver i `index.html` indtil filen bliver uoverskuelig. Så splitter
  vi, ikke før.
- CSS-variabler til farver og mål, defineret i `:root`. Ingen hardcodede
  hex-værdier længere nede i filen.
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
  en fejl som ovenstående), så bump `ASSET_VERSION` i `index.html` (lige
  over `builtInItems`). Ellers bliver den gamle udgave siddende fast i
  Safaris cache på telefonen, selvom den nye fil er pushet.
- Tøj-billedet (det faktiske billede af en genstand) har altid klassen
  `garment`, adskilt fra ikon-billeder (lås/pil), så CSS-reglerne for
  rotation/størrelse/crossfade ikke ved et uheld rammer ikonerne.

## Kendte problemer

- `shoes-1` og `shoes-2` er stadig JPG. macOS' baggrundsfjernelse kunne ikke
  finde skoene i billedet, fordi de er fotograferet for langt væk mod et
  rodet underlag. Løsningen er at fotografere dem om, ikke at rette i kode.
- Fotos er taget på en seng i blandet lys. Skalaen mellem tøjstykkerne er
  derfor ikke konsistent. Rettes ved at fotografere om, ikke i CSS.

## Roadmap

Rækkefølgen er bevidst. Tag ét trin ad gangen, og spørg før du springer frem.

1. ✅ Rigtigt vejr. Open-Meteo, ingen API-nøgle. København er 55.68, 12.57.
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
