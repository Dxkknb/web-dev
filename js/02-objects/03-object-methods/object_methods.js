// TODO: Object methods

const user = {
	name: "John",
	age: 30,
	//method
	sayHi() {
		console.log("Hello!");
	}
}

user.sayHi(); // Hello

const animal = {
	specie: 'feline',
	name: '🐰',
	age: 1,
	speed: 12,
	jump() {
		console.log(`${this.name} jumps.`);
	},
	run() {
		if (this.speed > 0) console.log(`${this.name} runs...`);
	}
}

animal.jump();
animal.run();

// Exercises

// TODO: Create a calculator

function isNumber(value) {
	return !isNaN(value) && typeof value === "number";
}

const calculator = {
	read() {
		/**
		 * @private
		 * @type {number}
		 */
		this.a = Number(prompt("a: "));

		/**
		 * @private
		 * @type {number}
		 */

		this.b = Number(prompt("b: "));
	},
	sum() {
		if (isNumber(this.a) && isNumber(this.b)) {
			return  this.a + this.b;
		}

		return 0;
	},
	mul() {
		if (isNumber(this.a) && isNumber(this.b)) {
			return  this.a * this.b;
		}

		return 0;
	}
}

calculator.read();
console.log("Sum:", calculator.sum());
console.log("Multiplication:",calculator.mul());