/*

⚡ FF SENSI
GÉNÉRATEUR DE SENSIBILITÉ
Architecture mondiale des téléphones

Structure :

MARQUE
└── SÉRIE
└── MODÈLES

Le fichier est conçu pour recevoir une très grande
base de modèles sans changer le fonctionnement du site.

*/

/* ======================================================

1. BASE DES TÉLÉPHONES
   ====================================================== */

const phoneDatabase = {

Samsung: {
"Galaxy A": [
"A01", "A02", "A03", "A04", "A05",
"A10", "A11", "A12", "A13", "A14",
"A15", "A16", "A20", "A21", "A22",
"A23", "A24", "A25", "A30", "A31",
"A32", "A33", "A34", "A35", "A40",
"A41", "A42", "A50", "A51", "A52",
"A53", "A54", "A55", "A70", "A71",
"A72", "A73"
],

"Galaxy S": [
  "S", "S2", "S3", "S4", "S5", "S6",
  "S7", "S8", "S9", "S10", "S20",
  "S21", "S22", "S23", "S24", "S25",
  "S26"
],

"Galaxy Note": [
  "Note", "Note 2", "Note 3", "Note 4",
  "Note 5", "Note 7", "Note 8", "Note 9",
  "Note 10", "Note 20"
],

"Galaxy M": [
  "M01", "M02", "M10", "M11", "M12",
  "M13", "M20", "M21", "M22", "M23",
  "M30", "M31", "M32", "M33", "M34",
  "M40", "M51", "M52", "M53", "M54"
],

"Galaxy Z": [
  "Z Fold", "Z Fold2", "Z Fold3", "Z Fold4",
  "Z Fold5", "Z Fold6", "Z Fold7",
  "Z Flip", "Z Flip3", "Z Flip4",
  "Z Flip5", "Z Flip6", "Z Flip7"
]

},

Apple: {
"iPhone": [
"iPhone", "iPhone 3G", "iPhone 3GS",
"iPhone 4", "iPhone 4S", "iPhone 5",
"iPhone 5C", "iPhone 5S", "iPhone 6",
"iPhone 6 Plus", "iPhone 6S",
"iPhone 6S Plus", "iPhone 7",
"iPhone 7 Plus", "iPhone 8",
"iPhone 8 Plus", "iPhone X",
"iPhone XR", "iPhone XS", "iPhone XS Max",
"iPhone 11", "iPhone 11 Pro",
"iPhone 11 Pro Max", "iPhone 12",
"iPhone 12 mini", "iPhone 12 Pro",
"iPhone 12 Pro Max", "iPhone 13",
"iPhone 13 mini", "iPhone 13 Pro",
"iPhone 13 Pro Max", "iPhone 14",
"iPhone 14 Plus", "iPhone 14 Pro",
"iPhone 14 Pro Max", "iPhone 15",
"iPhone 15 Plus", "iPhone 15 Pro",
"iPhone 15 Pro Max", "iPhone 16",
"iPhone 16 Plus", "iPhone 16 Pro",
"iPhone 16 Pro Max", "iPhone 17",
"iPhone 17 Pro", "iPhone 17 Pro Max"
],

"iPhone SE": [
  "iPhone SE",
  "iPhone SE 2",
  "iPhone SE 3"
]

},

Xiaomi: {
"Mi": [
"Mi 8", "Mi 9", "Mi 10", "Mi 11",
"Mi 12", "Mi 13", "Mi 14", "Mi 15"
],

"Redmi": [
  "Redmi 7", "Redmi 8", "Redmi 9",
  "Redmi 10", "Redmi 12", "Redmi 13",
  "Redmi 14"
],

"Redmi Note": [
  "Redmi Note 7", "Redmi Note 8",
  "Redmi Note 9", "Redmi Note 10",
  "Redmi Note 11", "Redmi Note 12",
  "Redmi Note 13", "Redmi Note 14"
]

},

POCO: {
"POCO": [
"POCO X3", "POCO X3 Pro", "POCO X4",
"POCO X4 Pro", "POCO X5", "POCO X5 Pro",
"POCO X6", "POCO X6 Pro",
"POCO X7", "POCO X7 Pro"
],

"POCO M": [
  "POCO M2", "POCO M3", "POCO M4",
  "POCO M5", "POCO M6", "POCO M7"
],

"POCO F": [
  "POCO F1", "POCO F2 Pro", "POCO F3",
  "POCO F4", "POCO F5", "POCO F6",
  "POCO F7"
]

},

TECNO: {
"Spark": [
"Spark 6", "Spark 7", "Spark 8",
"Spark 9", "Spark 10", "Spark 20",
"Spark 30", "Spark 40"
],

"Camon": [
  "Camon 12", "Camon 15", "Camon 16",
  "Camon 17", "Camon 18", "Camon 19",
  "Camon 20", "Camon 30", "Camon 40"
],

"Pova": [
  "Pova", "Pova 2", "Pova 3",
  "Pova 4", "Pova 5", "Pova 6",
  "Pova 7"
]

},

Infinix: {
"HOT": [
"HOT 9", "HOT 10", "HOT 11",
"HOT 12", "HOT 20", "HOT 30",
"HOT 40", "HOT 50", "HOT 60"
],

"Note": [
  "Note 7", "Note 8", "Note 10",
  "Note 11", "Note 12", "Note 30",
  "Note 40", "Note 50"
],

"GT": [
  "GT 10 Pro", "GT 20 Pro",
  "GT 30 Pro"
]

},

OPPO: {
"A": [
"A15", "A16", "A17", "A18", "A31",
"A52", "A53", "A54", "A57",
"A58", "A78", "A79"
],

"Reno": [
  "Reno 4", "Reno 5", "Reno 6",
  "Reno 7", "Reno 8", "Reno 9",
  "Reno 10", "Reno 11", "Reno 12",
  "Reno 13", "Reno 14"
],

"Find": [
  "Find X2", "Find X3", "Find X5",
  "Find X6", "Find X7", "Find X8"
]

},

OnePlus: {
"Number": [
"OnePlus 7", "OnePlus 8", "OnePlus 9",
"OnePlus 10", "OnePlus 11", "OnePlus 12",
"OnePlus 13", "OnePlus 14"
],

"Nord": [
  "Nord", "Nord 2", "Nord 3",
  "Nord 4", "Nord 5"
]

},

vivo: {
"V": [
"V20", "V21", "V23", "V25",
"V27", "V29", "V30", "V40",
"V50", "V60"
],

"Y": [
  "Y12", "Y15", "Y16", "Y17",
  "Y20", "Y21", "Y22", "Y27",
  "Y28", "Y36"
],

"X": [
  "X50", "X60", "X70", "X80",
  "X90", "X100", "X200"
]

},

realme: {
"C": [
"C11", "C12", "C15", "C20",
"C21", "C25", "C30", "C31",
"C33", "C35", "C51", "C53",
"C55", "C61", "C63", "C65"
],

"GT": [
  "GT", "GT 2", "GT 3", "GT 5",
  "GT 6", "GT 7"
],

"Number": [
  "Realme 5", "Realme 6", "Realme 7",
  "Realme 8", "Realme 9", "Realme 10",
  "Realme 11", "Realme 12", "Realme 13",
  "Realme 14"
]

},

Motorola: {
"Moto G": [
"Moto G", "Moto G2", "Moto G3",
"Moto G4", "Moto G5", "Moto G6",
"Moto G7", "Moto G8", "Moto G9",
"Moto G10", "Moto G20", "Moto G30",
"Moto G40", "Moto G50", "Moto G60",
"Moto G70", "Moto G80", "Moto G100"
],

"Edge": [
  "Edge", "Edge 20", "Edge 30",
  "Edge 40", "Edge 50", "Edge 60"
]

},

Google: {
"Pixel": [
"Pixel", "Pixel 2", "Pixel 3",
"Pixel 4", "Pixel 5", "Pixel 6",
"Pixel 7", "Pixel 8", "Pixel 9",
"Pixel 10"
]
},

Huawei: {
"P": [
"P20", "P30", "P40", "P50",
"P60", "P70"
],

"Mate": [
  "Mate 10", "Mate 20", "Mate 30",
  "Mate 40", "Mate 50", "Mate 60",
  "Mate 70"
],

"Nova": [
  "Nova 5", "Nova 6", "Nova 7",
  "Nova 8", "Nova 9", "Nova 10",
  "Nova 11", "Nova 12", "Nova 13",
  "Nova 14"
]

},

HONOR: {
"X": [
"X7", "X8", "X9", "X10",
"X20", "X30", "X40", "X50",
"X60"
],

"Magic": [
  "Magic 3", "Magic 4", "Magic 5",
  "Magic 6", "Magic 7"
]

},

ASUS: {
"ROG Phone": [
"ROG Phone", "ROG Phone 2",
"ROG Phone 3", "ROG Phone 5",
"ROG Phone 6", "ROG Phone 7",
"ROG Phone 8", "ROG Phone 9"
],

"Zenfone": [
  "Zenfone 6", "Zenfone 7",
  "Zenfone 8", "Zenfone 9",
  "Zenfone 10", "Zenfone 11"
]

},

Sony: {
"Xperia": [
"Xperia 1", "Xperia 1 II",
"Xperia 1 III", "Xperia 1 IV",
"Xperia 1 V", "Xperia 1 VI",
"Xperia 1 VII",

  "Xperia 5", "Xperia 5 II",
  "Xperia 5 III", "Xperia 5 IV",
  "Xperia 5 V"
]

},

Nokia: {
"Nokia": [
"Nokia 2", "Nokia 3", "Nokia 4",
"Nokia 5", "Nokia 6", "Nokia 7",
"Nokia 8", "Nokia 9",
"Nokia G10", "Nokia G20",
"Nokia G21", "Nokia G22",
"Nokia G42", "Nokia G60"
]
},

ZTE: {
"Axon": [
"Axon 10", "Axon 20", "Axon 30",
"Axon 40", "Axon 50", "Axon 60"
],

"nubia": [
  "nubia Red Magic 5",
  "nubia Red Magic 6",
  "nubia Red Magic 7",
  "nubia Red Magic 8",
  "nubia Red Magic 9",
  "nubia Red Magic 10"
]

},

TCL: {
"T": [
"T10", "T20", "T30", "T40",
"T50", "T60"
]
}

};

/* ======================================================
2. OUTILS
====================================================== */

function normalize(text) {
return String(text)
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/\s+/g, " ")
.trim();
}

/* ======================================================
3. CONSTRUCTION DE LA LISTE DE RECHERCHE
====================================================== */

const allPhones = [];

Object.entries(phoneDatabase).forEach(([brand, series]) => {

Object.entries(series).forEach(([serie, models]) => {

models.forEach(model => {

  allPhones.push({
    brand,
    serie,
    model,
    fullName: `${brand} ${model}`
  });

});

});

});

/* ======================================================
4. ÉLÉMENTS HTML
====================================================== */

const phoneInput = document.getElementById("phone");
const generateBtn = document.getElementById("generateBtn");
const regenerateBtn = document.getElementById("regenerateBtn");

const suggestions = document.getElementById("phoneSuggestions");
const result = document.getElementById("result");

const phoneName = document.getElementById("phoneName");

const general = document.getElementById("general");
const redDot = document.getElementById("redDot");
const scope2x = document.getElementById("scope2x");
const scope4x = document.getElementById("scope4x");
const awm = document.getElementById("awm");
const freeLook = document.getElementById("freeLook");

/* ======================================================
5. RECHERCHE
====================================================== */

function searchPhones(value) {

const query = normalize(value);

if (!query) {
return [];
}

return allPhones
.filter(phone =>
normalize(phone.fullName).includes(query)
)
.slice(0, 8);
}

/* ======================================================
6. SUGGESTIONS
====================================================== */

function showSuggestions() {

const matches = searchPhones(phoneInput.value);

suggestions.innerHTML = "";

matches.forEach(phone => {

const item = document.createElement("div");

item.className = "suggestion";

item.innerHTML = `
  📱 <strong>${phone.fullName}</strong>
  <small> — ${phone.serie}</small>
`;

item.addEventListener("click", () => {

  phoneInput.value = phone.fullName;

  suggestions.innerHTML = "";

  generateForPhone(phone);

});

suggestions.appendChild(item);

});

}

/* ======================================================
7. CALCUL DE BASE
====================================================== */

function createSensitivity(phone) {

const text = normalize(
"${phone.brand} ${phone.serie} ${phone.model}"
);

let seed = 0;

for (let i = 0; i < text.length; i++) {
seed += text.charCodeAt(i) * (i + 1);
}

const generalValue = 175 + (seed % 26);

return {

general: generalValue,

redDot: Math.max(
  100,
  generalValue - 5
),

scope2x: Math.max(
  100,
  generalValue - 16
),

scope4x: Math.max(
  100,
  generalValue - 30
),

awm: 65 + (seed % 21),

freeLook: Math.min(
  200,
  generalValue - 2
)

};

}

/* ======================================================
8. AFFICHAGE
====================================================== */

function displaySensitivity(phone, sensitivity) {

phoneName.textContent =
"${phone.brand} ${phone.model}";

general.textContent =
sensitivity.general;

redDot.textContent =
sensitivity.redDot;

scope2x.textContent =
sensitivity.scope2x;

scope4x.textContent =
sensitivity.scope4x;

awm.textContent =
sensitivity.awm;

freeLook.textContent =
sensitivity.freeLook;

result.classList.remove("hidden");

result.scrollIntoView({
behavior: "smooth",
block: "start"
});

}

/* ======================================================
9. GÉNÉRATION
====================================================== */

function generateForPhone(phone) {

const sensitivity =
createSensitivity(phone);

displaySensitivity(
phone,
sensitivity
);

}

/* ======================================================
10. RECHERCHE EXACTE
====================================================== */

function findExactPhone(value) {

const query = normalize(value);

return allPhones.find(phone =>
normalize(phone.fullName) === query
);

}

/* ======================================================
11. BOUTON GÉNÉRER
====================================================== */

function generate() {

const value =
phoneInput.value.trim();

if (!value) {

alert(
  "📱 Entre le nom de ton téléphone."
);

phoneInput.focus();

return;

}

const phone =
findExactPhone(value);

if (phone) {

generateForPhone(phone);

return;

}

const matches =
searchPhones(value);

if (matches.length === 1) {

phoneInput.value =
  matches[0].fullName;

generateForPhone(matches[0]);

return;

}

if (matches.length > 1) {

showSuggestions();

alert(
  "🔎 Plusieurs modèles correspondent. Choisis ton téléphone dans la liste."
);

return;

}

alert(
"❌ Modèle non trouvé dans notre base.\n\n" +
"Ajoute ce modèle à la base avant de générer sa fiche."
);

}

/* ======================================================
12. NOUVELLE CONFIGURATION
====================================================== */

regenerateBtn.addEventListener(
"click",
() => {

const phone =
  findExactPhone(
    phoneInput.value
  );

if (!phone) {
  return;
}

const sensitivity =
  createSensitivity(phone);

const variation =
  Math.floor(
    Math.random() * 9
  ) - 4;


const newSensitivity = {

  general:
    Math.max(
      100,
      Math.min(
        200,
        sensitivity.general + variation
      )
    ),

  redDot:
    Math.max(
      100,
      Math.min(
        200,
        sensitivity.redDot + variation
      )
    ),

  scope2x:
    Math.max(
      100,
      Math.min(
        200,
        sensitivity.scope2x + variation
      )
    ),

  scope4x:
    Math.max(
      100,
      Math.min(
        200,
        sensitivity.scope4x + variation
      )
    ),

  awm:
    Math.max(
      50,
      Math.min(
        100,
        sensitivity.awm + variation
      )
    ),

  freeLook:
    Math.max(
      100,
      Math.min(
        200,
        sensitivity.freeLook + variation
      )
    )

};


displaySensitivity(
  phone,
  newSensitivity
);

}
);

/* ======================================================
13. ÉVÉNEMENT RECHERCHE
====================================================== */

phoneInput.addEventListener(
"input",
showSuggestions
);

phoneInput.addEventListener(
"keydown",
event => {

if (event.key === "Enter") {

  generate();

}

}
);

generateBtn.addEventListener(
"click",
generate
);

/* ======================================================
14. CONSEILS
====================================================== */

const tips = {

"Headshot":
"Les headshots demandent surtout de travailler la précision, le placement du viseur et le contrôle du mouvement.",

"Drag Shot":
"Le drag shot consiste à contrôler le déplacement du viseur pendant le tir. Entraîne-toi progressivement au Training.",

"Gloo Wall":
"Travaille le placement rapide du Gloo Wall et entraîne-toi à protéger ton personnage avant de reprendre le combat.",

"HUD":
"Le HUD doit être adapté à tes doigts et à ton confort. Teste progressivement différentes dispositions.",

"Mouvement":
"Travaille tes déplacements, tes changements de direction et ton positionnement pendant les combats.",

"Entraînement":
"Utilise régulièrement le terrain d'entraînement pour tester ta sensibilité et observer les changements."
};

document
.querySelectorAll(".tip-card button")
.forEach(button => {

button.addEventListener(
  "click",
  () => {

    const title =
      button.parentElement
        .querySelector("h3")
        .textContent;

    const explanation =
      tips[title] ||
      "Conseil bientôt disponible.";

    alert(
      `🧠 ${title}\n\n${explanation}`
    );

  }
);

});

/* ======================================================
15. INFORMATIONS
====================================================== */

console.log(
"⚡ FF SENSI : ${allPhones.length} modèles actuellement chargés."
);