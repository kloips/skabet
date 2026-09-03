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
   - `navn` — vises i meta-chippene under flat-layet, under hver rude i
     klædeskabet, og i forstørrelsen. **Ikke** på favoritsiden, som kun
     viser billeder.
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
`.lay` (`style.css`), i `KAT_NAVNE` (klædeskabets overskrifter), i
`FAV_SLOTS` (favoritvisningens rækkefølge) og i kategori-selecten i
tilføj-formularen (`index.html`). Ændrer du et af dem, skal alle steder
rettes.

`CATS` og `FAV_SLOTS` er bevidst ikke det samme array: `CATS` indeholder
`shorts`, fordi den er en rigtig kategori på tøjet, mens `FAV_SLOTS` er de
fem slots der findes i layoutet. Et par shorts gemmes under nøglen `bottom`.

### Hvad der ligger i localStorage

Fem nøgler, alle på den enkelte enhed. Der er ingen synkronisering — sletter
du webstedsdata i Safari, er alt herunder væk.

| Nøgle | Indhold | Fyldes af |
|-------|---------|-----------|
| `skabet-extra-items` | tøj tilføjet via "+"-formularen, inkl. billedet som data-URL | tilføj-formularen |
| `skabet-history` | **ét** objekt: `{ date, outerwear, mid, top, bottom, shoes }` — det appen sidst **foreslog** | hver shuffle, hvert piletryk, hver favorit der hentes frem |
| `skabet-log` | array af `{ date, ids: [...] }`, ét sæt pr. dag, trimmet til 90 dage — det jeg **faktisk gik i** | udelukkende ✓-knappen |
| `skabet-favorites` | array af `{ id, outerwear, mid, top, bottom, shoes }` | ☆-knappen |
| `skabet-lejlighed` | nøglen på den valgte lejlighed, fx `"skole"` | lejlighedsvælgeren |

`skabet-history` og `skabet-log` ligner hinanden, men er to forskellige ting
og skal blive ved med at være det. Historikken er hvad appen **gættede**, og
den overskrives konstant; loggen er hvad jeg **bekræftede**, og den udfyldes
kun når jeg trykker ✓. Bland dem ikke sammen.

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
2. **Regnjakken** kræver **to** ting samtidig: mindst én time med et symbol
   som `VEJR_TYPER` markerer som regn, **og** at den samlede nedbør i
   tidsrummet er mindst `REGN_MM` (0,5 mm). Et regnsymbol alene er ikke nok —
   yr.no sætter også "lightrain" på en time med 0,1 mm, som man dårligt
   mærker. Nedbøren tælles kun fra `next_1_hours.details.precipitation_amount`,
   aldrig fra `next_6_hours`, som ville trække nedbør uden for tidsrummet med.
   Feltet mangler på den sidste række og kan mangle sporadisk; de rækker
   springes over.

**Navnet og regnjakken er med vilje ikke koblet.** Der kan stå "Regn" i
headeren uden at regnjakken tvinges frem, hvis der kun falder 0,3 mm. Det
er ikke en fejl: beskrivelsen fortæller hvad dagen mest er, jakken handler
om hvorvidt man bliver våd. Hold dem adskilt.

Der har været forsøgt en tredje linje med "torden 16–18". Den er fjernet
igen — den beskrev reelt det samme to gange.

**Vejret hentes EFTER sættet er vist.** `init()` bygger og viser sættet med
det samme på fallback-temperaturen (14 grader, `regnvejr` = false), og henter
først vejret bagefter. Før ventede layoutet på hentningen og stod tomt i op
mod et sekund.

Prisen er at to ting kan være valgt på et forkert grundlag når vejret lander.
`retEfterVejr()` retter **kun** dem, og kun hvis de beviseligt er forkerte:

- **Regn.** Er det regnvejr, og er den valgte jakke ikke tagget `regn: true`,
  trækkes en ny. Byttes kun hvis der faktisk kom en regnjakke ud af det.
- **Shorts.** Har temperaturen krydset 22-graders-grænsen den anden vej end
  fallback-værdien, trækkes et nyt stykke til `bottom`.

Der bruges `renderSlot()` på de enkelte slots, ikke `render()` på hele sættet
— så krydsblender det ene billede i stedet for at hele layoutet hopper. Er
der intet at rette, røres skærmen ikke. Fejler hentningen, sker der ingenting.

`foersteSaet`-flaget hænger sammen med det: `shuffle()` sætter det til `false`
med det samme, så `retEfterVejr()` sætter det midlertidigt til `true` mens den
trækker regnjakken, og tilbage til `false` bagefter. Dermed tæller rettelsen
som dagens første sæt, og et efterfølgende tryk på "Giv mig et sæt" har alle
jakker i spil igen.

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

**Undgå gentagelser (gårsdagen):** `buildOutfit()` sammenligner med
`skabet-history` og undgår at vælge samme stykke som i går, hvis kategorien
har et alternativ. Vær opmærksom på at reglen kun gælder **dagens første
sæt**: betingelsen er `history.date !== today`, og `saveHistory()` skriver
dagens dato ved hver shuffle. Efter det første tryk er `isNewDay` falsk, og
resten af dagens shuffles tager ikke hensyn til i går.

**Karantæne (nyligt båret):** en anden og strengere regel oven i den. Har
jeg trykket ✓ på et sæt, holdes de stykker ude af puljen i et antal dage per
kategori (`KARANTAENE` i `script.js`):

| Kategori | Dage |
|----------|------|
| `top` | 7 |
| `mid` | 4 |
| `bottom` / `shorts` | 3 |
| `shoes` | 2 |
| `outerwear` | 0 (ingen pause) |

Tallet er antal dage **inklusive den dag jeg trykkede ✓** — sko båret mandag
er i spil igen onsdag. Vinduet regnes forfra hver gang `pick()` kaldes, ud fra
enhedens ur; der kører ingen timer i baggrunden. Datoerne sammenlignes som
tekst, hvilket virker fordi `YYYY-MM-DD` sorterer alfabetisk i samme
rækkefølge som kronologisk.

`filtrerPaaKarantaene()` er **blød** på præcis samme måde som
`filtrerPaaLejlighed()`: tømmer filtret puljen, springes karantænen over.
Et slot må aldrig ende tomt. Er `skabet-log` tom — altså har jeg aldrig
trykket ✓ — returnerer den puljen uændret, og appen opfører sig som før
karantænen fandtes.

Rækkefølgen i `pick()` er **regnjakke → lejlighed → karantæne**, og den
rækkefølge er ikke tilfældig: regnjakken vælges først, så man aldrig står
uden i regnvejr, uanset hvad de to andre filtre ville have sagt.

**`cycleSlot()` (pilene) springer karantænen over.** Den bruger kun
`filtrerPaaLejlighed()`. Det er bevidst: trykker jeg selv på pilen, vil jeg
se alt hvad der findes, ikke have appen til at gemme noget for mig.

**"Det tog jeg på i dag" (✓):** knappen i footeren skriver det viste sæt til
`skabet-log` med dagens dato. Der er plads til ét sæt pr. dag — er der
allerede logget et andet, overskrives det. Tryk igen med samme sæt fremme
fortryder registreringen. Tilstanden vises alene via `aria-pressed`, som
`.ghost[aria-pressed="true"]` farver grøn.

**Fortryd (↺):** ét skridt tilbage til sættet før seneste hele shuffle.
Knappen vipper frem og tilbage mellem de to seneste sæt. `forrigeSaet` lever
kun i hukommelsen og forsvinder ved genindlæsning — det er med vilje, der er
ingen historik-stak og ingenting gemt i `localStorage`. Knappen er `disabled`
indtil der er noget at gå tilbage til, og `disabled` står også i markup'et,
fordi `init()` er asynkron og JS ikke har rørt knappen i det øjeblik siden
vises.

Hverken pilene eller det at hente en favorit tæller som et skridt — kun
`shuffle()` gemmer et forrige sæt. Ændringer lavet med pilene følger med når
man vipper.

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
`skabet-favorites`. Formatet er `{ id, outerwear, mid, top, bottom, shoes }`
og er aldrig blevet ændret — gamle gemte sæt virker uden migrering.

"Favorit Outfits" viser **ét sæt ad gangen i fuld bredde**, med de fem
stykker stablet lodret som billeder. Man bladrer vandret. Det var før en
liste af chips med fem navne adskilt af prikker, hvilket var ulæseligt.
Navnene vises ikke længere — billederne er hele pointen.

- Bladringen er ren CSS: `scroll-snap-type: x mandatory` på `.fav-baand` og
  `scroll-snap-align: start` + `scroll-snap-stop: always` på hver `.fav-side`.
  `scroll-snap-stop` er det der gør at et hurtigt swipe kun flytter én side.
- Positionsviseren ("3 af 7") står **på hver side** i stedet for at blive
  opdateret fra en scroll-lytter. Så er der ingen lytter der skal holdes ved lige.
- Hver side har "Hent frem" (gør præcis det `loadFavorite()` gør, inkl. skift
  til "Vælg Outfit" og at ignorere låse) og "Fjern" med `confirm()` først —
  der er ingen fortryd her, og et fejltryk under bladring er let at lave.
- Efter en fjernelse sættes `scrollLeft` så man bliver stående samme sted i
  båndet, ikke hopper tilbage til den første.

**Manglende tøj i en gammel favorit:** et gemt id kan pege på tøj der ikke
findes mere, fordi det er fjernet fra `files` eller slettet fra det
selvtilføjede. Pladsen vises som et stiplet tomt felt, og sættet får linjen
"Et stykke i dette sæt findes ikke længere". Sættet kan **stadig** hentes
frem; de øvrige stykker kommer med. Tidligere forsvandt stykket lydløst ud
af navnestriben, hvilket var værre.

Favoritvisningen genbruger **ikke** `.lay`, `.slot` eller klassen `garment` —
den har sit eget navnerum (`.fav-baand`, `.fav-side`, `.fav-stak`,
`.fav-plads`, `.fav-billede`). Men den genbruger `--h-*`-variablerne til
højderne, så tøjet fylder præcis det samme som på forsiden. Er der ikke
plads nok på en lav skærm, skrumper alle fem proportionalt, fordi
`flex-shrink` fordeler efter `flex-basis`.

**Forstørrelse:** tryk på et tøjbillede viser det i fuld skærm på et lag
(`#zoom`), med navnet under. Det virker fire steder — i flat-layet, på
favoritsiden og begge steder i klædeskabet. Tryk hvor som helst på laget
eller Escape lukker.

Laget er bevidst **ikke** en `<dialog>`: der er ingen felter at udfylde, så
backdrop og fokusfælde ville kun være noget at styre udenom. Billedet har sin
egen klasse (`.zoom-billede`), så `.slot img.garment` ikke rammer det.

I klik-lytterne skal billed-tjekket stå **efter** knapperne. Slet-knappen i
klædeskabet ligger inde i selve ruden, så tjekker man billedet først, både
sletter og forstørrer et tryk på ×.

**Menu og visninger:** ☰-knappen i headeren åbner en menu med tre
visninger (`visView()` i `script.js`):

| Menupunkt | Sektion | Indhold |
|-----------|---------|---------|
| Mit klædeskab | `#view-skab` | oversigt med en vandret række pr. kategori, plus kategori-siden som en tilstand i samme sektion |
| Vælg Outfit | `#view-outfit` | flat-layet, lejlighedsmenuen, vejret og meta-chips |
| Favorit Outfits | `#view-favoritter` | gemte sæt, ét ad gangen |

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

Footeren hører til visningen: "Vælg Outfit" har shuffle + ☆ + ✓ + ↺, "Mit
klædeskab" har "+ Tilføj tøj" i begge tilstande, og "Favorit Outfits" har
ingen knapper (hele footeren skjules). Grupperne står som `.footer-group`
med et `data-footer`-attribut der matcher visningens navn.

De fire knapper på "Vælg Outfit" er grunden til at `.ghost` har
`padding-inline:12px` og ikke 16 — ellers blev "Giv mig et sæt" presset over
to linjer. Fra 344px skærmbredde og op står alt på én linje; en 320px skærm
(iPhone SE fra 2016) bryder stadig teksten. Skæres der mere, bliver
knapperne under 40px brede at ramme.

**Mit klædeskab** har **to tilstande i samme sektion** — en oversigt og en
kategori-side — styret af variablen `skabKategori` (`null` = oversigt).

Det er bevidst **ikke** et fjerde menupunkt. `visView()` er bygget om tre
faste visninger med hvert sit punkt, og menu-ikonet forvandler sig allerede
til en tilbage-pil når menuen er åben. En fjerde visning ville betyde enten
et menupunkt man aldrig vælger direkte, eller to konkurrerende måder at gå
tilbage på.

**Oversigten** har én vandret række pr. kategori:
- Rækken scroller med `scroll-snap-type: x proximity`. Ren CSS, ingen JS.
- Rudebredden er `calc((100% - 3 * 8px) / 3.5)` — en **brøkdel af pladsen,
  ikke et pixeltal**. De 3,5 er pointen: den fjerde rude er altid halvt
  synlig som signal om at der er mere, uanset skærmbredde.
- `min-width:0` på ruderne er nødvendig. Uden den lader `min-width:auto`
  min-content vinde over `flex-basis`, og lange ord i navnet presser ruden
  bredere end den skal være.
- Overskriften er en knap der fører til kategori-siden. Ingen pænhed-badge
  og ingen slet-knap her — de ville blive ramt ved et uheld under scroll.

**Kategori-siden** har alle genstande i et gitter på tre, pænhed-badge,
slet-knap på selvtilføjet tøj, og en filterrække: pænhed (Alle/1-5), "Egnet
til regn" og "Aldrig båret". Filtrene kombineres, er rent DOM-filter, gemmes
ikke, og nulstilles når man går tilbage. Matcher intet, vises `.tom-besked`.

Man lander **altid** på oversigten når man går ind fra menuen — `visView()`
nulstiller `skabKategori` og filtrene. Man skal ikke lande i en kategori man
så i går.

**Sortering:** begge tilstande sorterer efter hvor mange gange hvert stykke
står i `skabet-log`, flest først. `baaretAntal()` bygger en Map **én gang pr.
rendering** i stedet for at slå op i loggen for hver genstand. `Array.sort`
er stabil, så stykker med lige mange gange beholder deres rækkefølge fra
`items`, og nul gange havner naturligt til sidst.

I klædeskabet kan kun tøj tilføjet via formularen slettes (× på ruden) —
det hardcodede tøj står i `files` og skal fjernes der. Ruderne er
kvadratiske, netop så billedet kan roteres 90 grader uden at stikke uden
for sin rude.

Bemærk at `shorts` optræder som sin egen kategori i klædeskabet, selvom den
ikke har noget slot i flat-layet.

**Billedskift (crossfade):** `renderSlot()` lader gammelt og nyt billede
ligge oveni hinanden i samme grid-celle (`grid-area:1/1` på `.garment`)
og krydsblender dem samtidig — venter med at fade det nye billede ind til
det faktisk er loadet (`img.onload`), så det ikke popper frem sent hvis
det ikke er cachet.

Slots uden tøj rendres som stiplede felter i stedet for at blive skjult
(sker i praksis ikke længere, siden alle fem kategorier altid vælges,
men koden er der stadig som sikkerhedsnet).

**Shorts:** over 22 grader skifter puljen for `bottom`-slottet fra kategorien
`bottom` til `shorts` — selve slottet hedder stadig `bottom`, der findes ikke
noget separat shorts-slot i layoutet. Reglen står i funktionen
`benKategori()`, ikke inde i `buildOutfit()`, fordi `retEfterVejr()` skal
stille samme spørgsmål igen når vejret lander.

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
- Lejlighedsvælgeren er **ikke** en `<select>`, men en knap plus en liste
  (`.vaelger` i `style.css`, `byggVaelger()` i `script.js`). Browserens
  indbyggede dropdown kan ikke styles, og Safari ignorerer oveni købet
  `padding` på en native `<select>` og giver den sin egen faste højde
  (22px mod ~39px i Chrome) — så den kunne heller ikke flugte pålideligt
  med vejret. Punkterne bygges fra `OCCASIONS`, så navnene kun står ét
  sted. Lukningen bruger en timer (`VAELGER_LUK_MS`) af samme grund som
  hovedmenuen.
- **Knappens højde er 38,75px og hænger sammen med vejret til højre.**
  `.weather-temp` (18px) + `.weather-navn` (32px) er valgt så de to linjer
  tilsammen fylder præcis det samme som label + knap. Ændrer du padding
  eller skriftstørrelse ét af stederne, holder bundene op med at flugte.
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
- Tøj-billedet **i et slot i flat-layet** har altid klassen `garment`,
  adskilt fra ikon-billeder (lås/pil), så CSS-reglerne for
  rotation/størrelse/crossfade ikke ved et uheld rammer ikonerne. Klassen er
  forbeholdt netop det: klædeskabet (`.ward-billede img`), favoritvisningen
  (`.fav-billede`) og forstørrelsen (`.zoom-billede`) har hver deres egen
  klasse, fordi `.slot img.garment` er bundet til slottets
  `container-type:size` og til `--h-*`-højderne. Genbrug ikke `garment`,
  `.lay` eller `.slot` uden for flat-layet — kopiér teknikken i stedet.
- **Vandret bladring laves med CSS scroll-snap, ikke JS.** Både klædeskabets
  rækker (`x proximity`) og favoritbåndet (`x mandatory`) er ren CSS. Der er
  ingen swipe-lyttere, ingen touch-håndtering og intet bibliotek i appen, og
  det skal der blive ved med ikke at være.
- **Et lag der animerer ind og ud, skjules med en timer — ikke med
  `animationend`.** Mønstret bruges tre steder: menuen (`MENU_LUK_MS`),
  lejlighedsvælgeren (`VAELGER_LUK_MS`) og forstørrelsen (`ZOOM_LUK_MS`).
  Grunden er at `animationend` aldrig udløses hvis brugeren har slået
  animationer fra i systemet, og laget så aldrig ville blive skjult. Ændrer
  du varigheden i CSS, skal konstanten følge med.
- Knap-feedback trigges fra JS via `bump()`, ikke via `:active` — det sidste
  er ikke pålideligt på iOS Safari. Funktionen er generisk: den bruges både
  af pilene i flat-layet og af fortryd-knappens rotation.
- Alle animationer skal også være slået fra under
  `@media (prefers-reduced-motion:reduce)`. Tilføjer du en ny, tilføj den
  også der.

## Kendte problemer

- Alle billeder er skiftet ud (ny fotoomgang) og auto-beskåret til deres
  faktiske indhold, hvilket løste det meste af den tidligere skala-uro
  mellem tøjstykker fotograferet på forskellig afstand. Reel fysisk
  størrelsesforskel (en jakke fylder mere end et t-shirt) er stadig korrekt
  og skal ikke rettes.
- **Rækkefølgen i klædeskabet ser usorteret ud indtil `skabet-log` har data.**
  Den er sorteret efter antal gange båret, men før jeg har trykket ✓ nogle
  gange er alle tal 0, og en stabil sortering lader dem stå i den rækkefølge
  de har i `files`. Det ligner en fejl, men er det ikke — det er
  sorteringen der ikke har noget at gå efter endnu.
- `img/next-icon.jpg` bruges ikke af noget. Den er fra før pilene erstattede
  swipe. Kan slettes.
- `aktivView` i `script.js` sættes af `visView()`, men læses ingen steder.
  Den er efterladt fra dengang footeren blev styret på en anden måde.

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

### Lavet siden roadmappet blev gennemført

Kort liste, så det er til at se hvad der er kommet til. Detaljerne står i
"Sådan virker logikken".

- Vejrkilden skiftet fra Open-Meteo til yr.no, og begrænset til kl. 10-20
  i stedet for hele døgnet.
- Nedbørsgrænse på regnjakken, så et regnsymbol alene ikke er nok.
- Sættet vises straks ved opstart; vejret retter kun de slots der er forkerte.
- Lejlighedsmenu (`paenhed` 1-5 på alt tøj) med egen vælger i stedet for
  en `<select>`.
- ✓-knap og `skabet-log`, plus karantæne på nyligt båret tøj.
- Fortryd-knap (↺), ét skridt tilbage.
- Forstørrelse af tøjbilleder ved tryk.
- "Mit klædeskab" og "Favorit Outfits" begge skrevet om fra bunden.

### Ligger og venter

Ikke besluttet, ikke i gang. Rækkefølgen er ikke fastlagt.

1. **Farvefelt på tøjet og regler mod farvekollision.** Datamodellen har
   plads til det (`color_primary`/`color_second` i skemaet nedenfor), men
   hverken felterne eller reglerne er besluttet. Det svære er ikke at gemme
   farven, men at afgøre hvad der egentlig kolliderer — det skal tænkes
   igennem før der kodes.
2. **Arkiv-status i stedet for sletning.** Tøj man ikke går i længere skal
   kunne tages ud af puljen uden at forsvinde, så gamle favoritter og
   `skabet-log` beholder mening. Ville også fjerne "manglende stykke"-
   tilfældet på favoritsiden.
3. **Eksport og import af `localStorage`-data som backup.** Alt ligger på én
   enhed uden synkronisering: rydder Safari webstedsdata, er favoritter,
   log, selvtilføjet tøj og lejlighedsvalg væk. En knap der lægger de fem
   nøgler i én JSON-fil og kan læse den ind igen ville dække det.

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
