// TODO: Primitive references

let message = "Hello";
let phrase = message;

message = "Hello mate!";

console.log("message:", message);
console.log("phrase:", phrase);

// TODO: Object references

let user = {
	name: "John Doe"
};

let admin = user;
admin.name = "Jack Doe";

console.log("User:", user); // User: {name: "Jack Doe"}
console.log("Admin:", admin); // Admin: {name: "Jack Doe"}

// TODO: Comparison by reference

const person = {
	name: "John",
	age: 12
}
const student = person;

let a = {};
let b = {};

console.log(person === student); // true, both variables refer to the same object
console.log(a === b); // false, The two objects do not refer to different objects

// TODO: Cloning and merging, Object.assign

const userCopy = Object.assign({job: "Engineer"}, user);
console.log(userCopy);