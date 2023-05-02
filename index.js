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

// Print an array of drinks that are priced at an even number.

const evenDrinks = (drinks) => {
    return drinks.price % 2 === 0;
};
const drinksEven = coffeeMenu.filter(evenDrinks);
console.log(drinksEven);

// Print the total if you were to order one of every drink.
// have to make an array of all the prices first
const findAllPrices = (drinks) => {
    return drinks.price;
}
const allPrices = coffeeMenu.map(findAllPrices);
// console.log(allPrices);

const sumCost = (price, currentTotal) => {
    return price + currentTotal;
};
const totalCost = allPrices.reduce(sumCost);
console.log(totalCost);