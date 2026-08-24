// DOM Tree
console.log(document);
console.log(document.body);
console.log(document.head);

// Null value

const div = document.querySelector(".div");

if (div !== null) {
    console.log("The node `div` exists.");
    console.log(div);
} else {
    console.log("The node doesn't exists.");
}


