// TODO: Add / remove items

const fruits = ["Apple", "Orange", "Cherry"];

// Add a fruit
fruits.push("Pineapple");
console.log("After adding a fruit:", fruits);

// remove a fruit
fruits.pop();
console.log("After removing a fruit:", fruits);

// remove a fruit with array.splice
fruits.splice(1, 1);
console.log("After removing another fruit:", fruits);

// TODO: Slice

class Person {
	/**
	 * @param {string} name
	 * @param {number} age
	 */
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	display() {
		return `Name:${this.name}\nAge:${this.age} years old.\n`;
	}
}

const person1 = new Person("Konan", 30);
const person2 = new Person("Koffi", 29);
const person3 = new Person("N'guessan", 28);
const person4 = new Person("Bernard", 27);

const persons = [person1, person2, person3, person4];

// the last two persons
const lastTwoPersons = persons.slice(persons.length - 2);

for (const person of lastTwoPersons) {
	console.log(person.display());
}

// TODO: Concat

const array1 = [1, 2];
const array2 = [3, 4, 5];
const array3 = array1.concat(array2);

console.log("Concatenate array:", array3);

// TODO: Iterate: forEach

const animals = ["Lion", "Elephant", "Giraffe", "Tiger", "Zebra"];

animals.forEach((item, index, array) => {
	console.log(`${item} is at index ${index} in ${array}`);
});

// TODO: Searching in array

// indexOf/lastIndexOf and includes
let searchItem = "Elephant";
const foundIndex = animals.indexOf(searchItem, 0);

if (foundIndex === -1) {
	console.log(`${searchItem} not in "${animals}"`);
} else {
	console.log(`${searchItem} is at index ${foundIndex}`);
}


const isIncluded = animals.includes(searchItem, 0);

if (!isIncluded) {
	console.log(`${searchItem} not in "${animals}"`);
} else {
	console.log(`${searchItem} is in "${animals}"`);
}

// find and findIndex/findLastIndex
const users = [
	{id: 1, name: "John"},
	{id: 2, name: "Pete"},
	{id: 3, name: "Mary"}
];

let user = users.find(item => item.name==="John") ?? "Anonymous";
console.log("User:", user);

let findIndex = users.findIndex(item => item.id === 2);

if (findIndex !== -1) {
	users.splice(findIndex, 1);
	console.log(users);
}

// filter

const newFruits = [
	{ name: "Apple", averageWeight: 180 },
	{ name: "Banana", averageWeight: 120 },
	{ name: "Orange", averageWeight: 200 },
	{ name: "Mango", averageWeight: 300 },
	{ name: "Grapes (bunch)", averageWeight: 500 }
];
const heavyFruits = newFruits.filter((fruit) => {
	return fruit.averageWeight >= 250;
});

console.log("Heavy fruits:", heavyFruits);