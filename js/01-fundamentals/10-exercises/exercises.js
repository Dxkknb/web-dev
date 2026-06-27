// Exercise 1

const isFloat = (n) => n % 1 !== 0;

/**
 * Returns the next integer (n+1) if n is an integer.
 * If n is a decimal number, it is rounded down to the nearest integer before returning the next integer.
 * If the parameter is not a valid number (NaN), 0 is returned.
 * @param {number} num
 * @returns {number}
 */
function getNextInteger(num) {
	if (isNaN(num)) return 0;

	if (Number.isInteger(num)) return num + 1;

	if (isFloat(num)) return Math.floor(num) + 1;
}

console.log(getNextInteger("234e"));
console.log(getNextInteger(12));
console.log(getNextInteger(2.76));

// Exercise 2:
/**
 * Convert hours to seconds
 * @param {number} hours
 * @returns {null | number}
 */
function convertHoursToSeconds(hours) {
	if (hours < 0 || isNaN(hours)) return null;

	return Math.floor(hours * 3600);
}

console.log(convertHoursToSeconds(2.9));
console.log(convertHoursToSeconds(-10));

// Exercise 3

function getRemainderWithoutModulo(dividend, divisor) {
	if (divisor === 0) return null;

	if (divisor > dividend) {
		let intermediate = dividend;
		dividend = divisor;
		divisor = intermediate;
	}

	return dividend - divisor * Math.floor(dividend / divisor);

}

console.log(getRemainderWithoutModulo(17, 20));

// Exercise 4:
/**
 * Find the minimum between two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number | null}
 */
function findMinimumOfTwo(a, b) {
	if (isNaN(a) || isNaN(b)) return null;

	return a >= b ? b : a;
}

console.log(findMinimumOfTwo(12, 2));

// Exercise 5:
/**
 * Check if a number is even or odd
 * @param n
 * @returns {boolean}: true the number is even, false the number is odd
 */
function checkParityWithStrictBitwise(n) {
	if(isFloat(n)) return false;

	if (n === 0) {
		return true;
	} else if(n === 1) {
		return false;
	}

	let remainder = getRemainderWithoutModulo(n, 2);

	return remainder === 0;
}

for(let i = 0; i < 20; i++) {
	console.log(`${i} -> ${checkParityWithStrictBitwise(i)}`);
}

// Exercise 6:
/**
 * Returns a greeting based on languageCode
 * @param {string} languageCode
 * @returns {string}
 */
function getCustomGreeting(languageCode) {
	let greeting = '';

	switch (languageCode) {
		case 'fr':
			greeting =  'Bonjour';
			break;
		case 'es':
			greeting = 'Hola';
			break;
		case 'en':
			greeting = 'Hello';
			break;
		default :
			greeting = 'Hello';
			break;
	}

	return greeting;
}

console.log("Fr ->", getCustomGreeting('fr'));
console.log("en ->", getCustomGreeting('en'));
console.log("es ->", getCustomGreeting('es'));
console.log("default ->", getCustomGreeting(''));


// Exercise 7:
/**
 *
 * @param {string} inputUsername
 * @param {number} registrationAge
 * @return {string}
 */
function getUsernameWithFallback(inputUsername, registrationAge) {
	let username = inputUsername  ?? 'Guest';

	if (registrationAge < 13) {
		username = 'Junior_' + username;
	} else {
		username = 'Guest';
	}

	return username;
}

console.log(getUsernameWithFallback("Bernard", 12));
console.log(getUsernameWithFallback("", 12));


// Exercise 8:
/**
 * Calculate the sum of 1 to n except multiples of 3 and 7
 * @param {number} n
 * @returns {number}
 */
function sumUpToNWithExclusions(n) {
	let sum = 0;

	for (let i = 0; i <= n; i++) {
		if (i % 3 === 0 || i % 7 === 0) continue;

		sum += i;
	}

	return sum;
}

console.log("n = 20 ->", sumUpToNWithExclusions(20));
console.log("n = 10 ->", sumUpToNWithExclusions(10));

// Exercise 9:
/**
 * Starts a countdown
 * @param {number} start
 * @param {number} step
 * @returns {void}
 */
function countdownWithStep(start, step) {
	while (start >= step) {
		console.log("->", start);
		start -= step;
	}
}

countdownWithStep(50, 5);

// Exercise 10:
/**
 * Displays a triangle in the console using the character specified in `symbol`
 * @param {number} height
 * @param {string} symbol
 * @returns {void}
 */
function drawAdvancedTriangle(height, symbol= "*") {
	for (let i = 1; i <= height; i++) {
		let line = "";

		for (let j = 1; j < height - i; j++) {
			line += " ";
		}

		for (let k = 0; k < 2*i - 1; k++) {
			line += symbol;
		}

		console.log(line);
	}
}

drawAdvancedTriangle(5);
drawAdvancedTriangle(5, "#");

// Exercise 11:
/**
 * FizzBuzz
 * @param {number} n
 * @returns {void}
 */

function fizzBuzz(n) {
	function displayFizzBuzz(num) {

		if (num % 3 === 0 && num % 5 === 0) {
			console.log("FizzBuzz");
		} else if ( num % 3 === 0) {
			console.log("Fizz");
		} else if (num % 5 === 0) {
			console.log("Buzz");
		} else{
			console.log(num);
		}
	}

	if (n <= 1) {
		console.log(n);
	} else {
		for (let i = 1; i <= n; i++) {
			displayFizzBuzz(i);
		}
	}
}

fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(2);
fizzBuzz(-10);