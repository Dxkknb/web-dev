// Alert

let name = "John Doe";
alert(`Hello, ${name}!`);

// Prompt

let age = prompt("Enter your age:", 0);


if (!Number.isNaN(age)) {
	alert("Provide a correct age.");
}
else if (age === null) {
	alert("Provide your age please.");
} else if (age.trim() === '') {
	alert("Provide a valid age, not an empty value.")
} else {
	age = parseInt(age);

	if (age < 0) {
		alert("Your age must be a positive integer.");
	} else {
		alert(`You're ${age} years old.`);
	}
}