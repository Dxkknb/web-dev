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

/*
Exercises
 */

// Ex 1: What's the result of OR?

alert(null || 2 || undefined); // 2

// Ex 2: What's the result of OR'ed alerts?

alert(alert(1) || 2 || alert(3)); // 1 then 2

// Ex 3: What is the result of AND?

alert(1 && null && 2); // null

// Ex 4: What is the result of AND'ed alerts?

alert(alert(1) && alert(2)); // 1 then undefined

// Ex 5: The result of OR AND OR

alert( null || 2 && 3 || 4 ); // 3

// Ex 6: Check the range between
let age = 13;

if (age >= 14 && age <= 90) {
	console.log("You're alive");
}

// Ex 7: Check the range outside

if (age < 14 || age > 90) {
	console.log("You're young or dead.");
}

if (!(age >= 14 && age <= 90)) {
	console.log("V2: You're young or dead.");
}

// Ex 8: A question about 'if'
if (-1 || 0) alert( 'first' ); // Yes
if (-1 && 0) alert( 'second' ); // No
if (null || -1 && 1) alert( 'third' ); // Yes

// Ex 9: Check the login

const username = prompt("Username: ");

if (username === null) {
	alert("Provide a username.");
}

if(username === "admin") {
	const password = prompt("Provide the password");

	if (password === null) {
		alert("Canceled!");
	}

	if (password.toLowerCase() === "themaster") {
		alert("Welcome.");
	}else {
		alert("Wrong password.")
	}

} else {
	alert("I don't know you.");
}