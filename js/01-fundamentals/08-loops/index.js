// 'while' Loop

let i = 0;
while( i < 10) {
	console.log("Bonjour " + i);
	i++;
}

// 'for' Loop

let numbers = [1, 2, 3]

for (let i = 0; i < numbers.length; i++) {
	console.log(`${i} -> ${numbers[i]}`);
}

// 'break' statement

let stopIteration = 5

for (let i = 10; i > 0; i--) {
	if (i === stopIteration) {
		break
	}

	console.log(`value: ${i}`);
}

// 'continue' statement
console.log("Odd numbers:");

for (let i = 0; i <= 10; i++) {
	if (i % 2 === 0) continue;

	console.log(i);
}

/*
 Exercises
 */

// Ex 1: Output even numbers in the loop

console.log("Even numbers: ");

for (let i = 2; i <= 10; i++) {
	if (i % 2 === 1) continue;

	console.log(i);
}

// Ex 2: Repeat until the input is correct

let input = null;
let min_number = 100

while (input < min_number) {
	input = prompt(`Enter a number greater than ${min_number}`);

	if(input === null || input.trim() === '' || isNaN(Number(input))) {
		alert("Retry!");
		continue;
	}

	if (Number(input) < min_number) {
		alert(`Provide a number greater than ${min_number}`);
		continue;
	}

	alert("You provide a valid number");

}

// Ex 3: Output prime numbers

/**
 * Check if a number is a prime number
 * @param {number} number
 * @returns {boolean}
 */
function isPrime(number) {
	if (number < 2) return false;

	if (number === 2 || number === 3 ) return true;

	if (number % 2 === 0 || number % 3 === 0) return false;

	const divider = Math.floor(Math.sqrt(number));

	for (let i = 5; i <= divider; i += 6) {
		if ( number % i === 0 || number % (i + 2) === 0) return false;
	}

	return true;
}

for (let i = 0; i < 20; i++) {
	if (isPrime(i)) console.log(i);
}