/*
Destructuring assignement
*/

// Array destructuring

const names = ["Smith", "James", "Jack", "Maria"];

const [name1, name2, ...restNames] = names;

console.log("Name 1:", name1);
console.log("Name 2:", name2);

let [firstname, surname] = "Sam Smith".split(" ");

console.log(firstname, surname);

// Destructuring in loop

let person = {
    name: "Konan Bernard",
    age: 30,
    job: "Surveyor",
    salary: 7500
};

for (const [key, value] of Object.entries(person)) {
    console.log(`${key} -> ${value}`);
}
