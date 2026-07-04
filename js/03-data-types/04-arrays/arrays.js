// TODO: Array declaration

let arr = [];
let points = new Array([1.6, 2], [3.8, 7]);

console.log("Arr:", arr);
console.log("Points:", points);

// TODO: Accessing to array items
/**
 * Array of fruits
 * @type {string[]}
 */
const fruits = ["Apple", "Orange", "Plum"];

console.log("First item:", fruits[0]); // Apple
console.log("Second item:", fruits[1]); // Orange
console.log("Last item:", fruits[fruits.length - 1]); // Plum

// TODO: Replace array items

fruits[2] = "Pear"; // replace the third item
fruits[3] = "Lemon"; // add an item at index 3

if (fruits.length) {
	console.log("Fruits:", fruits); // Fruits: [ "Apple", "Orange", "Pear", "Lemon" ]
}

