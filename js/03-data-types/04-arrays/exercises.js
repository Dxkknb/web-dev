// TODO: Is array copied ?

let fruits = ["Apples", "Pear", "Orange"];

// Push a new value in to the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log(fruits.length); // Should be 4

// TODO: Array operations

const styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll"); // Append to the end
styles[Math.floor(styles.length/2)] = "Classics";
console.log(styles.shift());
styles.unshift(...["Rap", "Reggae"]);