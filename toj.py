import os, time, mimetypes
from pathlib import Path
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv(".env")

IND   = Path("raw")     # mappe med dine originalbilleder
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
TEST = {"mid-7", "mid-11", "shoes-7", "shoes-13", "shoes-15", "shoes-18", "shorts-2"}

# Tøj der kan lægges fladt. Fælles prompt for alle kategorier på nær sko.
# Katalog-look: tøjet skal se nyt og nyvasket ud, ikke slidt. Slid-klausulen
# fra den første udgave er bevidst fjernet - det var den, der holdt det
# gullige og brugte look fast. Identiteten holdes stadig fast (samme farve,
# print, snit), ellers kommer der et andet stykke tøj ud.
PROMPT_FLADT = """Transform this photo into a clean e-commerce product shot,
as if the garment were brand new in a catalogue.
Lay the garment completely flat and symmetrical, sleeves or legs
extended, collar or waistband centered. The input photo may be rotated
or sideways: rotate the garment so it stands upright in the final image,
collar or waistband at the top and hem at the bottom, never lying on its
side. Remove all wrinkles and creases,
and make the fabric look freshly laundered and pressed. Remove stains,
dirt, pilling, yellowing and discoloration, so the garment looks clean
and evenly colored.
It must remain the exact same garment: the same base color, the same
pattern, the same print and its placement, the same cut, collar, buttons
and proportions. Do not invent details and do not restyle the design.
The background must be flat, uniform, pure white (#FFFFFF) across the
whole frame: no grey backdrop, no gradient, no vignette, and no cast
shadow on the surface under the garment.
Soft even studio lighting, straight top-down view, garment centered and
filling the frame."""

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

    for forsøg in range(FORSOEG):
        try:
            svar = client.models.generate_content(
                model=MODEL,
                contents=[billede, prompt],
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
