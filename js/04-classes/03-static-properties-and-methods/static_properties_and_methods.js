/*
Static properties and methods
 */

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;

    }

    static async getInfo(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return await response.json();
    }
}

class Greeting {
    /**
     * Greet someone
     *
     * @param {User} user
     */
    static async greet(user) {
        console.log(`Hello ${user.name}!`);
        const result = await User.getInfo(user.id);

        displayObj(result);
        console.log("-".repeat(100));
    }
}

function displayObj(obj, depth = 0) {
    let tab="\t".repeat(depth);

    for (const prop in obj) {
        if (obj[prop] !== null && typeof obj[prop] === 'object') {
            console.log(`${tab}${prop}:`);
            displayObj(obj[prop], depth + 1);
        } else {
            console.log(`${tab}${prop}: ${obj[prop]}`);
        }
    }
}

Greeting.greet(new User(1,"John"));
Greeting.greet(new User(2, "Jane Doe"));
