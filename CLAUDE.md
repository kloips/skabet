# Skabet

Personlig outfit-app. Trykker på en knap og får trukket et tilfældigt sæt tøj
fra min egen garderobe, vist som et flat-lay med rigtige billeder.

Bygget til mig selv, primært til brug på mobil om morgenen. Ikke et produkt,
ingen brugere ud over mig, ingen login.

## Status lige nu

Statisk prototype. Én HTML-fil med inline CSS og vanilla JS. Ingen build,
ingen dependencies, ingen server, ingen database. Åbnes ved at dobbeltklikke
på `index.html`.

Det virker. Næste skridt er ikke at bygge om, men at forbedre i små trin.

## Filstruktur

```
skabet/
  index.html          hele appen: markup, CSS og JS i én fil
  img/                fritlagte PNG'er, ét stykke tøj per fil
    original-jpg/     de oprindelige fotos, bruges ikke af appen
  CLAUDE.md
```

## Datamodel

Al data ligger i objektet `files` øverst i `<script>` i `index.html`:

```js
const files = {
  "top-1.png": "Sort t-shirt",
  ...
};
```

Filnavnet før første bindestreg er kategorien. Værdien er det navn der vises
under sættet. Der er præcis fem gyldige kategorier:

| Kategori    | Slot i layoutet   |
|-------------|-------------------|
| `outerwear` | jakker, frakker   |
| `mid`       | trøjer, strik     |
| `top`       | t-shirts, skjorter|
| `bottom`    | bukser, jeans     |
| `shoes`     | sko, støvler      |

Kategorinavnene er hardcodet flere steder: i `data-cat` på hvert `.slot`,
i `buildOutfit()` og i rækkefølgen i `render()`. Ændrer du et af dem, skal
alle fire steder rettes.

## Sådan virker logikken

`buildOutfit()` vælger altid en `top`, en `bottom` og et par `shoes`.
`mid` lægges kun på under 18 grader, `outerwear` kun under 15. Temperaturen
er hardcodet til 14 i `buildOutfit()`.

Slots uden tøj rendres som stiplede felter i stedet for at blive skjult, så
layoutet ikke hopper.

Låseknappen holder fast i de nuværende bukser hen over næste shuffle.

## Konventioner

- Vanilla JS. Ingen frameworks, ingen npm, intet build-trin. Spørg før du
  introducerer nogen af delene.
- Alt bliver i `index.html` indtil filen bliver uoverskuelig. Så splitter vi,
  ikke før.
- CSS-variabler til farver og mål, defineret i `:root`. Ingen hardcodede
  hex-værdier længere nede i filen.
- Kommentarer i koden er på dansk uden æ, ø og å.
- Billeder vises med `object-fit: contain` i slots med fast højde. Det er
  det der holder layoutet stabilt når fotos har forskellige dimensioner.
  Lav det ikke om til `cover`.

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
5. Database. Først når trin 4 gør `files`-objektet upraktisk.
6. PWA-manifest, så appen kan ligge på hjemmeskærmen. Giver nu mere mening
   end før, siden appen har en stabil offentlig adresse (se Hosting).

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
