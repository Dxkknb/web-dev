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

// TODO: Property existence test, "in" operator

const redColor = {
	name: "red",
	hex: "#FF0000"
};

if ("hex" in redColor) {
	document.getElementById("red-btn").style.backgroundColor = redColor.hex;
} else {
	document.getElementById("red-btn").style.backgroundColor = "#AAA";
}

// TODO: The "for ... in" loop

for (let key in user) {
	console.log(`${key} => ${user[key]}`);
}

// TODO: Exercises

// Ex 1: Hello, object
const user1 = {
	name: 'John',
	surname: 'Smith'
};

user1.name = "Pete";
console.log(user1);

delete user1.name;
console.log(user1);

// Ex 2: Check for emptiness
/**
 * Check if an object is empty
 * @param {Object} obj
 * @return {boolean}
 */
function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}

	return true
}

console.log(isEmpty({}));
console.log(isEmpty({name: 'Jack ', age: 31}));

// Ex 3: Sum object properties

function isNumber(value) {
	return typeof value === "number" && Number.isFinite(value);
}
/**
 * Sum of values of properties
 * @param {Object} obj
 * @return {number}
 */
function sumOfValues(obj) {
	if(isEmpty(obj)) return 0;

	let total = 0;

	for (let key in obj) {
		if (!isNumber(obj[key])) continue;

		total += obj[key];
	}

	return total;
}

const salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
	bernard: "ok"
};

console.log(`Sum of values: ${sumOfValues(salaries)}`);

// Ex 4: Multiply numeric property by 2

/**
 * @typedef {Object} Menu
 * @property {number} width
 * @property {number} height
 * @property {string} title
 */


/**
 * Multiply all numeric property values of obj by 2
 * @param {Menu} obj
 * @return {Menu}
 */
function multiplyNumeric(obj) {

	const copyObj = Object.assign({}, obj);

	for (let key in copyObj) {
		if (!isNumber(copyObj[key])) continue;

		copyObj[key] *= 2;
	}

	return copyObj;
}

let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

console.log("Menu original:", menu);
console.log("Menu modified:", multiplyNumeric(menu));