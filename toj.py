import os, time, mimetypes
from pathlib import Path
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv(".env")

# Inputmappen kan skiftes med TOJ_IND=raw-baggrund - fotos MED baggrund gav
# bedre resultat paa de stykker der ikke ville rette sig fra udklippene, se CLAUDE.md.
IND   = Path(os.environ.get("TOJ_IND", "raw"))     # mappe med dine originalbilleder
UD    = Path("klar")    # mappe hvor output lander
MODEL = "gemini-3-pro-image"

# Kører mod Vertex AI i stedet for AI Studio. Det er dét der gør, at forbruget
# trækkes fra Google Cloud-kreditten (de 1.925 kr) - AI Studios prepay-saldo
# og Cloud-kreditten er to adskilte pengekasser, og trial-kreditten kan ikke
# bruges på AI Studio.
# Kræver "gcloud auth application-default login" én gang først. Der bruges
# altså ingen API-nøgle her; GEMINI_API_KEY i .env er ikke i brug længere.
PROJEKT = "project-265d2498-aeca-426b-930"
REGION  = "global"      # Gemini 3-modellerne serveres fra global-endpointet

# Kvoten på billedmodellen er lav på et nyt projekt. Går der for hurtigt,
# svarer Vertex med 429 RESOURCE_EXHAUSTED - det handler om kald per minut,
# ikke om penge. Derfor en pause mellem hvert kald og lang, tålmodig
# ventetid når kvoten alligevel rammes.
PAUSE   = 10   # sekunder mellem to kald
FORSOEG = 5    # antal forsøg per billede

# Testkørsel: sæt TEST til navnene på de stykker du vil teste (uden .png).
# Sæt TEST = None når du vil køre hele garderoben.
# Anden omgang (september 2026): otte stykker der dækker de tre ting der
# varierede i første omgang - krøller (top-15, top-37, bottom-10), volumen som
# en usynlig mannequin (top-25, mid-22), og et par der var gode i forvejen
# (top-7, mid-30, outerwear-6) for at se at de ikke bliver dårligere.
# Tredje omgang: aermelinjen rettet (korte aermer ud til siden), haardere ord
# om denim og volumen. top-7 er med for at bevise at gode ikke bliver daarlige.
TEST = {"top-15", "top-7", "bottom-10", "top-25"}

# Referencebillede per præfiks: et af de eksisterende billeder der har præcis
# den stil alle skal have. Sendes med som billede nummer to, så modellen
# efterligner en konkret stil i stedet for at tolke ord - det er det stærkeste
# greb for at få en rød tråd. Sko har ingen reference; de var ensartede nok.
REFERENCER = {
    "top":       "img/top-7.jpg",
    "mid":       "img/top-7.jpg",
    "outerwear": "img/outerwear-5.jpg",
    "bottom":    "img/bottom-11.jpg",
    "shorts":    "img/bottom-11.jpg",
}

# Tøj der kan lægges fladt. Fælles prompt for alle kategorier på nær sko.
# Katalog-look: tøjet skal se nyt og nyvasket ud, ikke slidt. Slid-klausulen
# fra den første udgave er bevidst fjernet - det var den, der holdt det
# gullige og brugte look fast. Identiteten holdes stadig fast (samme farve,
# print, snit), ellers kommer der et andet stykke tøj ud.
# Anden udgave af prompten. Den første lod modellen vælge pose selv
# ("sleeves extended" kan betyde ud til siden eller ned langs kroppen), og
# den tog nogle gange en usynlig mannequin med volumen i skuldrene i stedet
# for en flad genstand. Denne udgave låser én pose fast og peger på et
# referencebillede. Krølle-instruktionen er skærpet, fordi et mindretal
# kom tilbage ukrøllede alligevel.
PROMPT_FLADT = """You are given two images. The FIRST image is a photo of a
garment. The SECOND image is a style reference: a finished product shot in
exactly the style the output must have. Copy the style of the second image
- the flat presentation, the lighting, the framing, the white background -
but the garment itself must be the one from the FIRST image.

Produce a clean e-commerce product shot of the garment from the first
image, as if it were brand new in a catalogue:

- The garment lies perfectly FLAT on the surface, photographed straight
  from above. It is EMPTY: no body inside it, no invisible mannequin, no
  volume or rounding in the shoulders or chest, no shading that suggests a
  torso. Think of it as a paper cut-out with zero thickness.
- Short sleeves lie in their natural position, pointing out to the sides,
  fully visible and never folded under or tucked in. Long sleeves lie
  straight down along the sides of the body. Trouser legs lie straight
  down, parallel, slightly apart. Collar or waistband centered at the top,
  hem at the bottom. Perfectly symmetrical.
- The input photo may be rotated or sideways: rotate the garment so it
  stands upright, never lying on its side.
- The fabric is freshly laundered and PRESSED: absolutely no wrinkles,
  creases, folds or bunching anywhere. Smooth and even like a new garment
  on a shop shelf. This is required even if the photo is very wrinkled.
  For denim and trousers: keep the fading and the weave of the fabric,
  but the surface must be completely smooth - creases across the legs,
  at the knees or at the crotch are wrinkles, not texture, and must go.
- Remove stains, dirt, pilling, yellowing and discoloration, so the color
  is clean and even.

It must remain the exact same garment: the same base color, the same
pattern, the same print and its placement, the same cut, collar, buttons
and proportions. Do not invent details and do not restyle the design.

The background must be flat, uniform, pure white (#FFFFFF) across the
whole frame: no grey backdrop, no gradient, no vignette, and no cast
shadow on the surface under the garment. Soft even studio lighting,
garment centered and filling the frame."""

# Sko kan ikke lægges fladt med "ærmer og ben strakt ud" - de skal stå
# i den sædvanlige produktvinkel fra siden.
PROMPT_SKO = """Transform this photo into a clean e-commerce product shot,
as if the shoe were brand new in a catalogue.
Show a single shoe from the side in the typical product angle used in
online shoe shops, toe and heel both fully visible. The input photo may
be rotated or sideways: rotate the shoe so it stands level on an
invisible ground line, sole down and opening up, never standing on its
heel or toe. Keep the same left/right facing as the original shoe and do
not mirror it. Do not lay it flat and do not show it from above.
Clean the shoe completely: remove dust, dirt, scuffs, yellowing of the
sole and creases in the leather, so it looks unworn.
It must remain the exact same shoe: the same colors, the same materials,
the same logos and branding in the same places, the same sole pattern and
proportions. Do not invent details and do not restyle the design.
The background must be flat, uniform, pure white (#FFFFFF) across the
whole frame: no grey backdrop, no gradient, no vignette, and no cast
shadow on the surface under the shoe.
Soft even studio lighting, shoe centered and filling the frame."""

# En nøgle per præfiks i filnavnet. Præfikset er alt før første bindestreg.
PROMPTS = {
    "top":       PROMPT_FLADT,
    "mid":       PROMPT_FLADT,
    "outerwear": PROMPT_FLADT,
    "bottom":    PROMPT_FLADT,
    "shorts":    PROMPT_FLADT,
    "shoes":     PROMPT_SKO,
}

# Billedformat per præfiks. Rammen hjælper modellen med at vende motivet
# rigtigt: tøj skal stå op i et stående format, sko ligge ned i et liggende.
# Uden den fulgte modellen bare originalfotoets format og beholdt dermed
# den skæve rotation.
FORMATER = {
    "top":       "3:4",
    "mid":       "3:4",
    "outerwear": "3:4",
    "bottom":    "3:4",
    "shorts":    "3:4",
    "shoes":     "4:3",
}

client = genai.Client(vertexai=True, project=PROJEKT, location=REGION)
UD.mkdir(parents=True, exist_ok=True)

filer = sorted(p for p in IND.iterdir()
               if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"})

if TEST:
    filer = [p for p in filer if p.stem in TEST]
    mangler = TEST - {p.stem for p in filer}
    if mangler:
        print(f"ADVARSEL: fandt ikke {sorted(mangler)} i {IND}\n")

print(f"{len(filer)} filer i kø\n")

for i, fil in enumerate(filer, 1):
    mål = UD / (fil.stem + ".png")
    if mål.exists():
        print(f"[{i}/{len(filer)}] findes allerede, springer over: {fil.name}")
        continue

    præfiks = fil.stem.split("-")[0]
    prompt  = PROMPTS.get(præfiks)
    format  = FORMATER.get(præfiks)
    if prompt is None:
        print(f"[{i}/{len(filer)}] ukendt præfiks {præfiks!r}, springer over: {fil.name}")
        continue

    mime = mimetypes.guess_type(fil.name)[0] or "image/jpeg"
    billede = types.Part.from_bytes(data=fil.read_bytes(), mime_type=mime)

    # Foto først, reference bagefter - prompten omtaler dem som første og anden.
    indhold = [billede]
    reference = REFERENCER.get(præfiks)
    if reference:
        indhold.append(types.Part.from_bytes(data=Path(reference).read_bytes(),
                                             mime_type="image/jpeg"))
    indhold.append(prompt)

    for forsøg in range(FORSOEG):
        try:
            svar = client.models.generate_content(
                model=MODEL,
                contents=indhold,
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE"],
                    image_config=types.ImageConfig(aspect_ratio=format)),
            )
            dele = [p for p in svar.candidates[0].content.parts
                    if p.inline_data]
            if not dele:
                raise RuntimeError("svaret indeholdt intet billede")
            mål.write_bytes(dele[0].inline_data.data)
            print(f"[{i}/{len(filer)}] ok: {mål.name}")
            break
        except Exception as e:
            # En kvotefejl skal der ventes laenge paa; alt andet er sjaeldent
            # noget der loeser sig selv, og der ventes kun kort.
            kvote = "RESOURCE_EXHAUSTED" in str(e) or "429" in str(e)
            vent  = 30 * (forsøg + 1) if kvote else 5 * (forsøg + 1)
            besked = "kvote opbrugt, venter" if kvote else str(e)
            print(f"[{i}/{len(filer)}] forsøg {forsøg+1}/{FORSOEG}: {besked} ({vent}s)")
            if forsøg < FORSOEG - 1:
                time.sleep(vent)
    else:
        print(f"[{i}/{len(filer)}] GAV OP: {fil.name}")

    time.sleep(PAUSE)

print("\nfærdig")
