// TODO: Create an object

let user = {};
console.log(user);

user = {
	name: "John Doe",
	age: 30,
	"likes birds": true
};
console.log(user);
console.log(`Name: ${user.name}\nAge: ${user.age}`);

if (user["likes birds"]) {
	console.log(`${user.name} likes birds.`);
}