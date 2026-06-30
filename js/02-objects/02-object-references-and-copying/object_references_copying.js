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

let user1 = {
	name: "Jack Ma",
	sizes: {
		height: 182,
		width: 50
	}
};

let clone = Object.assign({}, user1);

console.log(clone.sizes=== user1.sizes); // They are both pointing at the same object

clone.sizes.width = 100;
clone.name = "Jacky";

console.log(clone, user1);

let clone2 = structuredClone(user1);

clone2.sizes.width = 200;

console.log(user1, clone2);