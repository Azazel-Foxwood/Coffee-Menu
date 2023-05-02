const coffeeMenu = require("./coffee_data.js");

// Print an array of all the drinks on the menu

const printName = (drinks) => {
    return drinks.name;
}
console.log(coffeeMenu.map(printName));

// Print an array of drinks that cost 5 and under.

const underFive = (drinks) => {
    return drinks.price <= 5;
};
const drinksUnderFive = coffeeMenu.filter(underFive);
console.log(drinksUnderFive);