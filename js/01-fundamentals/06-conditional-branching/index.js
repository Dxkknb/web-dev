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

// Else and Else If clause

year = Number(year)

if (Number.isNaN(year)) {
	alert("Wrong year provided!");
} else if (year < 2015) {
	alert("Too early...");
} else if (year > 2015) {
	alert("Too late.");
} else {
	alert("Exactly!");
}

// Ternary operator '?'

let userAge = prompt("How old are you?", '');
let accessAllowed = Number(userAge) >= 18;
let message = accessAllowed ? "Welcome to the profile page!": "Access denied!";

alert(message);