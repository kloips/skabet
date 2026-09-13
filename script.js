/* ---------------------------------------------------------------
   Dit toej. Filnavnet bestemmer kategorien, teksten er det navn
   der vises under saettet. Ret navnene så de passer til dit toej.
   Tilfoej en ny linje naar du fotograferer mere.
----------------------------------------------------------------*/
const files = {
  "outerwear-3.jpg":  { navn: "Ternet flannelskjorte, grå og hvid", paenhed: 4, farve: "hvid", farve2: "graa", moenster: "ternet" },

  "outerwear-4.jpg":  { navn: "Mørkeblå fløjlsovershirt", paenhed: 4, farve: "navy", moenster: "ensfarvet" },

  "outerwear-5.jpg":  { navn: "Olivengrøn overshirt med brystlommer", paenhed: 4, farve: "oliven", moenster: "ensfarvet" },

  "outerwear-6.jpg":  { navn: "Grå vindjakke med hætte", paenhed: 2, farve: "graa", moenster: "ensfarvet" },
  "outerwear-7.jpg":  { navn: "Sort vinterjakke", paenhed: 1, farve: "sort", moenster: "ensfarvet" },
  "outerwear-8.jpg":  { navn: "Sort lynlåsjakke med krave", paenhed: 4, farve: "sort", moenster: "ensfarvet" },
  "outerwear-9.jpg":  { navn: "Brun overshirt med trykknapper", paenhed: 4, farve: "brun", moenster: "ensfarvet" },
  "outerwear-10.jpg": { navn: "Lysegrå vindjakke med hætte", paenhed: 2, farve: "graa", moenster: "ensfarvet" },
  "outerwear-11.jpg": { navn: "Mørkebrun vest ", paenhed: 3, farve: "brun", moenster: "ensfarvet" },
  "outerwear-12.jpg": { navn: "Brun jakke med hvide syninger", paenhed: 2, farve: "brun", moenster: "ensfarvet" },
  "outerwear-13.jpg": { navn: "Grå jakke med krave", paenhed: 3, farve: "graa", moenster: "ensfarvet" },
  "outerwear-14.jpg": { navn: "Sort lang frakke", regn: true, paenhed: 5, farve: "sort", moenster: "ensfarvet" },
  "outerwear-15.jpg": { navn: "Grøn jakke med hætte og klaplommer", paenhed: 4, farve: "graa", moenster: "ensfarvet" },
  "outerwear-16.jpg": { navn: "Lyseblå denimskjortejakke", paenhed: 4, farve: "blaa", moenster: "ensfarvet" },
  "outerwear-17.jpg": { navn: "Sort regnjakke med hætte", regn: true, paenhed: 2, farve: "sort", moenster: "ensfarvet" },

  "mid-3.jpg":  { navn: "Sort sweatshirt", paenhed: 4, farve: "sort", moenster: "print" },
  "mid-4.jpg":  { navn: "Lysegrå hoodie med lynlås", paenhed: 2, farve: "graa", moenster: "ensfarvet" },
  "mid-5.jpg":  { navn: "Grå hoodie", paenhed: 1, farve: "graa", moenster: "ensfarvet" },
  "mid-6.jpg":  { navn: "Navy GAP hoodie med lynlås", paenhed: 2, farve: "navy", moenster: "print" },
  "mid-7.jpg":  { navn: "Lysegrå BLS hoodie", paenhed: 1, farve: "graa", moenster: "print" },
  "mid-8.jpg":  { navn: "Grøn hoodie med lynlås", paenhed: 2, farve: "groen", moenster: "ensfarvet" },
  "mid-9.jpg":  { navn: "Grøn sweatshirt", paenhed: 3, farve: "oliven", moenster: "ensfarvet" },
  "mid-10.jpg": { navn: "Mørkegrøn strik", paenhed: 4, farve: "sort", moenster: "ensfarvet" },
  "mid-11.jpg": { navn: "Gråblå strik", paenhed: 4, farve: "graa", farve2: "blaa", moenster: "ensfarvet" },
  "mid-12.jpg": { navn: "Lysegrå strik", paenhed: 4, farve: "graa", moenster: "ensfarvet" },
  "mid-13.jpg": { navn: "Grøn sweatshirt", paenhed: 4, farve: "brun", moenster: "ensfarvet" },
  "mid-14.jpg": { navn: "Mørkeblå zip sweatshirt", paenhed: 4, farve: "navy", moenster: "ensfarvet" },
  "mid-15.jpg": { navn: "Brun strik", paenhed: 3, farve: "brun", moenster: "ensfarvet" },
  "mid-16.jpg": { navn: "Navy Pull&Bear sweatshirt", paenhed: 2, farve: "navy", moenster: "print" },
  "mid-17.jpg": { navn: "Sort sweatshirt", paenhed: 3, farve: "sort", moenster: "ensfarvet" },
  "mid-18.jpg": { navn: "HK grå sweatshirt", paenhed: 1, farve: "sort", moenster: "print" },
  "mid-19.jpg": { navn: "Grøn HK sweatshirt", paenhed: 3, farve: "oliven", moenster: "ensfarvet" },
  "mid-20.jpg": { navn: "Lysegrå sweatshirt", paenhed: 3, farve: "graa", moenster: "ensfarvet" },
  "mid-21.jpg": { navn: "Grå strik", paenhed: 4, farve: "graa", moenster: "ensfarvet" },
  "mid-22.jpg": { navn: "Mørkegrå strik", paenhed: 4, farve: "graa", moenster: "ensfarvet" },
  "mid-23.jpg": { navn: "Lysegrå zip sweatshirt", paenhed: 4, farve: "graa", moenster: "ensfarvet" },
  "mid-24.jpg": { navn: "Mørkeblå ternet skjorte", paenhed: 3, farve: "navy", moenster: "ternet" },
  "mid-25.jpg": { navn: "Ternet skjorte, hvid og blå", paenhed: 3, farve: "creme", farve2: "sort", moenster: "ternet" },
  "mid-26.jpg": { navn: "Blå fin skjorte", paenhed: 4, farve: "blaa", farve2: "hvid", moenster: "ternet" },
  "mid-27.jpg": { navn: "Ternet kort skjorte", paenhed: 3, farve: "beige", moenster: "ternet" },
  "mid-28.jpg": { navn: "Lyseblå ternet skjorte", paenhed: 3, farve: "creme", farve2: "blaa", moenster: "ternet" },
  "mid-29.jpg": { navn: "Grøn og hvid ternet skjorte", paenhed: 3, farve: "groen", farve2: "creme", moenster: "ternet" },
  "mid-30.jpg": { navn: "Blå skjorte", paenhed: 4, farve: "blaa", moenster: "ensfarvet" },
  "mid-31.jpg": { navn: "Ternet blå flannelskjorte", paenhed: 3, farve: "navy", moenster: "ternet" },
  "mid-32.jpg": { navn: "Mørkeblå flannelskjorte", paenhed: 3, farve: "blaa", moenster: "ensfarvet" },
  "mid-33.jpg": { navn: "Sort, brun og hvid skjorte", paenhed: 3, farve: "sort", farve2: "creme", moenster: "ternet" },

  "bottom-4.jpg":  { navn: "Sorte jeans", paenhed: 2, farve: "sort", moenster: "ensfarvet" },
  "bottom-5.jpg":  { navn: "Brune habitbukser", paenhed: 5, farve: "brun", moenster: "ensfarvet" },
  "bottom-6.jpg":  { navn: "Mørkeblå jeans", paenhed: 4, farve: "navy", moenster: "ensfarvet" },
  "bottom-8.jpg":  { navn: "Creme jeans", paenhed: 2, farve: "creme", moenster: "ensfarvet" },
  "bottom-9.jpg":  { navn: "Grå jeans", paenhed: 3, farve: "graa", moenster: "ensfarvet" },
  "bottom-10.jpg": { navn: "Brungrå jeans", paenhed: 1, farve: "graa", farve2: "brun", moenster: "ensfarvet" },
  "bottom-11.jpg": { navn: "Blå jeans", paenhed: 4, farve: "blaa", moenster: "ensfarvet" },
  "bottom-12.jpg": { navn: "Koksgrå jeans", paenhed: 3, farve: "graa", moenster: "ensfarvet" },
  "bottom-13.jpg": { navn: "Sorte bukser, smalle", paenhed: 5, farve: "sort", moenster: "ensfarvet" },
  "bottom-14.jpg": { navn: "Sorte bukser, brede", paenhed: 5, farve: "sort", moenster: "ensfarvet" },
  "bottom-15.jpg": { navn: "Lysegrå bukser", paenhed: 2, farve: "graa", moenster: "ensfarvet" },
  "bottom-16.jpg": { navn: "Lyseblå jeans", paenhed: 1, farve: "blaa", moenster: "ensfarvet" },
  "bottom-18.jpg": { navn: "Støvet blå jeans", paenhed: 3, farve: "blaa", moenster: "ensfarvet" },

  "shorts-1.jpg":  {navn: "Mørke denimshorts", paenhed: 3, farve: "navy", moenster: "ensfarvet" },
  "shorts-2.jpg":  {navn: "Sorte denimshorts", paenhed: 3, farve: "sort", moenster: "ensfarvet" },
  "shorts-3.jpg":  {navn: "Grå denimshorts", paenhed: 3, farve: "graa", moenster: "ensfarvet" },
  "shorts-4.jpg":  {navn: "Lyseblå denimshorts", paenhed: 3, farve: "blaa", moenster: "ensfarvet" },
  "shoes-3.jpg":  { navn: "Hvide Nike Cortez", paenhed: 2, farve: "hvid", moenster: "ensfarvet" },
  "shoes-4.jpg":  { navn: "Asics navy og grå", paenhed: 3, farve: "graa", farve2: "blaa", moenster: "ensfarvet" },
  "shoes-5.jpg":  { navn: "Asics Gel-Lyte III, blå og grå", paenhed: 3, farve: "navy", farve2: "graa", moenster: "ensfarvet" },
  "shoes-6.jpg":  { navn: "Adidas Stan Smith, hvid og grøn", paenhed: 4, farve: "hvid", moenster: "ensfarvet" },
  "shoes-7.jpg":  { navn: "Sorte nike", paenhed: 2, farve: "sort", moenster: "ensfarvet" },
  "shoes-8.jpg":  { navn: "Loafers brede", paenhed: 5, farve: "sort", moenster: "ensfarvet" },
  "shoes-9.jpg":  { navn: "Brune loafers", paenhed: 5, farve: "sort", moenster: "ensfarvet" },
  "shoes-10.jpg": { navn: "Adidas Spezials", paenhed: 2, farve: "sort", moenster: "ensfarvet" },
  "shoes-11.jpg": { navn: "Adidas superstar", paenhed: 3, farve: "hvid", moenster: "ensfarvet" },
  "shoes-12.jpg": { navn: "Clarks", paenhed: 5, farve: "graa", moenster: "ensfarvet" },
  "shoes-13.jpg": { navn: "Grå Ascics", paenhed: 4, farve: "graa", moenster: "ensfarvet" },
  "shoes-14.jpg": { navn: "Adidas Gazelle Indoor, grøn", paenhed: 4, farve: "groen", moenster: "ensfarvet" },
  "shoes-15.jpg": { navn: "P6000 hvide", paenhed: 3, farve: "hvid", moenster: "ensfarvet" },
  "shoes-16.jpg": { navn: "brune adidas", paenhed: 4, farve: "brun", moenster: "ensfarvet" },
  "shoes-17.jpg": { navn: "Converse grønne", paenhed: 3, farve: "oliven", moenster: "ensfarvet" },
  "shoes-18.jpg": { navn: "Timberland bådsko, brune", paenhed: 3, farve: "brun", moenster: "ensfarvet" },

  "top-4.jpg":  { navn: "Grå t-shirt", paenhed: 3, farve: "beige", moenster: "ensfarvet" },
  "top-5.jpg":  { navn: "Lysegrå t-shirt", paenhed: 3, farve: "creme", moenster: "ensfarvet" },
  "top-6.jpg":  { navn: "Grøn t-shirt med logo", paenhed: 2, farve: "oliven", moenster: "ensfarvet" },
  "top-7.jpg":  { navn: "Sort t-shirt", paenhed: 4, farve: "sort", moenster: "ensfarvet" },
  "top-8.jpg":  { navn: "Sort t-shirt (Carhartt tekst)", paenhed: 2, farve: "sort", moenster: "print" },
  "top-9.jpg":  { navn: "Sort t-shirt med print", paenhed: 1, farve: "sort", moenster: "print" },
  "top-10.jpg": { navn: "Mørkeblå t-shirt (Carhartt logo)", paenhed: 2, farve: "navy", moenster: "ensfarvet" },
  "top-11.jpg": { navn: "Lyseblå stribet polo med lynlås", paenhed: 4, farve: "blaa", farve2: "hvid", moenster: "stribet" },
  "top-12.jpg": { navn: "Sort/gul stribet t-shirt med print", paenhed: 1, farve: "creme", farve2: "navy", moenster: "stribet" },
  "top-13.jpg": { navn: "Grøn polo", paenhed: 4, farve: "groen", moenster: "ensfarvet" },
  "top-14.jpg": { navn: "Mørkeblå t-shirt", paenhed: 4, farve: "navy", moenster: "ensfarvet" },
  "top-15.jpg": { navn: "Grå t-shirt med print", paenhed: 2, farve: "graa", moenster: "print" },
  "top-16.jpg": { navn: "Grå t-shirt (Good Life)", paenhed: 2, farve: "graa", moenster: "print" },
  "top-17.jpg": { navn: "Olivengrøn t-shirt med hvid kant", paenhed: 4, farve: "oliven", moenster: "ensfarvet" },
  "top-18.jpg": { navn: "Grøn t-shirt med print", paenhed: 1, farve: "groen", moenster: "ensfarvet" },
  "top-19.jpg": { navn: "Sort t-shirt med japansk print", paenhed: 2, farve: "sort", moenster: "print" },
  "top-20.jpg": { navn: "Olivengrøn polo med lynlås", paenhed: 5, farve: "beige", moenster: "ensfarvet" },
  "top-21.jpg": { navn: "Petrol t-shirt (Nike Moving Co)", paenhed: 1, farve: "petrol", moenster: "print" },
  "top-22.jpg": { navn: "Sort t-shirt (Arigato)", paenhed: 3, farve: "sort", moenster: "print" },
  "top-23.jpg": { navn: "Brun strikpolo", paenhed: 5, farve: "brun", moenster: "ensfarvet" },
  "top-24.jpg": { navn: "Sort langærmet t-shirt", paenhed: 2, farve: "sort", moenster: "ensfarvet" },
  "top-25.jpg": { navn: "Grøn stribet langærmet polo", paenhed: 3, farve: "groen", farve2: "hvid", moenster: "stribet" },
  "top-26.jpg": { navn: "Grøn stribet langærmet t-shirt", paenhed: 3, farve: "oliven", moenster: "stribet" },
  "top-27.jpg": { navn: "Hvid langærmet t-shirt", paenhed: 3, farve: "creme", moenster: "ensfarvet" },
  "top-28.jpg": { navn: "Mørkegrå langærmet t-shirt", paenhed: 2, farve: "graa", moenster: "ensfarvet" },
  "top-29.jpg": { navn: "Lysegrå langærmet t-shirt", paenhed: 3, farve: "graa", moenster: "ensfarvet" },
  "top-30.jpg": { navn: "Sort/hvid stribet t-shirt", paenhed: 4, farve: "hvid", farve2: "sort", moenster: "stribet" },
  "top-31.jpg": { navn: "Hvid stribet t-shirt", paenhed: 5, farve: "creme", moenster: "ensfarvet" },
  "top-32.jpg": { navn: "Creme strikpolo", paenhed: 5, farve: "creme", moenster: "ensfarvet" },
  "top-33.jpg": { navn: "Hvid t-shirt med bølge-print", paenhed: 2, farve: "hvid", moenster: "print" },
  "top-34.jpg": { navn: "Hvid t-shirt (YourTurn)", paenhed: 3, farve: "hvid", moenster: "ensfarvet" },
  "top-35.jpg": { navn: "Hvid t-shirt", paenhed: 4, farve: "hvid", moenster: "ensfarvet" },
  "top-36.jpg": { navn: "Hvid t-shirt", paenhed: 4, farve: "hvid", moenster: "ensfarvet" },
  "top-37.jpg": { navn: "Creme t-shirt med grønt print", paenhed: 3, farve: "creme", moenster: "print" },
  "top-38.jpg": { navn: "Hvid t-shirt", paenhed: 2, farve: "hvid", moenster: "ensfarvet" },
  "top-39.jpg": { navn: "Sort t-shirt", paenhed: 4, farve: "sort", moenster: "ensfarvet" },
  "top-40.jpg": { navn: "Blå t-shirt", paenhed: 4, farve: "blaa", moenster: "ensfarvet" },
  "top-41.jpg": { navn: "Grå t-shirt med print (Deus Customs)", paenhed: 2, farve: "graa", moenster: "print" },
  "top-42.jpg": { navn: "Blå/hvid stribet langærmet t-shirt", paenhed: 3, farve: "hvid", farve2: "blaa", moenster: "stribet" },
  "top-43.jpg": { navn: "Turkis/hvid stribet langærmet t-shirt", paenhed: 2, farve: "turkis", farve2: "hvid", moenster: "stribet" }
};

/* Saet denne op naar et billede erstattes med et nyt UNDER SAMME filnavn
   (fx efter en rettelse som denne). Ellers bliver den gamle udgave siddende
   fast i Safaris cache paa telefonen, selvom filen er skiftet ud paa serveren. */
const ASSET_VERSION = "20260912a";

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
const favTilbage    = document.getElementById("favTilbage");
const favTitel      = document.getElementById("favTitel");
const favGemt       = document.getElementById("favGemt");
const byggerEl      = document.getElementById("bygger");
const bygSlots      = document.getElementById("bygSlots");
const bygListe      = document.getElementById("bygListe");
const bygListeTitel = document.getElementById("bygListeTitel");
const bygListeRaekke= document.getElementById("bygListeRaekke");
const bygToem       = document.getElementById("bygToem");
const bygBtn        = document.getElementById("bygBtn");
const bygGemBtn     = document.getElementById("bygGemBtn");
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
    // Et slot UDEN noegle er bevidst tomt (manuelt bygget saet) og skal ikke
    // udloese advarslen - kun en noegle hvis id ikke findes taeller som manglende.
    const stykker = FAV_SLOTS.map(cat => items.find(item => item.id === record[cat]) || null);
    const mangler = FAV_SLOTS.some((cat, i) => record[cat] !== undefined && !stykker[i]);

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

  // Footeren hoerer til visningen.
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
  // Byggeren lukkes ved ethvert skift - dels lander man paa listen, ikke i
  // byggeren, dels sidder dens tilbage-knap i headeren og ville ellers blive
  // staaende bag de andre visninger.
  lukBygger();
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
  Object.keys(KAT_NAVNE).forEach((kat, n) => {
    const iKat = sorterEfterBrug(items.filter(i => i.category === kat), antal);
    if (!iKat.length) return;     // tomme kategorier springes over

    const gruppe = document.createElement("section");
    gruppe.className = "ward-gruppe";
    gruppe.style.setProperty("--i", n);   // forskudt ind-animation, se style.css
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
  liste.forEach((item, n) => {
    const kort = lavKort(item, true);
    kort.style.setProperty("--i", Math.min(n, 8));   // forskudt ind-animation, hoejst 8 trin
    grid.append(kort);
  });
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

/*---------------------------------------------------------------
   Byg saet: et outfit sammensat manuelt, slot for slot. Gemmes i
   skabet-favorites i praecis samme form som et gemt forslag, plus
   kilde: "manuel". Slots man ikke fylder, udelades bare fra posten.
   Det er en tilstand i favoritvisningen, ikke et menupunkt.
---------------------------------------------------------------*/
// Samme raekkefoelge som flat-layet og favoritstakken: udefra og ind, oppefra og ned.
const BYG_SLOTS = [
  { kat: "outerwear", navn: "Jakke"   },
  { kat: "mid",       navn: "Trøje"   },
  { kat: "top",       navn: "T-shirt" },
  { kat: "bottom",    navn: "Bukser"  },   // bukser OG shorts, gemmes under bottom som favoritterne
  { kat: "shoes",     navn: "Sko"     },
];
const BYG_MIN = 2;        // faerrest stykker et saet kan gemmes med
const GEMT_MS = 2500;     // hvor laenge "Saettet er gemt" staar
const BYG_LISTE_LUK_MS = 150;   // matcher byg-liste-ud i style.css
let bygListeTimer = null;
let bygValg  = null;      // null = listen vises, ellers { top: id, ... } for byggeren
let bygAktiv = null;      // det slot hvis liste er foldet ud
let gemtTimer = null;

function aabnBygger(){
  bygValg = {};
  bygAktiv = null;
  byggerEl.append(bygListe);   // listen kan staa inde i stakken - flyt den ud foer stakken toemmes
  bygSlots.innerHTML = "";     // frisk stak, saa intet animerer "ind" fra sidste gang
  favTilbage.classList.remove("bump");   // ellers spiller nikket i stedet for ind-animationen
  renderBygger();
}

function lukBygger(){
  bygValg = null;
  bygAktiv = null;
  renderBygger();
  renderFavorites();      // saetter favoritesEmpty rigtigt igen
}

function renderBygger(){
  const aaben = bygValg !== null;
  favTilbage.hidden = !aaben;
  favTitel.textContent = aaben ? "Byg et sæt" : "Favorit Outfits";
  favoritesList.hidden = aaben;
  if (aaben) favoritesEmpty.hidden = true;
  byggerEl.hidden = !aaben;
  bygBtn.hidden = aaben;
  bygGemBtn.hidden = !aaben;
  if (!aaben){
    clearTimeout(bygListeTimer);    // lukkes hele byggeren, skal listen bare vaek
    bygListe.classList.remove("lukker");
    bygListe.hidden = true;
    return;
  }

  bygGemBtn.disabled = Object.keys(bygValg).length < BYG_MIN;

  // Slottene bygges een gang og opdateres derefter paa stedet. Saa faar kun
  // det slot der faktisk skiftede indhold, sin ind-animation, og ringen om
  // det aktive slot kan glide i stedet for at springe.
  if (!bygSlots.children.length){
    bygSlots.innerHTML = BYG_SLOTS.map(({ kat, navn }, n) => `
      <div class="byg-plads" data-slot="${kat}" style="--i:${n}">
        <button class="byg-slot" type="button" data-slot="${kat}" aria-pressed="false" aria-label="${navn}"></button>
      </div>`).join("");
  }
  BYG_SLOTS.forEach(({ kat, navn }) => {
    const knap = bygSlots.querySelector(`.byg-slot[data-slot="${kat}"]`);
    const item = items.find(i => i.id === bygValg[kat]);
    knap.setAttribute("aria-pressed", String(bygAktiv === kat));
    knap.classList.toggle("fyldt", !!item);
    const id = item ? String(item.id) : "";
    if (knap.dataset.id === id) return;   // uaendret - roer ikke DOM'en
    knap.dataset.id = id;
    knap.innerHTML = item ? `<img src="${item.image}" alt="">` : `<span aria-hidden="true">+ ${navn}</span>`;
  });

  if (bygAktiv === null){
    lukBygListe();
    return;
  }
  clearTimeout(bygListeTimer);      // aabnes igen midt i lukningen, afbrydes den
  bygListe.classList.remove("lukker");
  // Listen flyttes hen lige under det slot der er trykket paa. Flytningen
  // genstarter ogsaa ind-animationen, saa den folder ud paa det nye sted.
  bygSlots.querySelector(`.byg-plads[data-slot="${bygAktiv}"]`).after(bygListe);
  bygListe.hidden = false;

  const slot = BYG_SLOTS.find(s => s.kat === bygAktiv);
  bygListeTitel.textContent = "Vælg " + slot.navn.toLowerCase();
  bygToem.hidden = bygValg[bygAktiv] === undefined;

  const kats = bygAktiv === "bottom" ? ["bottom", "shorts"] : [bygAktiv];
  const liste = sorterEfterBrug(items.filter(i => kats.includes(i.category)), baaretAntal());
  bygListeRaekke.innerHTML = "";
  liste.forEach((item, n) => {
    const kort = lavKort(item, false);
    kort.dataset.vaelg = item.id;
    kort.style.setProperty("--i", Math.min(n, 8));   // forskudt ind-animation, hoejst 8 trin
    if (item.id === bygValg[bygAktiv]) kort.classList.add("valgt");
    bygListeRaekke.append(kort);
  });
  bygListeRaekke.scrollLeft = 0;
}

function lukBygListe(){
  if (bygListe.hidden) return;
  bygListe.classList.add("lukker");
  clearTimeout(bygListeTimer);
  bygListeTimer = setTimeout(() => {
    bygListe.hidden = true;
    bygListe.classList.remove("lukker");
  }, BYG_LISTE_LUK_MS);
}

byggerEl.addEventListener("click", e => {
  const slot = e.target.closest("[data-slot]");
  if (slot){
    // Tryk paa det slot der allerede er aabent, folder listen ind igen.
    bygAktiv = bygAktiv === slot.dataset.slot ? null : slot.dataset.slot;
    renderBygger();
    return;
  }

  if (e.target.closest("#bygToem")){
    delete bygValg[bygAktiv];
    bygAktiv = null;
    renderBygger();
    return;
  }

  const kort = e.target.closest("[data-vaelg]");
  if (kort){
    // id'er er tal for det hardcodede og tekst ("x...") for det selvtilfoejede
    const item = items.find(i => String(i.id) === kort.dataset.vaelg);
    if (item) bygValg[bygAktiv] = item.id;
    bygAktiv = null;
    renderBygger();
  }
});

bygBtn.addEventListener("click", aabnBygger);
favTilbage.addEventListener("click", () => {
  bump(favTilbage);
  // Nikket skal naa at ses foer knappen forsvinder - byggeren lukkes lige efter.
  setTimeout(() => {
    lukBygger();
    window.scrollTo(0, 0);
  }, BYG_LISTE_LUK_MS);
});

bygGemBtn.addEventListener("click", () => {
  if (Object.keys(bygValg).length < BYG_MIN) return;
  const favorites = loadFavorites();
  favorites.push({ id: Date.now(), kilde: "manuel", ...bygValg });
  saveFavorites(favorites);
  lukBygger();                                            // rydder byggeren og viser listen
  updateFavoriteButton();
  favoritesList.scrollLeft = favoritesList.scrollWidth;   // bladr hen til det nye saet
  favGemt.hidden = false;
  clearTimeout(gemtTimer);
  gemtTimer = setTimeout(() => { favGemt.hidden = true; }, GEMT_MS);
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
