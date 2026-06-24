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
