// TODO: Add / remove items

const fruits = ["Apple", "Orange", "Cherry"];

// Add a fruit
fruits.push("Pineapple");
console.log("After adding a fruit:", fruits);

// remove a fruit
fruits.pop();
console.log("After removing a fruit:", fruits);

// remove a fruit with array.splice
fruits.splice(1, 1);
console.log("After removing another fruit:", fruits);