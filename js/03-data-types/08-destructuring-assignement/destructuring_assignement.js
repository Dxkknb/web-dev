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

// Object destructuring

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width, height} = options;
console.log(title, width, height);

let {mainTitle, ...others} = options;
console.log(mainTitle);
console.log(others);

// Exercise

let salaries = {
    "John": 100,
    "Peter": 300,
    "Mary": 250
}

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    if (Object.keys(salaries).length === 0) {
        return null;
    }

    Object.entries(salaries).forEach(([name, salary]) => {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    });

    return maxName;
}

console.log("Max salary: ", topSalary(salaries));