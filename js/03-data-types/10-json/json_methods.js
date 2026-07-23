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

// JSON.parse

const studentObj = JSON.parse(json);
console.log("Type:", typeof studentObj, typeof studentObj.isAdmin);
console.log("studentObj:", studentObj);
