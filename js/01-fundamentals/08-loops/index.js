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