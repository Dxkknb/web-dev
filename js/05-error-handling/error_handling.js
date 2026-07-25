/*
Error handling
 */

class ValidationError extends Error {
    constructor(message) {
        super(message);
    }
}

class User {
    /**
     * Creates a user
     *
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.trim() === "" || value.length <= 2) {
            throw new ValidationError("Name must be at least 3 characters");
        }

        this._name = value;
    }
}

// Creates user
try {
    const user = new User("jo");
    console.log(user.name);
} catch (e) {
    console.log(e.message, { type: e.name , cause: e});
}


