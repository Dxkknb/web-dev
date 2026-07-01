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

// TODO: Remove null properties

/**
 * Remove null properties
 * @param {Object} obj
 * @return {Object}
 */
function removeNullProperties(obj) {
	const newObj = {};

	for (const key in obj) {
		if (obj[key] === null || obj[key] === undefined) continue;

		newObj[key] = obj[key];
	}

	return newObj;
}

const person = {
	name: "Charles",
	age: 12,
	job: null,
	city: undefined
};

console.log("Clean person object:", removeNullProperties(person));

// TODO: Conditional merge

/**
 * The properties of obj2 replace those of obj1, provided they are not undefined.
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Object}
 */
function mergeIgnoringUndefined(obj1, obj2) {
	const result = structuredClone(obj1);

	for (let [key, value] in Object.entries(obj2)) {
		if (value !== undefined) {
			result[key] = value;
		}
	}

	return result;
}

const obj1 = {
	name: "Bernard",
	age: 30,
	city: "Abidjan",
	job: "Géomètre",
};

const obj2 = {
	age: undefined,
	city: "Yamoussoukro",
	job: null,
	country: "Côte d'Ivoire",
};

const result = mergeIgnoringUndefined(obj1, obj2);

console.log("Merged Object:", result);

// TODO: Deep Freeze

function deepFreeze(obj) {
	// Primitives are immutable
	if(obj === null || typeof obj !== "object") {
		return obj;
	}

	// Avoid infinite loops in the event of circular references
	const visited = new WeakSet();

	function freeze(target) {
		if (
			target === null ||
			typeof target !== "object" ||
			visited.has(target)
		) {
			return;
		}

		visited.add(target);

		// Recursively freeze properties
		for (const key in Reflect.ownKeys(target)) {{
			freeze(target[key]);
		}}

		// Make each property non-editable and non-configurable
		for (const key of Reflect.ownKeys(target)) {
			const descriptor = Object.getOwnPropertyDescriptor(target, key);

			if ("value" in descriptor) {
				Object.defineProperty(target, key, {
					value: descriptor.value,
					enumerable: descriptor.enumerable,
					writable: false,
					configurable: false,
				});
			} else {
				// Getters
				Object.defineProperty(target, key, {
					get: descriptor.get,
					set: descriptor.set,
					enumerable: descriptor.enumerable,
					configurable: false,
				});
			}
		}

		// Prevents new properties from being added
		Object.preventExtensions(target);
	}

	freeze(obj);

	return obj;
}

const newPerson = {
	name: "Bernard",
	address: {
		city: "Abidjan",
	},
};

deepFreeze(newPerson);

newPerson.name = "Paul";           // ignoré (ou TypeError en mode strict)
newPerson.address.city = "Paris";  // ignoré
newPerson.age = 30;                // impossible

console.log(newPerson);