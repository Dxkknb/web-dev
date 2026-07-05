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