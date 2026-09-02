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
const occasionEl    = document.getElementById("occasion");
const menuBtn       = document.getElementById("menuBtn");
const menuEl        = document.getElementById("menu");
const footerEl      = document.getElementById("footer");
const wardrobeEl    = document.getElementById("wardrobe");
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
      // Regnjakken skal frem hvis bare en del af tidsrummet er vaadt - ogsaa
      // naar beskrivelsen siger noget andet, fordi den kun naevner det der fylder mest.
      regn: timer.some(t => VEJR_TYPER[t.rang].regn)
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

function renderFavorites(){
  const favorites = loadFavorites();
  favoritesEmpty.hidden = favorites.length > 0;
  favoritesList.innerHTML = "";
  favorites.forEach(record => {
    const names = CATS.map(cat => items.find(i => i.id === record[cat])?.name).filter(Boolean).join(" · ");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip fav-chip";
    btn.dataset.favId = record.id;
    btn.innerHTML = `${names} <span class="fav-remove" data-remove aria-label="Fjern favorit">×</span>`;
    favoritesList.append(btn);
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
}

function removeFavorite(id){
  saveFavorites(loadFavorites().filter(f => f.id !== id));
  renderFavorites();
  updateFavoriteButton();
}

function updateFavoriteButton(){
  const isFav = loadFavorites().some(f => recordKey(f) === outfitKey(current));
  favoriteBtn.setAttribute("aria-pressed", String(isFav));
  favoriteBtn.textContent = isFav ? "★" : "☆";
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

const pick = (cat, avoidId) => {
  let pool = items.filter(i => i.category === cat);
  if (cat === "outerwear" && regnvejr && foersteSaet){
    const regnjakker = pool.filter(i => i.regn);
    if (regnjakker.length) pool = regnjakker;   // ingen taggede jakker = alt er stadig i spil
  }
  pool = filtrerPaaLejlighed(pool);             // efter regn, saa man aldrig staar uden regnjakke
  if (avoidId != null && pool.length > 1){
    pool = pool.filter(i => i.id !== avoidId);   // undgaa gaarsdagens stykke naar der er et alternativ
  }
  return pool[Math.floor(Math.random() * pool.length)];
};

function buildOutfit(){
  const history  = loadHistory();
  const today    = new Date().toISOString().slice(0, 10);
  const isNewDay = history.date && history.date !== today;

  // Over 22 grader traekkes shorts i stedet for lange bukser.
  // Slottet hedder stadig "bottom" - det er kun puljen der skifter.
  const benKat = (typeof temp === "number" && temp >= 22
                  && items.some(i => i.category === "shorts"))
                 ? "shorts"
                 : "bottom";

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
  current = buildOutfit();
  foersteSaet = false;   // herefter er alle jakker i spil igen
  render(current);
  saveHistory(current);
  updateFavoriteButton();
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

  if (navn === "skab") renderWardrobe();
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

function renderWardrobe(){
  wardrobeEl.innerHTML = "";

  Object.keys(KAT_NAVNE).forEach(kat => {
    const iKat = items.filter(i => i.category === kat);
    if (!iKat.length) return;

    const gruppe = document.createElement("section");
    gruppe.className = "ward-gruppe";
    gruppe.innerHTML = `<h3 class="ward-titel">${KAT_NAVNE[kat]} <span>${iKat.length}</span></h3>`;

    const grid = document.createElement("div");
    grid.className = "ward-grid";

    iKat.forEach(item => {
      const kort = document.createElement("figure");
      kort.className = "ward-item";
      // Kun toej tilfoejet fra formularen kan slettes - det hardcodede staar i files-objektet.
      const egen = typeof item.id === "string" && item.id.startsWith("x");
      kort.innerHTML = `
        <div class="ward-billede">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <span class="ward-paenhed" title="Pænhed">${item.paenhed}</span>
          ${egen ? `<button class="ward-slet" type="button" data-slet="${item.id}" aria-label="Slet ${item.name}">×</button>` : ""}
        </div>
        <figcaption>${item.name}</figcaption>`;
      grid.append(kort);
    });

    gruppe.append(grid);
    wardrobeEl.append(gruppe);
  });
}

wardrobeEl.addEventListener("click", e => {
  const btn = e.target.closest("[data-slet]");
  if (!btn) return;
  const id = btn.dataset.slet;
  const item = items.find(i => String(i.id) === id);
  if (!confirm(`Slet "${item ? item.name : "denne genstand"}"?`)) return;
  saveExtraItems(loadExtraItems().filter(i => String(i.id) !== id));
  rebuildItems();
  renderWardrobe();
});

document.getElementById("shuffle").addEventListener("click", shuffle);

/* Et nyt valg gemmes og giver et helt nyt saet med det samme - laaste kategorier
   beholder dog deres stykke, praecis som ved et almindeligt tryk paa knappen. */
occasionEl.addEventListener("change", () => {
  occasion = occasionEl.value;
  localStorage.setItem(OCCASION_KEY, occasion);
  shuffle();
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

favoritesList.addEventListener("click", e => {
  const btn = e.target.closest(".fav-chip");
  if (!btn) return;
  const id = Number(btn.dataset.favId);
  if (e.target.closest("[data-remove]")){
    removeFavorite(id);
    return;
  }
  const record = loadFavorites().find(f => f.id === id);
  if (record){
    loadFavorite(record);
    visView("outfit");        // saettet hentes frem der hvor man kan se det
  }
});

lay.addEventListener("click", e => {
  const btn = e.target.closest(".icon-btn");
  if (!btn) return;
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
}

async function init(){
  occasionEl.value = occasion;      // menuen viser det valg der blev gemt sidst
  const w = await fetchWeather();
  if (w){
    temp = w.max;                // hoejeste forventede temperatur i tidsrummet VEJR_FRA-VEJR_TIL
    regnvejr = w.regn;
    // Temperaturen oeverst, vejrtypen under - navnene staar med lille begyndelsesbogstav.
    weatherTemp.textContent = `${Math.round(w.min)}–${Math.round(w.max)}°`;
    weatherNavn.textContent = w.navn.charAt(0).toUpperCase() + w.navn.slice(1);
  }
  renderFavorites();
  shuffle();
  visView("outfit");
}

init();
