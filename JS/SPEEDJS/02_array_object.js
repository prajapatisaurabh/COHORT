let chaiTypes = ["Masala Chai", "Ginger Tea", "Green Tea", "Lemon Tea"];

// console.log(chaiTypes[2]);

// console.log(`Lenght Of Chai: ${chaiTypes.length}`);

chaiTypes.push("Hebar Tea");

const data = chaiTypes.pop();
// console.log(data);

let index = chaiTypes.indexOf("Green Tea");
// console.log(index);

if (index === -11) {
  chaiTypes.splice(index, 1);
}

chaiTypes.forEach((chai, index) => {
  //   console.log(`${index + 1} chiaType: ${chai}`);
});

let moreChaiTypes = ["Oolang Tea", "White Tea"];

let chaiTypes1 = chaiTypes.concat(moreChaiTypes);

let allChaiTypes = [...chaiTypes1, "moreChaiTypes"];

let chaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Creat Milk",
    sugar: "Brown Sugar",
    spices: ["Daalchini", "Ginger"],
  },
  instruction: "Boil Water, Add tea leaves, milk, sugar and speices",
};

let updatedChaiRecepie = {
  ...chaiRecipe,
  instruction:
    "Boil Water, Add tea leaves, milk, sugar and speices With love of me",
};

// console.log(updatedChaiRecepie);

let { name, instruction } = chaiRecipe;
let [a, nn] = chaiTypes;

console.log(instruction);
