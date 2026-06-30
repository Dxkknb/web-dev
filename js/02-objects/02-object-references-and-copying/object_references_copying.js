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
