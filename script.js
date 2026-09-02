/* ---------------------------------------------------------------
   Dit toej. Filnavnet bestemmer kategorien, teksten er det navn
   der vises under saettet. Ret navnene så de passer til dit toej.
   Tilfoej en ny linje naar du fotograferer mere.
----------------------------------------------------------------*/
const files = {
  "outerwear-3.png":  "Ternet flannelskjorte, grå og hvid",
  "outerwear-4.png":  "Mørkeblå fløjlsovershirt",
  "outerwear-5.png":  "Olivengrøn overshirt med brystlommer",
  "outerwear-6.png":  "Grå vindjakke med hætte",
  "outerwear-7.png":  "Sort dunjakke med hætte",
  "outerwear-8.png":  "Sort lynlåsjakke med ribkant",
  "outerwear-9.png":  "Brun overshirt med trykknapper",
  "outerwear-10.png": "Lysegrå vindjakke med hætte",
  "outerwear-11.png": "Mørkebrun quiltet bomber",
  "outerwear-12.png": "Brun jakke med hvide syninger",
  "outerwear-13.png": "Koksgrå jakke med krave",
  "outerwear-14.png": { navn: "Sort lang frakke", regn: true},
  "outerwear-15.png": "Grå jakke med hætte og klaplommer",
  "outerwear-16.png": "Lyseblå denimskjortejakke",
  "outerwear-17.png":  { navn: "Grå vindjakke med hætte", regn: true },

  "mid-3.png":  "Mørkegrøn sweatshirt",
  "mid-4.png":  "Olivengrøn hoodie med lynlås",
  "mid-5.png":  "Grå hoodie med tryk",
  "mid-6.png":  "Navy GAP hoodie med lynlås",
  "mid-7.png":  "Lysegrå hoodie",
  "mid-8.png":  "Grå hoodie med lynlås",
  "mid-9.png":  "Ternet skjorte, sort og hvid",
  "mid-10.png": "Mørkegrå strik",
  "mid-11.png": "Lysegrå strik",
  "mid-12.png": "Lysegrå sweatshirt",
  "mid-13.png": "Grøn sweatshirt",
  "mid-14.png": "Sort HK sweatshirt med tryk",
  "mid-15.png": "Sort strik",
  "mid-16.png": "Navy Pull&Bear sweatshirt",
  "mid-17.png": "Brun strik",
  "mid-18.png": "Navy strik med lynlås",
  "mid-19.png": "Sort sweatshirt",
  "mid-20.png": "Lysegrå strik",
  "mid-21.png": "Mørkeblå strik",
  "mid-22.png": "Sort ribstrik",
  "mid-23.png": "Mørkeblå stribet skjorte",
  "mid-24.png": "Mørkeblå ternet skjorte",
  "mid-25.png": "Blå skjorte",
  "mid-26.png": "Sort BALL sweatshirt",
  "mid-27.png": "Ternet flannelskjorte, grøn og hvid",
  "mid-28.png": "Lyseblå ternet skjorte",
  "mid-29.png": "Beige ternet skjorte",
  "mid-30.png": "Blå ternet skjorte",
  "mid-31.png": "Ternet flannelskjorte, blå og hvid",
  "mid-32.png": "Mørkeblå ternet flannelskjorte",
  "mid-33.png": "Beige strik med lynlås",

  "bottom-4.png":  "Sorte jeans",
  "bottom-5.png":  "Brune habitbukser",
  "bottom-6.png":  "Mørkeblå jeans",
  "bottom-8.png":  "Creme jeans",
  "bottom-9.png":  "Grå jeans",
  "bottom-10.png": "Brungrå jeans",
  "bottom-11.png": "Blå jeans",
  "bottom-12.png": "Koksgrå jeans",
  "bottom-13.png": "Sorte bukser, smalle",
  "bottom-14.png": "Sorte bukser, brede",
  "bottom-15.png": "Lysegrå bukser",
  "bottom-16.png": "Lyseblå jeans",
  "bottom-18.png": "Støvet blå jeans",

  "shorts-1.png":  "Mørke denimshorts",
  "shorts-2.png":  "Sorte denimshorts",
  "shorts-3.png":  "Grå denimshorts",
  "shorts-4.png":  "Lyseblå denimshorts",

  "shoes-3.png":  "Hvide Nike Cortez",
  "shoes-4.png":  "Sorte loafers med kvast",
  "shoes-5.png":  "Sorte loafers",
  "shoes-6.png":  "Sorte Nike sneakers",
  "shoes-7.png":  "Adidas Stan Smith, hvid og grøn",
  "shoes-8.png":  "Asics løbesko, navy og grå",
  "shoes-9.png":  "Asics Gel-Lyte III, blå og grå",
  "shoes-10.png": "Timberland bådsko, brune",
  "shoes-11.png": "Converse One Star, olivengrøn ruskind",
  "shoes-12.png": "Adidas Samba, brune",
  "shoes-13.png": "Nike P-6000, hvid og grå",
  "shoes-14.png": "Adidas Gazelle Indoor, grøn",
  "shoes-15.png": "Asics sneakers, grå og hvid",
  "shoes-16.png": "Grå ruskindssko",
  "shoes-17.png": "Adidas Superstar, hvid og grøn",
  "shoes-18.png": "Adidas Spezial, sort",

  "top-4.png":  "Grå t-shirt",
  "top-5.png":  "Lysegrå t-shirt",
  "top-6.png":  "Grøn t-shirt med logo",
  "top-7.png":  "Sort t-shirt",
  "top-8.png":  "Sort t-shirt (Carhartt tekst)",
  "top-9.png":  "Sort t-shirt med print",
  "top-10.png": "Sort t-shirt (Carhartt logo)",
  "top-11.png": "Blå stribet skjorte",
  "top-12.png": "Sort/gul stribet t-shirt med print",
  "top-13.png": "Grøn polo",
  "top-14.png": "Mørkeblå t-shirt",
  "top-15.png": "Grå t-shirt med print",
  "top-16.png": "Grå t-shirt (Good Life)",
  "top-17.png": "Olivengrøn t-shirt med hvid kant",
  "top-18.png": "Grøn t-shirt med print",
  "top-19.png": "Sort t-shirt med japansk print",
  "top-20.png": "Grå polo med lynlås",
  "top-21.png": "Petrol t-shirt (Nike Moving Co)",
  "top-22.png": "Sort t-shirt (Arigato)",
  "top-23.png": "Brun strikpolo",
  "top-24.png": "Sort langærmet t-shirt",
  "top-25.png": "Grøn stribet langærmet polo",
  "top-26.png": "Grøn stribet langærmet t-shirt",
  "top-27.png": "Hvid langærmet t-shirt",
  "top-28.png": "Grå langærmet t-shirt",
  "top-29.png": "Lysegrå langærmet t-shirt",
  "top-30.png": "Sort/hvid stribet t-shirt",
  "top-31.png": "Hvid stribet t-shirt",
  "top-32.png": "Hvid t-shirt",
  "top-33.png": "Hvid t-shirt med bølge-print",
  "top-34.png": "Hvid t-shirt",
  "top-35.png": "Hvid t-shirt",
  "top-36.png": "Hvid t-shirt",
  "top-37.png": "Hvid t-shirt med print",
  "top-38.png": "Hvid t-shirt",
  "top-39.png": "Sort t-shirt",
  "top-40.png": "Blå t-shirt",
  "top-41.png": "Grå t-shirt med print (Deus Customs)",
  "top-42.png": "Blå/hvid stribet langærmet t-shirt",
  "top-43.png": "Turkis/hvid stribet langærmet t-shirt"
};

/* Saet denne op naar et billede erstattes med et nyt UNDER SAMME filnavn
   (fx efter en rettelse som denne). Ellers bliver den gamle udgave siddende
   fast i Safaris cache paa telefonen, selvom filen er skiftet ud paa serveren. */
const ASSET_VERSION = "20260831b";

/* En vaerdi i files maa vaere enten ren tekst (kun navnet) eller et objekt
   med ekstra oplysninger: { navn: "...", regn: true }. Begge dele virker,
   saa toejet kan tagges lidt ad gangen. */
const builtInItems = Object.entries(files).map(([file, value], i) => {
  const data = typeof value === "string" ? { navn: value } : value;
  return {
    id: i + 1,
    name: data.navn,
    regn: data.regn === true,
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
  items = [...builtInItems, ...loadExtraItems()];
}

rebuildItems();

/* --------------------------- Logik --------------------------- */

const lay           = document.getElementById("lay");
const meta          = document.getElementById("meta");
const weatherEl     = document.getElementById("weather");
const favoritesEl   = document.getElementById("favorites");
const favoritesList = document.getElementById("favoritesList");
const favoriteBtn   = document.getElementById("favorite");
const addItemBtn    = document.getElementById("addItemBtn");
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
const weatherCodes = {
  0:"klart vejr", 1:"let skyet", 2:"delvist skyet", 3:"overskyet",
  45:"taage", 48:"rimtaage",
  51:"let styrtregn", 53:"styrtregn", 55:"kraftig styrtregn",
  61:"let regn", 63:"regn", 65:"kraftig regn",
  71:"let sne", 73:"sne", 75:"kraftig sne",
  80:"byger", 81:"kraftige byger", 82:"voldsomme byger",
  95:"torden"
};

/* Vejrkoder der taeller som regn (inkl. slud, byger og torden). */
const REGN_KODER = new Set([51,53,55,56,57,61,63,65,66,67,80,81,82,95,96,99]);
let regnvejr = false;
let foersteSaet = true;   // regnjakke tvinges kun igennem paa dagens foerste saet

async function fetchWeather(){
  try {
    const res  = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.68&longitude=12.57&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FCopenhagen");
    const data = await res.json();
    return {
      min: data.daily.temperature_2m_min[0],   // dagens hele forlob, ikke bare lige nu
      max: data.daily.temperature_2m_max[0],
      weathercode: data.daily.weathercode[0]
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
  favoritesEl.hidden = favorites.length === 0;
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

const pick = (cat, avoidId) => {
  let pool = items.filter(i => i.category === cat);
  if (cat === "outerwear" && regnvejr && foersteSaet){
    const regnjakker = pool.filter(i => i.regn);
    if (regnjakker.length) pool = regnjakker;   // ingen taggede jakker = alt er stadig i spil
  }
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

document.getElementById("shuffle").addEventListener("click", shuffle);

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
  if (record) loadFavorite(record);
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

  if (btn.dataset.action === "prev"){ bump(btn); cycleSlot(slot); }
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
  const pool = items.filter(i => i.category === cat && i.id !== current[cat].id);
  if (!pool.length) return;
  current[cat] = pool[Math.floor(Math.random() * pool.length)];
  renderSlot(slot, current[cat]);
  renderMeta(current);
  saveHistory(current);
  updateFavoriteButton();
}

async function init(){
  const w = await fetchWeather();
  if (w){
    temp = w.max;                // hoejeste forventede temperatur i dag
    regnvejr = REGN_KODER.has(w.weathercode);
    weatherEl.textContent = `${Math.round(w.min)}–${Math.round(w.max)}° · ${weatherCodes[w.weathercode] || "ukendt vejr"}`;
  }
  renderFavorites();
  shuffle();
}

init();
