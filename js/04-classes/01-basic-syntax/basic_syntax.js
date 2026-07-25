// Class Basic Syntax

/**
 * Represents a single student.
 */
class Student {

    schoolName = "Harvard Law School";

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
School: ${this.schoolName}
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


/*
Exercise: Rewrite a class
 */

// TODO: User Authentification

/*
=====================================
Class User
=====================================
 */

/**
 * Represents a single user.
 */
class User {
    /**
     * Creates a user.
     *
     * @param {number} id - Unique identifier of the user
     * @param {string} username - Username of the user.
     * @param {string} email - Email of the user.
     * @param {string} password - Non hashed password of the user.
     * @param {boolean} [loggedIn=false] - Whether a user is logged in or not.
     */
    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = "123456789abc";
        this.loggedIn = false;
    }

    // Methods
    /**
     * Log in the user.
     */
    login() {
        this.loggedIn = true;
    }

    /**
     * Log out the user.
     */
    logout() {
        this.loggedIn = false;
    }

    /**
     * Change the user's password.
     *
     * @param {string} newPassword - New password of the user.
     */
    changePassword(newPassword) {
        this.password = newPassword;
    }

    displayProfile() {
        if (this.loggedIn) {
            console.log(`
Username: ${this.username}
Email: ${this.email}
        `);
        } else {
            console.log(`You're logged out!`);
        }
    }
}

/*
=====================================
DEMO
=====================================
 */

const user = new User(1, 'dkknb2', 'dkknb2@gmail.com');

user.login();
user.changePassword("12345");

user.displayProfile();
