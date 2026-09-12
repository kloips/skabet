"""Klargoer de genererede billeder til appen.

Laeser klar/ og skriver klar-klargjort/. Roerer ikke klar/, saa det kan
koeres igen uden at generere noget paa ny - og uden at koste penge.

To ting sker per billede:

1. Baggrunden males rent hvid. Modellen leverer som regel hvidt, men paa en
   haandfuld billeder er den lysegraa eller har en blod skygge. Der bruges
   flood fill fra kanten, saa kun baggrund der haenger sammen med rammen
   rammes - hvidt stof inde i toejet kan ikke naas udefra og er derfor sikkert.
   Tolerancen hoejnes i trin, indtil hjoernerne er hvide. Det er noedvendigt,
   fordi nogle baggrunde har en gradient der er bredere end den foerste
   tolerance tillader.

2. Den hvide luft omkring toejet beskaeres vaek, saa motivet fylder rammen ud
   ligesom de gamle billeder gjorde. Der fjernes kun raekker og kolonner der
   er HELT baggrund - en raekke der rammer toejet bliver staaende.

Der gemmes som JPEG, ikke PNG. Billederne er fotografier uden gennemsigtighed,
og PNG fylder her syv gange mere uden synlig gevinst: 119 stykker gik fra
106 MB til 14 MB ved kvalitet 88.
"""
from pathlib import Path
from collections import deque
from PIL import Image

IND  = Path("klar")
UD   = Path("klar-klargjort")
LUFT     = 0.02      # andel af motivets stoerrelse der beholdes som ramme
KVALITET = 88        # JPEG-kvalitet - 88 er visuelt uskelneligt fra PNG her
TRIN = (12, 30, 45)  # tolerancer der proeves i raekkefoelge


def find_baggrund(im, tolerance):
    """Returnerer et bytearray hvor 1 betyder baggrund."""
    w, h = im.size
    px = im.load()
    hjoerner = sorted(sum(px[x, y]) / 3 for x, y in
                      [(2, 2), (w-3, 2), (2, h-3), (w-3, h-3),
                       (w//2, 2), (w//2, h-3)])
    niveau  = hjoerner[len(hjoerner)//2]
    graense = niveau - tolerance

    erbag = bytearray(w * h)
    kant  = deque()
    for x in range(w):
        kant.append((x, 0)); kant.append((x, h-1))
    for y in range(h):
        kant.append((0, y)); kant.append((w-1, y))

    while kant:
        x, y = kant.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or erbag[y*w + x]:
            continue
        r, g, b = px[x, y]
        # Kun lyse og naesten neutrale pixels regnes som baggrund
        if min(r, g, b) < graense or max(r, g, b) - min(r, g, b) > 14:
            continue
        erbag[y*w + x] = 1
        kant.extend([(x+1, y), (x-1, y), (x, y+1), (x, y-1)])
    return erbag


def klargoer(sti):
    im = Image.open(sti).convert("RGB")
    w, h = im.size
    px = im.load()

    # Proev stadig loesere tolerance indtil hjoernerne bliver hvide
    for tolerance in TRIN:
        erbag = find_baggrund(im, tolerance)
        hjoerner = [(2, 2), (w-3, 2), (2, h-3), (w-3, h-3)]
        if all(erbag[y*w + x] for x, y in hjoerner):
            break

    for y in range(h):
        raekke = y * w
        for x in range(w):
            if erbag[raekke + x]:
                px[x, y] = (255, 255, 255)

    tom_raekke = lambda y: all(erbag[y*w + x] for x in range(0, w, 2))
    tom_kolonne = lambda x: all(erbag[y*w + x] for y in range(0, h, 2))

    top = 0
    while top < h-1 and tom_raekke(top): top += 1
    bund = h-1
    while bund > top and tom_raekke(bund): bund -= 1
    ven = 0
    while ven < w-1 and tom_kolonne(ven): ven += 1
    hoj = w-1
    while hoj > ven and tom_kolonne(hoj): hoj -= 1

    mx = int((hoj - ven) * LUFT)
    my = int((bund - top) * LUFT)
    return im.crop((max(0, ven-mx), max(0, top-my),
                    min(w, hoj+mx+1), min(h, bund+my+1))), tolerance


if __name__ == "__main__":
    UD.mkdir(exist_ok=True)
    filer = sorted(IND.glob("*.png"))
    rester = []
    for p in filer:
        billede, tolerance = klargoer(p)
        billede.save(UD / (p.stem + ".jpg"), "JPEG",
                     quality=KVALITET, optimize=True, progressive=True)
        w, h = billede.size
        px = billede.load()
        hjoerne = min(sum(px[x, y])//3 for x, y in
                      [(1, 1), (w-2, 1), (1, h-2), (w-2, h-2)])
        rester.append((hjoerne, p.stem, tolerance))

    daarlige = [(m, n) for m, n, _ in rester if m < 248]
    print(f"klargjorde {len(filer)} billeder -> {UD}/")
    print(f"stadig graa baggrund: {len(daarlige)}"
          + (": " + ", ".join(f"{n} ({m})" for m, n in daarlige) if daarlige else ""))
