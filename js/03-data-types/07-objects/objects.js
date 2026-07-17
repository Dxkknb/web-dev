/*
* Object.keys, values, entries
*/

// TODO: Demonstrate the use of Object.keys, Object.values, and Object.entries
const user = {
    name: "John Doe",
    age: 30,
    get email() {
        return this.name
        .toLowerCase()
        .replaceAll(" ", "") + this.age + "@example.com"
    }
}

Object.apply(user);

console.log("Object.keys:", Object.keys(user)); // Output: ["name", "age", "email"]
console.log("Object.values:", Object.values(user)); // Output: ["John Doe", 30, "johndoe30@example.com"]
console.log("Object.entries:", Object.entries(user)); // [ "name", "John Doe" ], [ "age", 30 ], [ "email", "johndoe30@example.com" ]

//TODO: Iterable Keys and values

for (let [key, value] of Object.entries(user)) {
    console.log(`${key} -> ${value}`);
    
}