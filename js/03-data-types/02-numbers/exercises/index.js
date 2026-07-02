/*
Tasks about Numbers
 */

// TODO: Sum numbers from the visitor

/**
 * Checks if a value is numeric
 * @param {*} n - The value to check
 * @return {boolean} - True if n is a number and not NaN, false otherwise
 */
const isNumeric = (n) => !isNaN(n) && typeof n === "number";

/**
 * Returns the sum of two numbers if entries are numeric or return NaN
 * @return {number|NaN}
 */
function sumNumbersFromVisitor() {
	let number1 = prompt("Provide number 1:");
	let number2 = prompt("Provide number 2:");

	if(
		number1 === "" ||
		number1 === null ||
		number2 === "" ||
		number2 === null
	) {
		return NaN
	}

	if (isNumeric(Number(number1)) && isNumeric(Number(number2))) {
		return Number(number1) + Number(number2);
	}

	return NaN;
}

console.log(sumNumbersFromVisitor());

// TODO: A random number from min to max

/**
 * Generates a random floating-point number
 * between min (inclusive) and max (exclusive).
 * @param {number} min - The lower bound of the range
 * @param {number} max - The upper bound of the range
 * @return {NaN | number} A random number between min and max, or NaN if either argument is not numeric.
 */
function random(min, max) {
	if (!isNumeric(Number(min)) || !isNumeric(Number(max))) {
		return NaN;
	}

	return min + (max - min) * Math.random();
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

// TODO: A random integer from min to max

/**
 * Generates a random integer number
 * between min (inclusive) and max (inclusive).
 * @param {number} min - The lower bound of the range
 * @param {number} max - The upper bound of the range
 * @return {NaN | number} A random number between min and max, or NaN if either argument is not numeric.
 */
function randomInteger(min, max) {
	if (!isNumeric(Number(min)) || !isNumeric(Number(max))) {
		return NaN;
	}

	return Math.floor(min + (max - min + 1) * Math.random());
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
