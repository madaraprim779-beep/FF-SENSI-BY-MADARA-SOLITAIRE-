const phones = {
"samsung a20": {
name: "Samsung A20",
general: 190,
redDot: 185,
scope2x: 175,
scope4x: 160,
awm: 75,
freeLook: 180
},

"samsung a13": {
name: "Samsung A13",
general: 188,
redDot: 182,
scope2x: 172,
scope4x: 158,
awm: 72,
freeLook: 180
},

"iphone 11": {
name: "iPhone 11",
general: 185,
redDot: 178,
scope2x: 168,
scope4x: 155,
awm: 70,
freeLook: 175
},

"iphone 13": {
name: "iPhone 13",
general: 190,
redDot: 183,
scope2x: 173,
scope4x: 160,
awm: 75,
freeLook: 180
},

"redmi note 13": {
name: "Redmi Note 13",
general: 192,
redDot: 186,
scope2x: 176,
scope4x: 162,
awm: 78,
freeLook: 185
},

"tecno spark 20": {
name: "TECNO Spark 20",
general: 190,
redDot: 184,
scope2x: 174,
scope4x: 160,
awm: 76,
freeLook: 182
},

"infinix hot 40": {
name: "Infinix HOT 40",
general: 191,
redDot: 185,
scope2x: 175,
scope4x: 161,
awm: 77,
freeLook: 183
},

"oppo reno 11": {
name: "OPPO Reno 11",
general: 187,
redDot: 181,
scope2x: 171,
scope4x: 157,
awm: 73,
freeLook: 178
}
};

const phoneInput = document.getElementById("phone");
const generateBtn = document.getElementById("generateBtn");
const regenerateBtn = document.getElementById("regenerateBtn");

const result = document.getElementById("result");
const phoneName = document.getElementById("phoneName");

const general = document.getElementById("general");
const redDot = document.getElementById("redDot");
const scope2x = document.getElementById("scope2x");
const scope4x = document.getElementById("scope4x");
const awm = document.getElementById("awm");
const freeLook = document.getElementById("freeLook");

const suggestions = document.getElementById("phoneSuggestions");

function normalize(text) {
return text
.toLowerCase()
.trim()
.replace(/\s+/g, " ");
}

function generateSensitivity(phone) {

phoneName.textContent = phone.name;

general.textContent = phone.general;
redDot.textContent = phone.redDot;
scope2x.textContent = phone.scope2x;
scope4x.textContent = phone.scope4x;
awm.textContent = phone.awm;
freeLook.textContent = phone.freeLook;

result.classList.remove("hidden");

result.scrollIntoView({
behavior: "smooth",
block: "start"
});
}

function createGeneratedSensitivity(name) {

/*

* Pour les téléphones qui ne sont pas encore
* dans notre base, on crée une configuration
* de départ.
* 
* La base pourra ensuite contenir beaucoup plus
* de modèles.
  */

const seed = [...name].reduce(
(total, character) => total + character.charCodeAt(0),
0
);

const generalValue = 175 + (seed % 21);

return {
name: name,
general: generalValue,
redDot: Math.max(160, generalValue - 5),
scope2x: Math.max(145, generalValue - 15),
scope4x: Math.max(130, generalValue - 28),
awm: 65 + (seed % 20),
freeLook: Math.min(200, generalValue - 2)
};
}

function generate() {

const value = normalize(phoneInput.value);

if (!value) {
alert("📱 Entre le modèle de ton téléphone.");
phoneInput.focus();
return;
}

if (phones[value]) {
generateSensitivity(phones[value]);
return;
}

const generated = createGeneratedSensitivity(phoneInput.value.trim());

generateSensitivity(generated);
}

function showSuggestions() {

const value = normalize(phoneInput.value);

suggestions.innerHTML = "";

if (!value) {
return;
}

const matches = Object.values(phones)
.filter(phone =>
normalize(phone.name).includes(value)
)
.slice(0, 5);

matches.forEach(phone => {

const item = document.createElement("div");

item.className = "suggestion";
item.textContent = `📱 ${phone.name}`;

item.addEventListener("click", () => {

  phoneInput.value = phone.name;
  suggestions.innerHTML = "";

  generateSensitivity(phone);

});

suggestions.appendChild(item);

});
}

generateBtn.addEventListener("click", generate);

regenerateBtn.addEventListener("click", () => {

const value = normalize(phoneInput.value);

if (!value) {
return;
}

const base = phones[value] || createGeneratedSensitivity(phoneInput.value);

const variation = Math.floor(Math.random() * 9) - 4;

const newConfiguration = {
name: base.name,

general: Math.max(
  100,
  Math.min(200, base.general + variation)
),

redDot: Math.max(
  100,
  Math.min(200, base.redDot + variation)
),

scope2x: Math.max(
  100,
  Math.min(200, base.scope2x + variation)
),

scope4x: Math.max(
  100,
  Math.min(200, base.scope4x + variation)
),

awm: Math.max(
  50,
  Math.min(100, base.awm + variation)
),

freeLook: Math.max(
  100,
  Math.min(200, base.freeLook + variation)
)

};

generateSensitivity(newConfiguration);
});

phoneInput.addEventListener("input", showSuggestions);

phoneInput.addEventListener("keydown", event => {

if (event.key === "Enter") {
generate();
}

});

/*

* CONSEILS
  */

const tipButtons = document.querySelectorAll(".tip-card button");

tipButtons.forEach(button => {

button.addEventListener("click", () => {

const title =
  button.parentElement.querySelector("h3").textContent;

alert(
  `🧠 ${title}\n\n` +
  "Cette section sera développée avec une explication complète, " +
  "des étapes et des exercices pratiques."
);

});

});

console.log("⚡ FF SENSI est prêt !");