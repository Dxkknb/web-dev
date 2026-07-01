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