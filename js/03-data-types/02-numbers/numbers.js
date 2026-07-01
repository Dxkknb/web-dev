// TODO: More ways to write a number

let billion = 1000000000;
billion = 1_000_000_000;
billion = 1e9;

console.log("Billion:", billion);

// TODO: toString(base) method

let num = 255;
console.log(num.toString(2)); // 11111111
console.log(num.toString(8)); // 377
console.log(num.toString(16)); // ff

// TODO: Rounding

console.log(Math.floor(3.1)); // 3
console.log(Math.floor(-1.1)); // -2

console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(-1.1)); // -1

console.log(Math.round(3.1)); // 3
console.log(Math.round(3.6)); // 4
console.log(Math.round(3.5)); // 4
console.log(Math.round(-3.5)) // -3

// TODO: ParseInt and parseFloat

console.log(parseInt('100px')); // 100
console.log(parseFloat("12.5rem")); // 12.5

console.log(parseInt("a12.3")); // NaN
console.log(parseFloat("12.3.4")); // 12.3

// Other math functions

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.max(3, 5, -10, 0, 1)); // 5
console.log(Math.min(1, 2)); // 1

console.log(Math.pow(2, 10)); // 1024
console.log(Math.pow(3, 5)); // 243