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
     * Creates a rabbit.
     *
     * @param {string} name - Name of the rabbit.
     * @param {number} earLength - Rabbit ear length.
     */
    constructor(name, earLength= 5) {
        super(name);
        this.earLength = earLength;
    }

    /**
     * The rabbit hides and the speed goes to 0.
     */
    hide() {
        console.log(`${this.name} hides!`);
    }

    /**
     * Animal stops if the speed is equal to 0.
     */
    stop() {
        this.speed = 0;
        console.log(`${this.name} stops with speed ${this.speed} km/h`);
    }

    /**
     * Displays rabbit info
     */
    display() {
        console.log(`${this.name} has ${this.earLength} cm as ear size.`);
    }
}


let rabbit = new Rabbit("White Rabbit", 10);
rabbit.run(5);
rabbit.hide();
rabbit.stop();
rabbit.display();

/*
* Exercises
*/

// TODO: Extended clock


const inferiorThanZero = (time) => {
    if (time < 10) {
        return "0" + time;
    }

    return `${time}`;
}

class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = inferiorThanZero(date.getHours());
        let mins = inferiorThanZero(date.getMinutes());
        let secs = inferiorThanZero(date.getSeconds());

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('d', secs);

        console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render() ,1000)
    }

    stop() {
        clearInterval(this.timer);
    }
}

class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        let {precision = 1000} = options;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

const clock = new ExtendedClock({template: 'h:m:d'});

clock.start();