const food = require("./food.json");

function displayResults(title, data) {
    console.log(`****${title}****`);
    console.log(data);
}

const listAll = food;
displayResults(1, listAll);

const vegetables = food.filter((f) => f.category === "Vegetable");
displayResults(2, vegetables);

const fruits = food.filter((f) => f.category === "Fruit");
displayResults(3, fruits);

const proteins = food.filter((f) => f.category === "Protein");
displayResults(4, proteins);

const nuts = food.filter((f) => f.category === "Nuts");
displayResults(5, nuts);

const grains = food.filter((f) => f.category === "Grain");
displayResults(6, grains);

const dairy = food.filter((f) => f.category === "Dairy");
displayResults(7, dairy);

const above100 = food.filter((f) => f.calorie > 100);
displayResults(8, above100);

const below100 = food.filter((f) => f.calorie < 100);
displayResults(9, below100);

const sortedByCalorie = food.slice().sort((a, b) => b.calorie - a.calorie);
displayResults(10, sortedByCalorie);

const sortedByCab = food.slice().sort((a, b) => a.cab - b.cab);
displayResults(11, sortedByCab);
