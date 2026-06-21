// If instruction

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (Number(year) === 2015) {
	alert("You're right!");
}

// Boolean conversion

let age = prompt("Provide your age: ");
let isAuthorized = Number(age) >= 18;

if (isAuthorized) {
	alert("You're authorized to visit this website!")
}

let falsyValues = 0 && "" && null && undefined && NaN && false;

if (!falsyValues) {
	console.log("Falsy values!");
}