function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("thin", "white sauce", ["mozzarella", "ricotta", "parmesean", "romano", "asiago"], ["olives", "garlic", "spinach"]);
console.log(p3);

var p4 = pizzaOven("deep dish", "marinara", ["mozzarella"], ["italian sausage", "pepperoni", "canadian bacon", "bacon"]);
console.log(p4);

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin"
]

var sauceTypes = [
    "traditional",
    "marinara",
    "white sauce"
]

var cheeses = [
    "mozzarella",
    "feta",
    "ricotta",
    "provalone",
    "parmesean"
]

var toppings = [
    "pepperoni",
    "italian sausage",
    "bbq chicken",
    "buffalo chicken",
    "chicken",
    "canadian bacon",
    "ham",
    "bacon",
    "mushrooms",
    "olives",
    "bell peppers",
    "onions"
]

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i = 0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
}