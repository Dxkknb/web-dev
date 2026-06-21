// Alert

let name = "John Doe";
alert(`Hello, ${name}!`);

// Prompt

let age = prompt("Enter your age:", 0);


if (Number.isNaN(parseInt(age))) {
	alert("Provide a correct age.");
} else if (age === null) {
	alert("Provide your age please.");
} else {
	age = parseInt(age);

	if (age < 0) {
		alert("Your age must be a positive integer.");
	} else {
		alert(`You're ${age} years old.`);
	}
}

// Confirm

if (!(Number.isNaN(parseInt(age)) || age === null)) {
	let confirmation = confirm(`Have you really ${age} years old?: `);

	if (confirmation) {
		alert(`Your age is ${age}.`);
	} else {
		alert(`You confirm that you are not ${age} years old.`);
	}
}
