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

// TODO: Changing the case

let string = "Interface";

/**
 * Converts string in capitalize case
 * @param {string} str - the string to convert
 * @return {string} Capitalized string
 */
const capitalize = (str) => {
	return str.at(0).toUpperCase() + str.toLowerCase().slice(1);
}

console.log(string.toUpperCase()); // INTERFACE
console.log(string.toLowerCase()); // interface
console.log(capitalize(string)); // Interface

// TODO: Searching for a substring

// str.indexOf

let paragraph = "Widget with id";

console.log(paragraph.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
console.log(paragraph.indexOf('widget')); // -1, not found, the search is case-sensitive
console.log(paragraph.indexOf('id')); // 1, 'id' is found at the positiob 1 (...idget with id)

// Find all occurences positions

let newStr = "As sly as a fox, as strong as an ox";
let target = 'as';

function findAllOccurrences(str, target) {
	let pos = 0;
	while(true) {
		let foundPos = str.toLowerCase().indexOf(target, pos);
		if (foundPos === -1) break;

		console.log(`Found at ${foundPos}`);
		pos = foundPos + 1;
	}
}

findAllOccurrences(newStr, target);

// includes, startsWith, endsWith

console.log("Widget with id".includes("Widget")); // true
console.log("Hello".includes("Bye")); // false

console.log("Widget".includes("id")); // true
console.log("Widget".includes("id", 3)); // false

console.log("Widget".startsWith("Wid")); // true
console.log("Widget".endsWith("get")); // true

// TODO: Getting a substring

let str2 = "stringify";

console.log(str2.slice(0, 5)); // 'strin'
console.log(str2.slice(0, 1)); // 's'
console.log(str2.slice(2)); // 'ringify'

console.log(str2.substring(2, 6)); // ring
console.log(str2.substring(6, 2)); // ring