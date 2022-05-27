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
