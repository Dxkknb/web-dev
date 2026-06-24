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
    let message = 'Hello, ' + username;
    console.log(message);
}

sayHi();