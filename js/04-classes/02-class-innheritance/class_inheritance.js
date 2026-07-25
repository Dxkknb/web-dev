/*
Class Inheritance
 */

// The "extends" keywords

/**
 * Represents a single animal.
 */
class Animal {
    /**
     * Creates an animal.
     *
     * @param {string} name - Name of animal.
     */
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    /**
     * Animal run if its speed is greater than 0.
     *
     * @param {number} speed - Speed of animal.
     */
    run(speed) {
        if (speed < 0) {
            throw new Error(`Speed must be greater than 0`);
        }

        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed} km/h.`);
    }

    /**
     * Animal stops if the speed is equal to 0.
     */
    stop() {
        this.speed = 0;
        console.log(`${this.name} still stands.`);
    }
}

/**
 * Represents a single rabbit.
 */
class Rabbit extends Animal {
    /**
     * The rabbit hides and the speed goes to 0.
     */
    hide() {
        console.log(`${this.name} hides!`);
    }
}


let rabbit = new Rabbit("White Rabbit");
rabbit.run(5);
rabbit.hide();
