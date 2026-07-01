// A primitive as an object

let greeting = "Hello mate!";
console.log(greeting.toUpperCase()); // HELLO MATE!;

let number = 1.23456;
console.log(number.toFixed(2)); // 1.23

const numbers = []

for (let i = 0; i < 10; i++) {
	numbers.push(Number(Math.random().toFixed(3)));
}

console.log("numbers:", numbers);

console.log(typeof 0); // number
console.log(typeof new Number(0)); // object