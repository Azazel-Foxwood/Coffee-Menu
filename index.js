const coffeeMenu = require("./coffee_data.js");

// Print an array of all the drinks on the menu

const printName = (drinks) => {
    return drinks.name;
}
console.table(coffeeMenu.map(printName));

// Print an array of drinks that cost 5 and under.

const underFive = (drinks) => {
    return drinks.price <= 5;
};
const drinksUnderFive = coffeeMenu.filter(underFive);
console.table(drinksUnderFive);

// Print an array of drinks that are priced at an even number.

const evenDrinks = (drinks) => {
    return drinks.price % 2 === 0;
};
const drinksEven = coffeeMenu.filter(evenDrinks);
console.table(drinksEven);

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
const yourTotal = ("Your grand total for ordering every drink is $" + totalCost )
console.log(yourTotal);

// Print an array with all the drinks that are seasonal.

const isSeasonal = (drinks) => {
    return drinks.seasonal === true;
};
const seasonal = coffeeMenu.filter(isSeasonal);
console.table(seasonal);

//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
// use the array from previous prompt

const beans = (drinks) => {
    return drinks.name + " with imported beans";
};
const importBeans = seasonal.map(beans);
console.table(importBeans);