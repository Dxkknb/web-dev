// TODO: Count the properties

/**
 * Returns the number of own properties of an object.
 * @param {Object} obj
 * @return {number}
 */
function countProperties(obj) {
	let totalProperties = 0;

	for (let key in obj) {
		totalProperties++;
	}

	return totalProperties;
}

const user = {
	name: "John",
	age: 25,
	city: "Paris"
};

const salaries = {
	John: 200,
	Ann: 160,
	Pete: 130,
	company: "Google"
};

console.log("Number of properties:",countProperties(user));
console.log("Number of properties:",countProperties(salaries));

// TODO: Sum of numerical properties

const isNumeric = (n) => !isNaN(n) && typeof n === "number";

/**
 * Only adds together properties whose values are numbers
 * @param obj
 * @return {number}
 */
function sumNumericProperties(obj) {
	let total = 0;

	for (let key in obj) {
		if (!isNumeric(obj[key])) continue;

		total += obj[key];
	}

	return total;
}

console.log("Sum of numeric values:", sumNumericProperties(salaries));

// TODO: Reverse keys and values

/**
 * Reverse keys and values
 * @param {Object} obj
 * @return {Object}
 */
function reverseKeysAndValues(obj) {
	const newObj = {};

	for (const key in obj) {
		newObj[obj[key]] = key;
	}

	return newObj;
}

const obj = {
	a: 1,
	b: 2,
	c: 3
};

console.log("Reverse object:",reverseKeysAndValues(obj));