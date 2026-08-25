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

// Children

const listChildren = document.querySelector(".list").children;

Array.from(listChildren).forEach((element) => {
    console.log(element.innerText);
})

const unorderedList = document.querySelector(".list");

if (unorderedList !== null && unorderedList.hasChildNodes()) {
    Array.from(unorderedList.children).forEach((element) => {
        element.addEventListener("click", handleClick)
    })
}

function handleClick(e) {
    e.preventDefault();
    e.target.classList.toggle("highlight");
}

for(const element of document.body.childNodes) {
    console.log(element);
}