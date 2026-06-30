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
