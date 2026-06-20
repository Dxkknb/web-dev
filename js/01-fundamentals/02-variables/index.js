// Declare a variable

let message = "I love JavaScript";
console.log(message);

let user = "John Doe";
let age = 25;
let job = 'Data Engineer';

console.log(`I'm ${user}. I've ${age} years old and i'm ${job}.`);

job = "JavaScript Developer";

console.log(`I've got a new job. I'm now a ${job}.`);

// Constants

const myBirthDate = "03/08/2000";

console.log(`I was born on ${myBirthDate}.`)

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let currentColor = COLOR_ORANGE;

console.log(`Current Color: ${currentColor}.`);

// Exercise 1: Working with variables

let admin, name;

name = "John";
admin = name;

alert(`Admin: ${admin}`);

// Exercise 2: Assign the correct name
let ourPlanet = "Earth";
let currentUserName = "John Doe";

console.log(ourPlanet, currentUserName);

// Exercise 3: Constant in uppercase

const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
const DAYS_PER_YEAR = 365;
const DAYS_PER_MONTH = 30;

/**
 * Converts a number of days into a formatted age (years, months, days).
 * @param nbDays
 * @returns {string}
 */
function daysToAge(nbDays) {
	const nbYears = Math.floor(nbDays / DAYS_PER_YEAR);
	const remainingAfterYears = nbDays % nbYears;

	const nbMonths = Math.floor(remainingAfterYears / DAYS_PER_MONTH);
	const remainingDays =remainingAfterYears % DAYS_PER_MONTH;

	return `${nbYears} years, ${nbMonths} months and ${remainingDays} days.`;
}

/**
 * Calculates age based on a date of birth.
 *@param {string} birthDate - format "JJ.MM.AAAA"
 * @param {string} separator
 * @returns {string}
 *
 * Example: birthDate = '18.04.1982'
 */
function calculateAge(birthDate, separator = ".") {
	const [day, month, year] = birthDate
		.split(separator)
		.map(Number);

	const oldDate = new Date(year, month - 1, day) // Month indexed at 0
	const currentDate = new Date()

	const nbDays = Math.floor((currentDate - oldDate) / MILLISECONDS_PER_DAY);

	return daysToAge(nbDays)
}

const birthday = "18.04.1982";
console.log(calculateAge(birthday));