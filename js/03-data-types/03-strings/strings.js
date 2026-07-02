// TODO: Create a string

let greet = 'Hello';
let name = "John Doe";
let greeting = `${greet} ${name}`;

console.log(greeting);

// TODO: Special characters

let guestList = "Guests:\n *John\n * Pete\n * Mary";

console.log(guestList);

const progLanguages = ["Python", "Java", "JavaScript", "Kotlin"];

console.log("Programming languages:");
for (const progLanguage of progLanguages) {
	console.log(`\v\t- ${progLanguage}`);
}

// TODO: Accessing characters

const str = "Hello John";

// The first character

console.log(str[0]); // H
console.log(str.at(0)); // H

// The last character

console.log(str[str.length - 1]); // n
console.log(str.at(-1)); // n

// All characters

for (let i = -1; i >= -str.length; i--) {
	console.log(`At index ${i}: ${str.at(i)}`);
}

// Iterate over the string

for (const char of str) {
	console.log(char);
}