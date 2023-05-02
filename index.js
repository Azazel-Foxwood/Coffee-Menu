const coffeeMenu = require("./coffee_data.js");

// Print an array of all the drinks on the menu

const printName = (drinks) => {
    return drinks.name;
}
console.log(coffeeMenu.map(printName));
