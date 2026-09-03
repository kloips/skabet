/* ---------------------------------------------------------------
   Dit toej. Filnavnet bestemmer kategorien, teksten er det navn
   der vises under saettet. Ret navnene så de passer til dit toej.
   Tilfoej en ny linje naar du fotograferer mere.
----------------------------------------------------------------*/
const files = {
  "outerwear-3.png":  { navn: "Ternet flannelskjorte, grå og hvid", paenhed: 4 },

  "outerwear-4.png":  { navn: "Mørkeblå fløjlsovershirt", paenhed: 4 },

  "outerwear-5.png":  { navn: "Olivengrøn overshirt med brystlommer", paenhed: 4 },

  "outerwear-6.png":  { navn: "Grå vindjakke med hætte", paenhed: 2 },
  "outerwear-7.png":  { navn: "Sort vinterjakke", paenhed: 1 },
  "outerwear-8.png":  { navn: "Sort lynlåsjakke med krave", paenhed: 4 },
  "outerwear-9.png":  { navn: "Brun overshirt med trykknapper", paenhed: 4 },
  "outerwear-10.png": { navn: "Lysegrå vindjakke med hætte", paenhed: 2 },
  "outerwear-11.png": { navn: "Mørkebrun vest ", paenhed: 3 },
  "outerwear-12.png": { navn: "Brun jakke med hvide syninger", paenhed: 2 },
  "outerwear-13.png": { navn: "Grå jakke med krave", paenhed: 3 },
  "outerwear-14.png": { navn: "Sort lang frakke", regn: true, paenhed: 5 },
  "outerwear-15.png": { navn: "Grøn jakke med hætte og klaplommer", paenhed: 4 },
  "outerwear-16.png": { navn: "Lyseblå denimskjortejakke", paenhed: 4 },
  "outerwear-17.png": { navn: "Sort regnjakke med hætte", regn: true, paenhed: 2 },

  "mid-3.png":  { navn: "Sort sweatshirt", paenhed: 4 },
  "mid-4.png":  { navn: "Lysegrå hoodie med lynlås", paenhed: 2 },
  "mid-5.png":  { navn: "Grå hoodie", paenhed: 1 },
  "mid-6.png":  { navn: "Navy GAP hoodie med lynlås", paenhed: 2 },
  "mid-7.png":  { navn: "Lysegrå BLS hoodie", paenhed: 1 },
  "mid-8.png":  { navn: "Grøn hoodie med lynlås", paenhed: 2 },
  "mid-9.png":  { navn: "Grøn sweatshirt", paenhed: 3 },
  "mid-10.png": { navn: "Mørkegrøn strik", paenhed: 4 },
  "mid-11.png": { navn: "Gråblå strik", paenhed: 4 },
  "mid-12.png": { navn: "Lysegrå strik", paenhed: 4 },
  "mid-13.png": { navn: "Grøn sweatshirt", paenhed: 4 },
  "mid-14.png": { navn: "Mørkeblå zip sweatshirt", paenhed: 4 },
  "mid-15.png": { navn: "Brun strik", paenhed: 3 },
  "mid-16.png": { navn: "Navy Pull&Bear sweatshirt", paenhed: 2 },
  "mid-17.png": { navn: "Sort sweatshirt", paenhed: 3 },
  "mid-18.png": { navn: "HK grå sweatshirt", paenhed: 1 },
  "mid-19.png": { navn: "Grøn HK sweatshirt", paenhed: 3 },
  "mid-20.png": { navn: "Lysegrå sweatshirt", paenhed: 3 },
  "mid-21.png": { navn: "Grå strik", paenhed: 4 },
  "mid-22.png": { navn: "Mørkegrå strik", paenhed: 4 },
  "mid-23.png": { navn: "Lysegrå zip sweatshirt", paenhed: 4 },
  "mid-24.png": { navn: "Mørkeblå ternet skjorte", paenhed: 3 },
  "mid-25.png": { navn: "Ternet skjorte, hvid og blå", paenhed: 3 },
  "mid-26.png": { navn: "Blå fin skjorte", paenhed: 4 },
  "mid-27.png": { navn: "Ternet kort skjorte", paenhed: 3 },
  "mid-28.png": { navn: "Lyseblå ternet skjorte", paenhed: 3 },
  "mid-29.png": { navn: "Grøn og hvid ternet skjorte", paenhed: 3 },
  "mid-30.png": { navn: "Blå skjorte", paenhed: 4 },
  "mid-31.png": { navn: "Ternet blå flannelskjorte", paenhed: 3 },
  "mid-32.png": { navn: "Mørkeblå flannelskjorte", paenhed: 3 },
  "mid-33.png": { navn: "Sort, brun og hvid skjorte", paenhed: 3 },

  "bottom-4.png":  { navn: "Sorte jeans", paenhed: 2 },
  "bottom-5.png":  { navn: "Brune habitbukser", paenhed: 5 },
  "bottom-6.png":  { navn: "Mørkeblå jeans", paenhed: 4 },
  "bottom-8.png":  { navn: "Creme jeans", paenhed: 2 },
  "bottom-9.png":  { navn: "Grå jeans", paenhed: 3 },
  "bottom-10.png": { navn: "Brungrå jeans", paenhed: 1 },
  "bottom-11.png": { navn: "Blå jeans", paenhed: 4 },
  "bottom-12.png": { navn: "Koksgrå jeans", paenhed: 3 },
  "bottom-13.png": { navn: "Sorte bukser, smalle", paenhed: 5 },
  "bottom-14.png": { navn: "Sorte bukser, brede", paenhed: 5 },
  "bottom-15.png": { navn: "Lysegrå bukser", paenhed: 2 },
  "bottom-16.png": { navn: "Lyseblå jeans", paenhed: 1 },
  "bottom-18.png": { navn: "Støvet blå jeans", paenhed: 3 },

  "shorts-1.png":  {navn: "Mørke denimshorts", paenhed: 3 },
  "shorts-2.png":  {navn: "Sorte denimshorts", paenhed: 3 },
  "shorts-3.png":  {navn: "Grå denimshorts", paenhed: 3 },
  "shorts-4.png":  {navn: "Lyseblå denimshorts", paenhed: 3 },
  "shoes-3.png":  { navn: "Hvide Nike Cortez", paenhed: 2 },
  "shoes-4.png":  { navn: "Asics navy og grå", paenhed: 3 },
  "shoes-5.png":  { navn: "Asics Gel-Lyte III, blå og grå", paenhed: 3 },
  "shoes-6.png":  { navn: "Adidas Stan Smith, hvid og grøn", paenhed: 4 },
  "shoes-7.png":  { navn: "Sorte nike", paenhed: 2 },
  "shoes-8.png":  { navn: "Loafers brede", paenhed: 5 },
  "shoes-9.png":  { navn: "Brune loafers", paenhed: 5 },
  "shoes-10.png": { navn: "Adidas Spezials", paenhed: 2 },
  "shoes-11.png": { navn: "Adidas superstar", paenhed: 3 },
  "shoes-12.png": { navn: "Clarks", paenhed: 5 },
  "shoes-13.png": { navn: "Grå Ascics", paenhed: 4 },
  "shoes-14.png": { navn: "Adidas Gazelle Indoor, grøn", paenhed: 4 },
  "shoes-15.png": { navn: "P6000 hvide", paenhed: 3 },
  "shoes-16.png": { navn: "brune adidas", paenhed: 4 },
  "shoes-17.png": { navn: "Converse grønne", paenhed: 3 },
  "shoes-18.png": { navn: "Timberland bådsko, brune", paenhed: 3 },

  "top-4.png":  { navn: "Grå t-shirt", paenhed: 3 },
  "top-5.png":  { navn: "Lysegrå t-shirt", paenhed: 3 },
  "top-6.png":  { navn: "Grøn t-shirt med logo", paenhed: 2 },
  "top-7.png":  { navn: "Sort t-shirt", paenhed: 4 },
  "top-8.png":  { navn: "Sort t-shirt (Carhartt tekst)", paenhed: 2 },
  "top-9.png":  { navn: "Sort t-shirt med print", paenhed: 1 },
  "top-10.png": { navn: "Mørkeblå t-shirt (Carhartt logo)", paenhed: 2 },
  "top-11.png": { navn: "Lyseblå stribet polo med lynlås", paenhed: 4 },
  "top-12.png": { navn: "Sort/gul stribet t-shirt med print", paenhed: 1 },
  "top-13.png": { navn: "Grøn polo", paenhed: 4 },
  "top-14.png": { navn: "Mørkeblå t-shirt", paenhed: 4 },
  "top-15.png": { navn: "Grå t-shirt med print", paenhed: 2 },
  "top-16.png": { navn: "Grå t-shirt (Good Life)", paenhed: 2 },
  "top-17.png": { navn: "Olivengrøn t-shirt med hvid kant", paenhed: 4 },
  "top-18.png": { navn: "Grøn t-shirt med print", paenhed: 1 },
  "top-19.png": { navn: "Sort t-shirt med japansk print", paenhed: 2 },
  "top-20.png": { navn: "Olivengrøn polo med lynlås", paenhed: 5 },
  "top-21.png": { navn: "Petrol t-shirt (Nike Moving Co)", paenhed: 1 },
  "top-22.png": { navn: "Sort t-shirt (Arigato)", paenhed: 3 },
  "top-23.png": { navn: "Brun strikpolo", paenhed: 5 },
  "top-24.png": { navn: "Sort langærmet t-shirt", paenhed: 2 },
  "top-25.png": { navn: "Grøn stribet langærmet polo", paenhed: 3 },
  "top-26.png": { navn: "Grøn stribet langærmet t-shirt", paenhed: 3 },
  "top-27.png": { navn: "Hvid langærmet t-shirt", paenhed: 3 },
  "top-28.png": { navn: "Mørkegrå langærmet t-shirt", paenhed: 2 },
  "top-29.png": { navn: "Lysegrå langærmet t-shirt", paenhed: 3 },
  "top-30.png": { navn: "Sort/hvid stribet t-shirt", paenhed: 4 },
  "top-31.png": { navn: "Hvid stribet t-shirt", paenhed: 5 },
  "top-32.png": { navn: "Creme strikpolo", paenhed: 5 },
  "top-33.png": { navn: "Hvid t-shirt med bølge-print", paenhed: 2 },
  "top-34.png": { navn: "Hvid t-shirt (YourTurn)", paenhed: 3 },
  "top-35.png": { navn: "Hvid t-shirt", paenhed: 4 },
  "top-36.png": { navn: "Hvid t-shirt", paenhed: 4 },
  "top-37.png": { navn: "Creme t-shirt med grønt print", paenhed: 3 },
  "top-38.png": { navn: "Hvid t-shirt", paenhed: 2 },
  "top-39.png": { navn: "Sort t-shirt", paenhed: 4 },
  "top-40.png": { navn: "Blå t-shirt", paenhed: 4 },
  "top-41.png": { navn: "Grå t-shirt med print (Deus Customs)", paenhed: 2 },
  "top-42.png": { navn: "Blå/hvid stribet langærmet t-shirt", paenhed: 3 },
  "top-43.png": { navn: "Turkis/hvid stribet langærmet t-shirt", paenhed: 2 }
};

/* Saet denne op naar et billede erstattes med et nyt UNDER SAMME filnavn
   (fx efter en rettelse som denne). Ellers bliver den gamle udgave siddende
   fast i Safaris cache paa telefonen, selvom filen er skiftet ud paa serveren. */
const ASSET_VERSION = "20260831b";

/* Paenhed gaar fra 1 (mest afslappet) til 5 (pusset op) og bruges til at
   matche toejet med den valgte lejlighed. Toej uden en vaerdi lander paa
   midten, saa det hverken favoriseres eller sorteres fra. */
const STANDARD_PAENHED = 3;

/* En vaerdi i files maa vaere enten ren tekst (kun navnet) eller et objekt
   med ekstra oplysninger: { navn: "...", regn: true, paenhed: 4 }. Begge
   dele virker, saa toejet kan tagges lidt ad gangen. */
const builtInItems = Object.entries(files).map(([file, value], i) => {
  const data = typeof value === "string" ? { navn: value } : value;
  return {
    id: i + 1,
    name: data.navn,
    regn: data.regn === true,
    paenhed: data.paenhed || STANDARD_PAENHED,
    category: file.split("-")[0],
    image: "img/" + file + "?v=" + ASSET_VERSION
  };
});

/* Toej tilfoejet fra formularen. Gemmes i localStorage, saa det kun findes paa den enhed det er tilfoejet fra. */
const EXTRA_ITEMS_KEY = "skabet-extra-items";

function loadExtraItems(){
  try {
    return JSON.parse(localStorage.getItem(EXTRA_ITEMS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveExtraItems(list){
  localStorage.setItem(EXTRA_ITEMS_KEY, JSON.stringify(list));
}

let items = [];

function rebuildItems(){
  // Toej fra formularen har ingen paenhed - giv det midtervaerdien, saa det kan vaelges til alle lejligheder.
  const extra = loadExtraItems().map(i => ({ paenhed: STANDARD_PAENHED, ...i }));
  items = [...builtInItems, ...extra];
}

rebuildItems();

/* --------------------------- Logik --------------------------- */

const lay           = document.getElementById("lay");
const meta          = document.getElementById("meta");
const weatherTemp   = document.getElementById("weatherTemp");
const weatherNavn   = document.getElementById("weatherNavn");
const favoritesList = document.getElementById("favoritesList");
const favoritesEmpty= document.getElementById("favoritesEmpty");
const favoriteBtn   = document.getElementById("favorite");
const addItemBtn    = document.getElementById("addItemBtn");
const woreBtn       = document.getElementById("woreBtn");
const undoBtn       = document.getElementById("undoBtn");
const zoomEl        = document.getElementById("zoom");
const zoomBillede   = document.getElementById("zoomBillede");
const zoomNavn      = document.getElementById("zoomNavn");
const occasionBtn    = document.getElementById("occasionBtn");
const occasionListe  = document.getElementById("occasionListe");
const occasionVaerdi = document.getElementById("occasionVaerdi");
const menuBtn       = document.getElementById("menuBtn");
const menuEl        = document.getElementById("menu");
const footerEl      = document.getElementById("footer");
const wardrobeEl    = document.getElementById("wardrobe");
const skabTitel     = document.getElementById("skabTitel");
const skabTilbage   = document.getElementById("skabTilbage");
const addDialog     = document.getElementById("addDialog");
const addForm       = document.getElementById("addForm");
const addPhoto      = document.getElementById("addPhoto");
const addCategory   = document.getElementById("addCategory");
const addName       = document.getElementById("addName");
const addCancel     = document.getElementById("addCancel");
const slots         = [...lay.querySelectorAll(".slot")];

const CATS = ["outerwear", "mid", "top", "bottom", "shorts", "shoes"];

const lockedCats = new Set();   // kategorier der skal beholde deres nuvaerende toej
let current = {};

/* Det forrige hele saet, kun til fortryd-knappen. Lever i hukommelsen og
   forsvinder med vilje ved genindlaesning - der er ingen historik-stak,
   kun et enkelt skridt tilbage. */
let forrigeSaet = null;
let temp = 14;                  // fallback hvis vejret ikke kan hentes

/* Koebenhavn, ingen API-noegle noedvendig. */
/* yr.no beskriver vejret med tekst-koder som "cloudy", "lightrainshowers_day"
   eller "rainandthunder" - ikke tal. Listen her er sorteret efter hvor kraftigt
   vejret er, kraftigst oeverst: den foerste regel der passer, vinder. Det er
   ogsaa den raekkefoelge der afgoer hvilken time der bestemmer dagens vejr. */
const VEJR_TYPER = [
  { test: k => k.includes("thunder"),         navn: "torden",        regn: true  },
  { test: k => k.includes("sleet"),           navn: "slud",          regn: true  },
  { test: k => k.includes("snow"),            navn: "sne",           regn: false },
  { test: k => k.includes("rain"),            navn: "regn",          regn: true  },
  { test: k => k.includes("fog"),             navn: "tåge",          regn: false },
  { test: k => k === "cloudy",                navn: "overskyet",     regn: false },
  { test: k => k.startsWith("partlycloudy"),  navn: "delvist skyet", regn: false },
  { test: k => k.startsWith("fair"),          navn: "let skyet",     regn: false },
  { test: k => k.startsWith("clearsky"),      navn: "klart",         regn: false }
];

/* Giver pladsen i listen herover. Ukendt kode lander nederst, saa den aldrig
   kommer til at bestemme dagens vejr. */
function vejrRang(kode){
  const i = VEJR_TYPER.findIndex(t => t.test(kode));
  return i === -1 ? VEJR_TYPER.length : i;
}

let regnvejr = false;
let foersteSaet = true;   // regnjakke tvinges kun igennem paa dagens foerste saet

/* Vejret hentes kun for den del af dagen man faktisk er ude, ikke hele doegnet.
   Foer kiggede den paa doegnets min/max, saa en varm eftermiddag kunne give
   shorts til en kold morgen, og natteregn kunne tvinge en regnjakke frem. */
const VEJR_FRA = 10;   // fra kl. 10
const VEJR_TIL = 20;   // til og med kl. 20

/* Samlet nedboer i vinduet foer regnjakken tvinges frem. Et regnsymbol alene
   er ikke nok - yr.no saetter ogsaa "lightrain" paa en time med 0,1 mm, som
   man daarligt maerker. 0,5 mm over hele dagen er den nedre ende af det man
   faktisk bliver vaad af. Skru op hvis regnjakken kommer for tit. */
const REGN_MM = 0.5;

async function fetchWeather(){
  try {
    const res  = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=55.68&lon=12.57");
    const data = await res.json();
    const raekker = data?.properties?.timeseries;
    if (!raekker || !raekker.length) return null;

    // yr.no leverer kun fra nu og frem. Vi tager timerne i vinduet paa den
    // foerste dag hvor der overhovedet er nogen - saa aabner man appen sent
    // om aftenen, faar man morgendagens vejr i stedet for ingenting.
    const iVindue = raekker.filter(r => {
      const t = new Date(r.time).getHours();
      return t >= VEJR_FRA && t <= VEJR_TIL;
    });
    if (!iVindue.length) return null;

    const foersteDag = iVindue[0].time.slice(0, 10);
    const valgte = iVindue.filter(r => r.time.slice(0, 10) === foersteDag);

    const temps = valgte.map(r => r.data.instant.details.air_temperature);

    // Symbolet ligger paa naeste time - er der ingen (sidste raekke), bruges seks-timers.
    const timer = valgte
      .map(r => ({
        time: new Date(r.time).getHours(),
        kode: (r.data.next_1_hours?.summary?.symbol_code
            || r.data.next_6_hours?.summary?.symbol_code
            || "").replace(/_(day|night|polartwilight)$/, "")
      }))
      .filter(t => t.kode)
      .map(t => ({ ...t, rang: vejrRang(t.kode) }))
      .filter(t => t.rang < VEJR_TYPER.length);

    if (!timer.length || !temps.length) return null;

    /* Nedboer taelles KUN fra next_1_hours, som daekker praecis en time inde i
       vinduet. next_6_hours ville traekke nedboer uden for vinduet med. Feltet
       mangler paa den sidste raekke i timeserien og kan mangle sporadisk -
       de raekker springes bare over. */
    const nedboer = valgte.reduce((sum, r) => {
      const mm = r.data.next_1_hours?.details?.precipitation_amount;
      return typeof mm === "number" ? sum + mm : sum;
    }, 0);

    // Beskrivelsen bygger paa det vejr der fylder FLEST timer - ikke det
    // kraftigste. Ellers kom to timers torden til at doebe hele dagen.
    // Ved lige mange timer vinder det kraftigste (laveste rang).
    const antal = new Map();
    timer.forEach(t => antal.set(t.rang, (antal.get(t.rang) || 0) + 1));
    const dominerende = [...antal.entries()]
      .sort((a, b) => b[1] - a[1] || a[0] - b[0])[0][0];

    return {
      min: Math.min(...temps),
      max: Math.max(...temps),
      navn: VEJR_TYPER[dominerende].navn,
      // Regnjakken kraever BEGGE dele: et regnsymbol et sted i vinduet, OG at
      // der samlet falder nok til at man bliver vaad. Uafhaengigt af navnet
      // herover, som kun beskriver det vejr der fylder flest timer.
      regn: timer.some(t => VEJR_TYPER[t.rang].regn) && nedboer >= REGN_MM
    };
  } catch {
    return null;                  // ingen forbindelse, brug fallback-temperaturen
  }
}

const HISTORY_KEY = "skabet-history";

function loadHistory(){
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || {};
  } catch {
    return {};
  }
}

function saveHistory(outfit){
  const record = { date: new Date().toISOString().slice(0, 10) };
  Object.keys(outfit).forEach(cat => {
    if (outfit[cat]) record[cat] = outfit[cat].id;
  });
  localStorage.setItem(HISTORY_KEY, JSON.stringify(record));
}

const FAVORITES_KEY = "skabet-favorites";

function loadFavorites(){
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

function saveFavorites(favorites){
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

const outfitKey = outfit => CATS.map(cat => outfit[cat]?.id ?? "").join(",");
const recordKey = record => CATS.map(cat => record[cat] ?? "").join(",");

/* Log over de saet jeg FAKTISK gik i. Bevidst adskilt fra skabet-history,
   der gemmer det appen foreslog og kun husker en enkelt dag. Loggen fyldes
   udelukkende af "det tog jeg paa"-knappen - trykker man aldrig, er den tom,
   og karantaenen herunder faar ingen virkning. */
const LOG_KEY  = "skabet-log";
const LOG_DAGE = 90;            // aeldre poster kastes vaek naar der skrives

/* Dato N dage tilbage som "YYYY-MM-DD". Bruger samme UTC-baserede dato som
   resten af appen (saveHistory, buildOutfit), saa dagene passer sammen. */
function datoMinus(dage){
  const d = new Date();
  d.setDate(d.getDate() - dage);
  return d.toISOString().slice(0, 10);
}

const idag = () => datoMinus(0);

/* Ids i CATS-raekkefoelge, saa to saet kan sammenlignes som streng. */
const outfitIds = outfit => CATS.map(cat => outfit[cat]?.id ?? "");

function loadLog(){
  try {
    return JSON.parse(localStorage.getItem(LOG_KEY)) || [];
  } catch {
    return [];
  }
}

function saveLog(log){
  const fra = datoMinus(LOG_DAGE);
  localStorage.setItem(LOG_KEY, JSON.stringify(log.filter(p => p.date >= fra)));
}

/* Er det viste saet allerede registreret som baaret i dag? */
function erBaaretIDag(){
  const post = loadLog().find(p => p.date === idag());
  return !!post && post.ids.join(",") === outfitKey(current);
}

/* Raekkefoelgen et gemt saet vises i - samme som flat-layet. Bevidst ikke CATS,
   som ogsaa indeholder "shorts"; den kategori har intet slot, og et shorts-par
   er gemt under noeglen "bottom". */
const FAV_SLOTS = ["outerwear", "mid", "top", "bottom", "shoes"];

function renderFavorites(){
  const favorites = loadFavorites();
  favoritesEmpty.hidden = favorites.length > 0;
  favoritesList.innerHTML = "";

  favorites.forEach((record, i) => {
    // Et gemt id kan pege paa toej der ikke findes mere. Pladsen bliver staaende
    // som et tomt felt, og saettet markeres - det kan stadig hentes frem.
    const stykker = FAV_SLOTS.map(cat => items.find(item => item.id === record[cat]) || null);
    const mangler = stykker.some(item => !item);

    const side = document.createElement("article");
    side.className = "fav-side";
    side.innerHTML = `
      <p class="fav-tael">${i + 1} af ${favorites.length}</p>
      <div class="fav-stak">
        ${stykker.map(item => item
          ? `<div class="fav-plads"><img class="fav-billede" src="${item.image}" alt="${item.name}" loading="lazy"></div>`
          : `<div class="fav-plads tom"></div>`).join("")}
      </div>
      ${mangler ? `<p class="fav-mangler">Et stykke i dette sæt findes ikke længere</p>` : ""}
      <div class="fav-handlinger">
        <button class="primary" type="button" data-hent="${record.id}">Hent frem</button>
        <button class="ghost" type="button" data-slet-fav="${record.id}" data-indeks="${i}">Fjern</button>
      </div>`;
    favoritesList.append(side);
  });
}

function loadFavorite(record){
  const outfit = {};
  CATS.forEach(cat => {
    const item = items.find(i => i.id === record[cat]);
    if (item) outfit[cat] = item;
  });
  current = outfit;
  render(current);
  saveHistory(current);
  updateFavoriteButton();
  updateWoreButton();
}

function removeFavorite(id, indeks){
  const tilbage = loadFavorites().filter(f => f.id !== id);
  saveFavorites(tilbage);
  renderFavorites();
  updateFavoriteButton();
  // Bliv staaende samme sted i baandet - eller paa den sidste, hvis det var
  // den sidste der blev fjernet. Ellers hopper man tilbage til nummer et.
  const ny = Math.min(indeks, tilbage.length - 1);
  if (ny >= 0) favoritesList.scrollLeft = ny * favoritesList.clientWidth;
}

function updateFavoriteButton(){
  const isFav = loadFavorites().some(f => recordKey(f) === outfitKey(current));
  favoriteBtn.setAttribute("aria-pressed", String(isFav));
  favoriteBtn.textContent = isFav ? "★" : "☆";
}

function updateWoreButton(){
  woreBtn.setAttribute("aria-pressed", String(erBaaretIDag()));
}

/* Knappen er slaaet fra indtil der er et saet at gaa tilbage til. */
function updateUndoButton(){
  undoBtn.disabled = !forrigeSaet;
}

/* Lejligheder. Hver enkelt er et interval paa paenhed - se filtrerPaaLejlighed()
   for hvad der sker naar en kategori ikke har noget i intervallet. */
const OCCASIONS = {
  alle:        { navn: "Alt",         min: 1, max: 5 },
  fint:        { navn: "Fint tøj",    min: 5, max: 5 },
  foedselsdag: { navn: "Fødselsdag",  min: 4, max: 5 },
  skole:       { navn: "Skole",       min: 1, max: 4 },
  oellgaard:   { navn: "ØLLGAARD",    min: 3, max: 5 },
  arbejde:     { navn: "Arbejde",     min: 1, max: 2 }
};

const OCCASION_KEY = "skabet-lejlighed";

function loadOccasion(){
  const gemt = localStorage.getItem(OCCASION_KEY);
  return OCCASIONS[gemt] ? gemt : "alle";
}

let occasion = loadOccasion();

/* Skaerer puljen ned til det der passer til lejligheden. Ligger intet inden
   for intervallet, tages det der ligger TAETTEST paa i stedet for at aabne
   helt op - fx findes der ingen troeje med paenhed 5, saa "Fint toej" faar
   en 4'er og ikke en tilfaeldig hoodie. Puljen bliver derfor aldrig tom. */
function filtrerPaaLejlighed(pool){
  const omr = OCCASIONS[occasion];
  if (!omr || !pool.length) return pool;
  const afstand  = i => Math.max(omr.min - i.paenhed, i.paenhed - omr.max, 0);
  const taettest = Math.min(...pool.map(afstand));
  return pool.filter(i => afstand(i) === taettest);
}

/* Dage et stykke holdes ude af puljen efter det er baaret. 0 = ingen pause. */
const KARANTAENE = {
  top:       7,
  mid:       4,
  bottom:    3,
  shorts:    3,
  shoes:     2,
  outerwear: 0
};

/* Fjerner stykker der staar i loggen inden for kategoriens karantaeneperiode.
   Vinduet er de seneste KARANTAENE[cat] dage inklusive i dag, saa "shoes: 2"
   holder dagens sko ude i dag og i morgen.
   Filtret er BLOEDT paa samme maade som filtrerPaaLejlighed(): tommer det
   puljen, springes karantaenen over, saa et slot aldrig ender tomt. */
function filtrerPaaKarantaene(pool, cat){
  const dage = KARANTAENE[cat];
  if (!dage || !pool.length) return pool;

  const fra = datoMinus(dage - 1);
  const nyligt = new Set();
  loadLog().forEach(post => {
    if (post.date >= fra) post.ids.forEach(id => nyligt.add(id));
  });
  if (!nyligt.size) return pool;

  const tilbage = pool.filter(i => !nyligt.has(i.id));
  return tilbage.length ? tilbage : pool;
}

const pick = (cat, avoidId) => {
  let pool = items.filter(i => i.category === cat);
  if (cat === "outerwear" && regnvejr && foersteSaet){
    const regnjakker = pool.filter(i => i.regn);
    if (regnjakker.length) pool = regnjakker;   // ingen taggede jakker = alt er stadig i spil
  }
  pool = filtrerPaaLejlighed(pool);             // efter regn, saa man aldrig staar uden regnjakke
  pool = filtrerPaaKarantaene(pool, cat);       // til sidst: nyligt baaret toej holdes ude
  if (avoidId != null && pool.length > 1){
    pool = pool.filter(i => i.id !== avoidId);   // undgaa gaarsdagens stykke naar der er et alternativ
  }
  return pool[Math.floor(Math.random() * pool.length)];
};

/* Over 22 grader traekkes shorts i stedet for lange bukser. Slottet hedder
   stadig "bottom" - det er kun puljen der skifter. Ligger som funktion fordi
   retEfterVejr() skal stille samme spoergsmaal igen naar vejret er landet. */
function benKategori(){
  return (typeof temp === "number" && temp >= 22
          && items.some(i => i.category === "shorts"))
         ? "shorts"
         : "bottom";
}

function buildOutfit(){
  const history  = loadHistory();
  const today    = new Date().toISOString().slice(0, 10);
  const isNewDay = history.date && history.date !== today;
  const benKat   = benKategori();

  const wanted = {
    top:       "top",
    bottom:    benKat,
    shoes:     "shoes",
    mid:       "mid",
    outerwear: "outerwear"
  };

  const next = {};
  Object.keys(wanted).forEach(slot => {
    const kat = wanted[slot];
    if (lockedCats.has(slot) && current[slot]){
      next[slot] = current[slot];
    } else {
      next[slot] = pick(kat, isNewDay ? history[slot] : null);
    }
  });
  return next;
}

const SWAP_FADE_MS = 320;   // skal matche transition-varigheden for img.garment i CSS'en

function renderSlot(slot, item){
  // Ved hurtige swipes efter hinanden kan flere billeder vaere ved at forsvinde samtidig ("leaving").
  // Det aktuelt synlige billede er derfor det sidste der IKKE allerede er paa vej ud.
  const stillCurrent = slot.querySelectorAll("img.garment:not(.leaving)");
  const oldImg = stillCurrent[stillCurrent.length - 1] || null;

  if (!item){
    if (oldImg){
      oldImg.classList.add("leaving");
      setTimeout(() => oldImg.remove(), SWAP_FADE_MS);
    }
    slot.classList.add("empty");         // fx ingen jakke naar det er varmt
    return;
  }

  slot.classList.remove("empty");

  const newImg = new Image();
  newImg.className = "garment entering";
  newImg.alt = item.name;

  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    void newImg.offsetWidth;             // tving reflow, saa fade-in starter fra den skjulte tilstand
    newImg.classList.remove("entering");
    if (oldImg){
      oldImg.classList.add("leaving");   // gammelt og nyt billede krydsblendes samtidig
      setTimeout(() => oldImg.remove(), SWAP_FADE_MS);
    }
  };

  newImg.addEventListener("load", reveal, { once: true });
  newImg.src = item.image;
  slot.append(newImg);
  if (newImg.complete) reveal();         // allerede indlaest/cachet, ingen grund til at vente
}

function renderMeta(outfit){
  meta.innerHTML = "";
  ["outerwear","mid","top","bottom","shoes"].forEach(cat => {
    if (!outfit[cat]) return;
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = outfit[cat].name;
    meta.append(chip);
  });
}

function render(outfit){
  slots.forEach(slot => renderSlot(slot, outfit[slot.dataset.cat]));
  renderMeta(outfit);
}

function shuffle(){
  // Gemmes foer det nye saet bygges. Kun naar der allerede ER et saet, saa
  // den foerste shuffle ved opstart ikke efterlader et tomt "forrige saet".
  if (Object.keys(current).length) forrigeSaet = current;
  current = buildOutfit();
  foersteSaet = false;   // herefter er alle jakker i spil igen
  render(current);
  saveHistory(current);
  updateFavoriteButton();
  updateWoreButton();
  updateUndoButton();
}

/*---------------------------------------------------------------
   Menu og visninger. Tre sektioner deler samme side - der skiftes
   ved at vise en og skjule resten, ingen sideskift og ingen router.
----------------------------------------------------------------*/
const VIEW_NAVNE = { skab: "Mit klædeskab", outfit: "Vælg Outfit", favoritter: "Favorit Outfits" };
let aktivView = "outfit";        // det man lander paa om morgenen

function visView(navn){
  if (!VIEW_NAVNE[navn]) return;
  aktivView = navn;

  document.querySelectorAll(".view").forEach(v => {
    v.hidden = v.id !== "view-" + navn;
  });
  document.querySelectorAll(".menu-item").forEach(b => {
    b.setAttribute("aria-current", String(b.dataset.view === navn));
  });

  // Footeren hoerer til visningen - favoritlisten har ingen knapper.
  let harKnapper = false;
  document.querySelectorAll(".footer-group").forEach(g => {
    const vis = g.dataset.footer === navn;
    g.hidden = !vis;
    if (vis) harKnapper = true;
  });
  footerEl.hidden = !harKnapper;

  // Man lander altid paa oversigten, aldrig paa den kategori man saa sidst.
  if (navn === "skab"){
    skabKategori = null;
    nulstilFiltre();
    renderWardrobe();
  }
  lukMenu();
  window.scrollTo(0, 0);
}

/* Menuen folder sig ud fra ikonet. Selve bevaegelsen ligger i CSS
   (@keyframes menu-fold-ud/-ind) - her styres kun hvornaar klasserne
   saettes, og hvornaar elementet maa forsvinde helt.
   Der bruges en timer og ikke "animationend", fordi den sidste aldrig
   udloeses hvis brugeren har slaaet animationer fra i systemet. */
const MENU_LUK_MS = 190;   /* skal matche varigheden paa menu-fold-ind */
let menuAaben = false;
let menuTimer = null;

function aabnMenu(){
  clearTimeout(menuTimer);
  menuAaben = true;
  menuEl.classList.remove("lukker");
  menuEl.hidden = false;
  void menuEl.offsetWidth;          // tving reflow, saa animationen starter forfra
  menuEl.classList.add("aaben");
  menuBtn.setAttribute("aria-expanded", "true");
}

function lukMenu(){
  if (!menuAaben) return;
  clearTimeout(menuTimer);
  menuAaben = false;
  menuEl.classList.remove("aaben");
  menuEl.classList.add("lukker");
  menuBtn.setAttribute("aria-expanded", "false");
  menuTimer = setTimeout(() => {
    menuEl.hidden = true;
    menuEl.classList.remove("lukker");
  }, MENU_LUK_MS);
}

menuBtn.addEventListener("click", e => {
  e.stopPropagation();
  menuAaben ? lukMenu() : aabnMenu();
});

menuEl.addEventListener("click", e => {
  const btn = e.target.closest(".menu-item");
  if (btn) visView(btn.dataset.view);
});

// Tryk udenfor eller Escape lukker menuen igen.
document.addEventListener("click", e => {
  if (menuAaben && !menuEl.contains(e.target)) lukMenu();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") lukMenu();
});

/*---------------------------------------------------------------
   Mit klaedeskab: alt toejet, kategori for kategori.
----------------------------------------------------------------*/
const KAT_NAVNE = {
  outerwear: "Jakker",
  mid:       "Trøjer",
  top:       "Overdele",
  bottom:    "Bukser",
  shorts:    "Shorts",
  shoes:     "Sko"
};

/* Klaedeskabet har to tilstande i samme sektion: en oversigt med en vandret
   raekke pr. kategori, og en side for en enkelt kategori. Det er bevidst ikke
   et fjerde punkt i menuen - visView() styrer tre faste visninger. */
let skabKategori = null;        // null = oversigt, ellers kategorinoeglen
let skabFilter   = null;

function nulstilFiltre(){
  skabFilter = { paenhed: "alle", regn: false, aldrig: false };
}
nulstilFiltre();

/* Hvor mange gange hvert item-id staar i skabet-log. Bygges EN gang pr.
   rendering, saa der ikke slaas op i loggen for hver enkelt genstand.
   Er loggen tom eller vaek, er alle tal 0 og alt virker som foer.
   Bruges KUN til at sortere og filtrere her - karantaenen i pick() laeser
   den samme log for sig selv. */
function baaretAntal(){
  const antal = new Map();
  loadLog().forEach(post => {
    (post.ids || []).forEach(id => {
      if (id === "" || id == null) return;
      antal.set(id, (antal.get(id) || 0) + 1);
    });
  });
  return antal;
}

/* Flest gange baaret foerst. Array.sort er stabil, saa genstande med lige
   mange gange beholder deres raekkefoelge fra items, og nul gange havner
   naturligt til sidst. */
function sorterEfterBrug(liste, antal){
  return [...liste].sort((a, b) => (antal.get(b.id) || 0) - (antal.get(a.id) || 0));
}

/* detaljer=true giver paenhed-badge og slet-knap. De vises kun paa
   kategori-siden - i den vandrette oversigt ville de blive ramt ved et
   uheld mens man scroller. */
function lavKort(item, detaljer){
  const kort = document.createElement("figure");
  kort.className = "ward-item";
  // Kun toej tilfoejet fra formularen kan slettes - det hardcodede staar i files-objektet.
  const egen = typeof item.id === "string" && item.id.startsWith("x");
  kort.innerHTML = `
    <div class="ward-billede">
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      ${detaljer ? `<span class="ward-paenhed" title="Pænhed">${item.paenhed}</span>` : ""}
      ${detaljer && egen ? `<button class="ward-slet" type="button" data-slet="${item.id}" aria-label="Slet ${item.name}">×</button>` : ""}
    </div>
    <figcaption>${item.name}</figcaption>`;
  return kort;
}

function renderWardrobe(){
  if (skabKategori) renderKategori(); else renderOversigt();
}

function renderOversigt(){
  skabTitel.textContent = "Mit klædeskab";
  skabTilbage.hidden = true;
  wardrobeEl.innerHTML = "";

  const antal = baaretAntal();
  Object.keys(KAT_NAVNE).forEach(kat => {
    const iKat = sorterEfterBrug(items.filter(i => i.category === kat), antal);
    if (!iKat.length) return;     // tomme kategorier springes over

    const gruppe = document.createElement("section");
    gruppe.className = "ward-gruppe";
    gruppe.innerHTML = `
      <h3 class="ward-titel">
        <button class="ward-titel-knap" type="button" data-kat="${kat}">
          ${KAT_NAVNE[kat]} <span class="antal">${iKat.length}</span>
          <span class="pil" aria-hidden="true">›</span>
        </button>
      </h3>`;

    const raekke = document.createElement("div");
    raekke.className = "ward-raekke";
    iKat.forEach(item => raekke.append(lavKort(item, false)));
    gruppe.append(raekke);
    wardrobeEl.append(gruppe);
  });
}

function renderKategori(){
  skabTitel.textContent = KAT_NAVNE[skabKategori];
  skabTilbage.hidden = false;
  wardrobeEl.innerHTML = "";

  const paenhedChips = ["alle", "1", "2", "3", "4", "5"].map(v =>
    `<button class="filter-chip" type="button" data-paenhed="${v}" aria-pressed="${skabFilter.paenhed === v}">${v === "alle" ? "Alle" : v}</button>`
  ).join("");

  wardrobeEl.innerHTML = `
    <div class="filtre">
      <span class="filter-label">Pænhed</span>
      ${paenhedChips}
    </div>
    <div class="filtre">
      <button class="filter-chip" type="button" data-flag="regn" aria-pressed="${skabFilter.regn}">Egnet til regn</button>
      <button class="filter-chip" type="button" data-flag="aldrig" aria-pressed="${skabFilter.aldrig}">Aldrig båret</button>
    </div>
    <div class="skab-indhold"></div>`;

  renderKategoriIndhold();
}

/* Kun gitteret tegnes om naar et filter skifter - filterraekken bliver staaende. */
function renderKategoriIndhold(){
  const holder = wardrobeEl.querySelector(".skab-indhold");
  const antal  = baaretAntal();
  let liste = sorterEfterBrug(items.filter(i => i.category === skabKategori), antal);

  if (skabFilter.paenhed !== "alle") liste = liste.filter(i => String(i.paenhed) === skabFilter.paenhed);
  if (skabFilter.regn)   liste = liste.filter(i => i.regn);
  if (skabFilter.aldrig) liste = liste.filter(i => !antal.get(i.id));

  holder.innerHTML = "";
  if (!liste.length){
    const besked = document.createElement("p");
    besked.className = "tom-besked";
    besked.textContent = "Ingen genstande matcher filtrene.";
    holder.append(besked);
    return;
  }

  const grid = document.createElement("div");
  grid.className = "ward-grid";
  liste.forEach(item => grid.append(lavKort(item, true)));
  holder.append(grid);
}

wardrobeEl.addEventListener("click", e => {
  const titel = e.target.closest(".ward-titel-knap");
  if (titel){
    skabKategori = titel.dataset.kat;
    nulstilFiltre();
    renderWardrobe();
    window.scrollTo(0, 0);
    return;
  }

  const chip = e.target.closest(".filter-chip");
  if (chip){
    if (chip.dataset.paenhed) skabFilter.paenhed = chip.dataset.paenhed;
    else skabFilter[chip.dataset.flag] = !skabFilter[chip.dataset.flag];
    wardrobeEl.querySelectorAll(".filter-chip").forEach(c => {
      c.setAttribute("aria-pressed", String(
        c.dataset.paenhed ? skabFilter.paenhed === c.dataset.paenhed : skabFilter[c.dataset.flag]
      ));
    });
    renderKategoriIndhold();
    return;
  }

  const slet = e.target.closest("[data-slet]");
  if (slet){
    const id = slet.dataset.slet;
    const item = items.find(i => String(i.id) === id);
    if (!confirm(`Slet "${item ? item.name : "denne genstand"}"?`)) return;
    saveExtraItems(loadExtraItems().filter(i => String(i.id) !== id));
    rebuildItems();
    renderWardrobe();
    return;
  }

  // Tryk paa et toejbillede forstoerrer det. Skal staa EFTER slet-knappen,
  // som ligger inde i selve ruden.
  const billede = e.target.closest(".ward-billede img");
  if (billede) visStort(billede);
});

skabTilbage.addEventListener("click", () => {
  skabKategori = null;
  nulstilFiltre();
  renderWardrobe();
  window.scrollTo(0, 0);
});

document.getElementById("shuffle").addEventListener("click", shuffle);

/*---------------------------------------------------------------
   Lejlighedsvaelgeren. Egen menu i stedet for en <select>, fordi
   browserens indbyggede dropdown ikke kan styles. Punkterne bygges
   fra OCCASIONS, saa navnene kun staar ét sted.
----------------------------------------------------------------*/
const VAELGER_LUK_MS = 150;   /* skal matche varigheden paa vaelger-ind i style.css */
let vaelgerAaben = false;
let vaelgerTimer = null;

function byggVaelger(){
  occasionListe.innerHTML = "";
  Object.entries(OCCASIONS).forEach(([noegle, o]) => {
    const li = document.createElement("li");
    li.role = "option";
    li.className = "vaelger-punkt";
    li.dataset.value = noegle;
    li.textContent = o.navn;
    occasionListe.append(li);
  });
}

function visValgtLejlighed(){
  occasionVaerdi.textContent = OCCASIONS[occasion].navn;
  occasionListe.querySelectorAll(".vaelger-punkt").forEach(li => {
    li.setAttribute("aria-selected", String(li.dataset.value === occasion));
  });
}

function aabnVaelger(){
  clearTimeout(vaelgerTimer);
  vaelgerAaben = true;
  occasionListe.classList.remove("lukker");
  occasionListe.hidden = false;
  void occasionListe.offsetWidth;        // tving reflow, saa animationen starter forfra
  occasionListe.classList.add("aaben");
  occasionBtn.setAttribute("aria-expanded", "true");
}

function lukVaelger(){
  if (!vaelgerAaben) return;
  clearTimeout(vaelgerTimer);
  vaelgerAaben = false;
  occasionListe.classList.remove("aaben");
  occasionListe.classList.add("lukker");
  occasionBtn.setAttribute("aria-expanded", "false");
  vaelgerTimer = setTimeout(() => {
    occasionListe.hidden = true;
    occasionListe.classList.remove("lukker");
  }, VAELGER_LUK_MS);
}

occasionBtn.addEventListener("click", e => {
  e.stopPropagation();
  vaelgerAaben ? lukVaelger() : aabnVaelger();
});

/* Et nyt valg gemmes og giver et helt nyt saet med det samme - laaste kategorier
   beholder dog deres stykke, praecis som ved et almindeligt tryk paa knappen. */
occasionListe.addEventListener("click", e => {
  const li = e.target.closest(".vaelger-punkt");
  if (!li) return;
  occasion = li.dataset.value;
  localStorage.setItem(OCCASION_KEY, occasion);
  visValgtLejlighed();
  lukVaelger();
  shuffle();
});

document.addEventListener("click", e => {
  if (vaelgerAaben && !occasionListe.contains(e.target)) lukVaelger();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") lukVaelger();
});

favoriteBtn.addEventListener("click", () => {
  const favorites = loadFavorites();
  const key = outfitKey(current);
  const existingIndex = favorites.findIndex(f => recordKey(f) === key);
  if (existingIndex > -1){
    favorites.splice(existingIndex, 1);
  } else {
    const record = { id: Date.now() };
    CATS.forEach(cat => { if (current[cat]) record[cat] = current[cat].id; });
    favorites.push(record);
  }
  saveFavorites(favorites);
  renderFavorites();
  updateFavoriteButton();
});

/* "Det tog jeg paa i dag". Der er kun plads til et saet pr. dag: er der
   allerede logget et ANDET saet i dag, bliver det overskrevet. Trykker man
   igen med det samme saet fremme, fortrydes registreringen. */
woreBtn.addEventListener("click", () => {
  const dag   = idag();
  const samme = erBaaretIDag();
  const log   = loadLog().filter(p => p.date !== dag);
  if (!samme) log.push({ date: dag, ids: outfitIds(current) });
  saveLog(log);
  updateWoreButton();
});

/* Fortryd. Bytter det viste saet med det forrige, saa et nyt tryk bytter
   tilbage igen - knappen vipper mellem de to seneste saet. Laase behandles
   ikke saerskilt: saettet hentes frem som det saa ud, ligesom en favorit. */
undoBtn.addEventListener("click", () => {
  if (!forrigeSaet) return;
  bump(undoBtn);                 // tegnet drejer en gang mod uret
  const viste = current;
  current = forrigeSaet;
  forrigeSaet = viste;
  render(current);
  saveHistory(current);          // saa gaarsdags-sammenligningen matcher skaermen
  updateFavoriteButton();
  updateWoreButton();
});

favoritesList.addEventListener("click", e => {
  const hent = e.target.closest("[data-hent]");
  if (hent){
    const record = loadFavorites().find(f => String(f.id) === hent.dataset.hent);
    if (record){
      loadFavorite(record);
      visView("outfit");      // saettet hentes frem der hvor man kan se det
    }
    return;
  }

  const slet = e.target.closest("[data-slet-fav]");
  if (slet){
    // Der er ingen fortryd her, og et fejltryk under bladring er let at lave.
    if (!confirm("Fjern dette sæt fra favoritterne?")) return;
    removeFavorite(Number(slet.dataset.sletFav), Number(slet.dataset.indeks));
    return;
  }

  // Tryk paa et toejbillede forstoerrer det, praecis som i flat-layet.
  const billede = e.target.closest(".fav-billede");
  if (billede) visStort(billede);
});

lay.addEventListener("click", e => {
  const btn = e.target.closest(".icon-btn");
  if (!btn){
    // Tryk paa selve toejbilledet forstoerrer det. Alt andet i en slot -
    // tom plads, eller et slot uden toej - goer ingenting.
    const billede = e.target.closest("img.garment");
    if (billede) visStort(billede);
    return;
  }
  const slot = btn.closest(".slot");
  const cat  = slot.dataset.cat;
  if (!current[cat]) return;               // intet toej i slotten

  if (btn.dataset.action === "lock"){
    const isLocked = !lockedCats.has(cat);
    lockedCats[isLocked ? "add" : "delete"](cat);
    btn.setAttribute("aria-pressed", String(isLocked));
    return;
  }

  if (btn.dataset.action === "next"){ bump(btn); cycleSlot(slot); }
});

/*---------------------------------------------------------------
   Forstoerret toejbillede. Kilde og navn tages fra det billede der
   blev trykket paa, saa der ikke skal slaas op i items igen.
----------------------------------------------------------------*/
/* Samme moenster som menuen og vaelgeren: klasser styrer bevaegelsen, og en
   timer skjuler laget bagefter. Ikke "animationend" - den udloeses aldrig hvis
   brugeren har slaaet animationer fra, og laget ville saa aldrig forsvinde. */
const ZOOM_LUK_MS = 180;   /* skal matche varigheden paa zoom-ud i style.css */
let zoomAaben = false;
let zoomTimer = null;

function visStort(billede){
  clearTimeout(zoomTimer);
  zoomAaben = true;
  zoomBillede.src = billede.src;
  zoomBillede.alt = billede.alt;
  zoomNavn.textContent = billede.alt;
  zoomEl.classList.remove("lukker");
  zoomEl.hidden = false;
  void zoomEl.offsetWidth;          // tving reflow, saa animationen starter forfra
  zoomEl.classList.add("aaben");
}

function lukStort(){
  if (!zoomAaben) return;
  clearTimeout(zoomTimer);
  zoomAaben = false;
  zoomEl.classList.remove("aaben");
  zoomEl.classList.add("lukker");
  zoomTimer = setTimeout(() => {
    zoomEl.hidden = true;
    zoomEl.classList.remove("lukker");
  }, ZOOM_LUK_MS);
}

zoomEl.addEventListener("click", lukStort);   // tryk hvor som helst paa laget

/* Egen Escape-lytter. De to andre (menuen og vaelgeren) kalder funktioner der
   selv springer fra naar de er lukkede, saa de tre paavirker ikke hinanden. */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") lukStort();
});

/* Skalerer et billede ned via canvas, saa det fylder mindre i localStorage.
   PNG bevarer gennemsigtigheden fra en sticker fra kamerarullen. */
function resizeImage(file, maxDim){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/png"));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

addItemBtn.addEventListener("click", () => addDialog.showModal());
addCancel.addEventListener("click", () => addDialog.close());

addForm.addEventListener("submit", async e => {
  e.preventDefault();
  const file = addPhoto.files[0];
  if (!file) return;

  const image = await resizeImage(file, 1000);
  const extra = loadExtraItems();
  extra.push({
    id: "x" + Date.now(),
    name: addName.value.trim(),
    category: addCategory.value,
    image
  });

  try {
    saveExtraItems(extra);
  } catch {
    alert("Kunne ikke gemme billedet — der er nok ikke mere plads. Prøv evt. et andet billede.");
    return;
  }

  rebuildItems();
  renderWardrobe();          // det nye stykke skal vaere synligt med det samme
  addForm.reset();
  addDialog.close();
});

function bump(btn){
  btn.classList.remove("bump");
  void btn.offsetWidth;   // tving reflow, saa animationen kan starte forfra ved hurtige klik
  btn.classList.add("bump");
}

/* Pilene blader frem/tilbage gennem den paagaeldende kategoris toej. */
/* Pilene traekker et tilfaeldigt andet stykke i kategorien - ikke det naeste
   i raekkefoelgen. Det nuvaerende stykke filtreres fra, saa et tryk altid
   giver et synligt skift. */
function cycleSlot(slot){
  const cat = slot.dataset.cat;
  if (!current[cat] || lockedCats.has(cat)) return;   // intet toej, eller laast
  // Puljen tages fra det viste stykkes egen kategori, ikke slottets navn -
  // ellers ville bukse-slottet skifte fra shorts til lange bukser paa en varm dag.
  const kat  = current[cat].category;
  const pool = filtrerPaaLejlighed(items.filter(i => i.category === kat))
                 .filter(i => i.id !== current[cat].id);
  if (!pool.length) return;
  current[cat] = pool[Math.floor(Math.random() * pool.length)];
  renderSlot(slot, current[cat]);
  renderMeta(current);
  saveHistory(current);
  updateFavoriteButton();
  updateWoreButton();
}

/* Saettet bygges paa fallback-vejret, saa det kan vises med det samme. Naar
   det rigtige vejr lander bagefter, rettes KUN de slots der beviseligt blev
   valgt paa et forkert grundlag - resten af skaermen skal staa helt stille.
   Der bruges renderSlot() paa de enkelte slots, ikke render() paa hele
   saettet, saa billedet krydsblender i stedet for at layoutet hopper. */
function retEfterVejr(){
  const rettede = [];

  // 1. Regn. Jakken blev valgt uden at vide at det bliver vaadt.
  if (regnvejr && current.outerwear && !current.outerwear.regn){
    foersteSaet = true;               // rettelsen her ER dagens foerste saet
    const jakke = pick("outerwear");
    foersteSaet = false;              // naeste tryk paa knappen har alle jakker i spil igen
    // Byttes kun hvis der faktisk kom en regnjakke ud af det. Er ingen jakker
    // tagget, staar den valgte jakke - praecis som pick() selv goer.
    if (jakke && jakke.regn){
      current.outerwear = jakke;
      rettede.push("outerwear");
    }
  }

  // 2. Shorts. Temperaturen kan have krydset 22-graders-graensen.
  const oensket = benKategori();
  if (current.bottom && current.bottom.category !== oensket){
    const ben = pick(oensket);
    if (ben){
      current.bottom = ben;
      rettede.push("bottom");
    }
  }

  if (!rettede.length) return;        // intet at rette - skaermen roeres ikke

  rettede.forEach(cat => renderSlot(lay.querySelector(`.slot[data-cat="${cat}"]`), current[cat]));
  renderMeta(current);
  saveHistory(current);
  updateFavoriteButton();
  updateWoreButton();
}

async function init(){
  byggVaelger();
  visValgtLejlighed();              // vaelgeren viser det valg der blev gemt sidst
  renderFavorites();
  shuffle();                        // vises straks - vejret hentes bagefter
  visView("outfit");

  const w = await fetchWeather();
  if (!w) return;                   // ingen forbindelse: saettet staar som det blev bygget

  temp = w.max;                // hoejeste forventede temperatur i tidsrummet VEJR_FRA-VEJR_TIL
  regnvejr = w.regn;
  // Temperaturen oeverst, vejrtypen under - navnene staar med lille begyndelsesbogstav.
  weatherTemp.textContent = `${Math.round(w.min)}–${Math.round(w.max)}°`;
  weatherNavn.textContent = w.navn.charAt(0).toUpperCase() + w.navn.slice(1);
  retEfterVejr();
}

init();
