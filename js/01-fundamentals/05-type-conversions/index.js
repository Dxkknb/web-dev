// String Conversion

let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // string

// Numeric Conversion

let numeric_string = "120";
console.log(typeof numeric_string); // string

let numeric_number = Number(numeric_string);
console.log(typeof numeric_number); // number

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Boolean Conversion

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("Hello JavaScript!")); // true
console.log(Boolean("")); // false