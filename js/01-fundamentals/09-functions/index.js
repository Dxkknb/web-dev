// Function declaration and calling

function showMessage() {
    console.log("Hello everyone!");
}

showMessage();

// Local variables
function greet() {
    let greeting = "Hello mate!";
    console.log(greeting);
}

greet(); // Hello mate!

//console.log(greeting); // greeting is not defined

// Outer variables

let username = "John";

function sayHi() {
    username = "Bob";
    let message = 'Hello, ' + username;
    console.log(message);
}

sayHi();

// Parameters and arguments

/**
 * capitalize a string
 * @param {string} string 
 * @returns {string}
 */
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("mama mia 😍"));

/* 
 Exercises
*/

// Ex 1: min(a, b)
/**
 * Returns the minimum between a and b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function min(a, b) {
    return a <= b ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// Ex 2: pow(a, b)
/**
 * Returns a raised to the power of b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function pow(a, b) {
   if (a === 0 && b === 0) return NaN;

   if (b < 0) return 1/Math.pow(a, -b);

   return Math.pow(a, b);
}

console.log(pow(3, 2)); // 9
console.log(pow(3, 3)); // 27
console.log(pow(1, 100)); // 100

// Ex 3: Palindrome
/**
 * Check if a word is a palindrom
 * @param {string} word 
 * @returns {boolean}
 */
function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("");

    return reversedWord.toLowerCase() === word.toLowerCase();

}


const words = {
    kayak: true,
    SOS: true,
    Kayak: true,
    bonjour: false
};

for (let word in words) {
    if (isPalindrome(word) !== words[word]) {
        console.error(`Palindrome(${word})`);
    }

    console.log(`Palindrome(${word}) == ${isPalindrome(word)}`)
}

// Ex 4: Student's average

const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]
    }, {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]
    }, {
        name: 'Marc',
        notes: [2, 3, 5, 8, 9]
    }, {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]
    }
];



/**
 * calculate average
 * @param {number[]} notes 
 * @returns {number}
 */
function average(notes) {
    if (notes?.length === 0) return 0;

    const sumNotes = notes?.reduce((prevValue, currValue) => prevValue + currValue, 0);

    return Math.round(sumNotes / notes?.length, 2);
}

const studentsWithAverage = students.map(student => {
    const studentWithAverage = {
        name: student.name, 
        notes: student.notes, 
        average: average(student.notes)
    }

    return studentWithAverage;
});

const bestStudents = studentsWithAverage.sort((std1, std2) => std2.average - std1.average);

console.log("Best students:");

for (student of bestStudents) {
    console.log(`${student.name} -> ${student.average}/20`);
}