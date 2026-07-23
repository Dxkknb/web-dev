/*
Work with JSON and JSON methods
 */

// JSON.stringify

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);
console.log("Type:", typeof json);
console.log("Student json:", json);