const teas = {
  name: "Leamon Tea",
  type: "Green Tee",
  caffin: "low",
};

console.log(teas.name);
console.log(teas["name"]);

teas["origin"] = "china";

teas.caffin = "Medoum";

delete teas.type;

console.log("type" in teas);

for (const key in teas) {
  console.log(key, teas[key]);
}

teas.moretea = {
  name: "new tea",
};

const tea = { ...teas };

tea.moretea.name = "tello";
console.log(tea);

console.log(teas);

const newObj = new Object(tea);
tea.moretea.name = "tello-1";
console.log(newObj);
