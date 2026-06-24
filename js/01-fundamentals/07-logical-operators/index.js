// || (OR)

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true) // true
console.log(false || false); // false

let hour = 9;

if (hour <= 10 || hour > 18) {
	console.log("The office is closed.");
} else {
	console.log("the office is opened.");
}

// && (AND)

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

hour = 12;
let minute = 30;

if (hour === 12 && minute === 30) {
	console.log("Time is 12:30");
}

// ! (NOT)

console.log(!true); // false
console.log(!0); // true
console.log(!!"non-empty string"); // ttrue
console.log(!!null); // false