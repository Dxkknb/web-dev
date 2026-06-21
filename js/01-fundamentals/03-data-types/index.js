// Number : float and integer

let numberOfProductsInStock = 10;
let productPrice = 1.75;

let totalProductsPrice = numberOfProductsInStock * productPrice;

console.log(`Total products price: $${totalProductsPrice}`);

console.log("Infinity:", Infinity);
console.log("-Infinity:", -Infinity);
console.log("NaN:", NaN);

// String

let name = "John Doe";
let greeting = `Hello, ${name}!`;

console.log(greeting);

// Boolean: true or false

let isOnline = true;
let userName = "John Doe";
let userAge = 19;

if (isOnline && userAge >= 18) {
	console.log(`${userName} is allowed to access to the website.`);
} else {
	console.log("You're not allowed to access to the website.");
}

let productsInStockQuantity = 8;
let orderedProductsQuantity = 10;
let canBeDelivered = productsInStockQuantity >= orderedProductsQuantity;

if (canBeDelivered) {
	console.log(`We will be delivering the ${orderedProductsQuantity} items of product you ordered shortly.`);
} else {
	console.log(`There are ${productsInStockQuantity} items of product left in stock.`)
}
