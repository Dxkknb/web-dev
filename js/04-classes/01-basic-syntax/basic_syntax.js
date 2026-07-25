// Class Basic Syntax

/**
 * Represents a single student.
 */
class Student {
    /**
     * Creates a student.
     *
     * @param {number|string} id - Unique identifier of the student.
     * @param firstName - Firstname of the student.
     * @param lastName - Lastname of the student.
     * @param grade - Grade of the student.
     */
    constructor(id,firstName, lastName, grade) {
        this.id = id;
        this._firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
    }

    // Getters and setters

    get firstName() {
        return this._firstName;
    }

    set firstName(v) {
        this._firstName = v;
    }

    /**
     * Returns the full name of the student.
     *
     * @return {string} The full name of the student.
     */
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    /**
     * Displays student's information.
     */
    display() {
        console.log(`
Full name: ${this.fullName()}
Grade: ${this.grade}
        `)
    }
}

// TODO: Create a student and display his information

const student = new Student(
    1,
    "John",
    "Doe",
    "Tle C"
);

student.display();