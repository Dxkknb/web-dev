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

// TODO: Property value shorthand
/**
 * User constructor
 * @param {string} name : name of user
 * @param {number} age : age of user
 * @return {Object}
 */
function makeUser(name, age) {
	return {
		name: name, // No shorthand
		age: age // No shorthand
	}
}

let newUser = makeUser("Jack", 48);
console.log(`Name: ${newUser.name}, age: ${newUser.age}`);

/**
 * Student constructor
 * @param {string} name : name of student
 * @param {number} age : age of student
 * @param {string} grade : grade od student
 * @return {Object}
 */
function makeStudent(name, age, grade) {
	return {
		name, // same as name: name
		age, // same as age: age
		grade // same as grade: grade
	}
}