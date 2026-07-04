// TODO: Is array copied ?

let fruits = ["Apples", "Pear", "Orange"];

// Push a new value in to the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log(fruits.length); // Should be 4