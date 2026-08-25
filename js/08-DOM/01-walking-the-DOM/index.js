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

// Element-only navigation

const secondListElement = document.querySelector(".list > li:nth-child(2)");

console.log("Parent element:", secondListElement.parentElement);
console.log("Previous element sibling:", secondListElement.previousElementSibling);
console.log("Next element sibling:", secondListElement.nextElementSibling);

// Exercise: Select diagonal cells

/**
 * Creates an HTML element with flexible configuration
 *
 * @param {string} tagName - The tag name (ex: 'div', 'button')
 * @param {Object} options - Element configuration
 * @param {string} options.content - Safe text content
 * @param {Array<string>} options.classes - CSS classes
 * @param {Record<string, string>} options.attributes - HTML attributes
 * @param {Record<string, Function>} options.events - Event listeners {eventName: handler}
 * @param {Array<HTMLElement>} options.children - Child elements
 *
 * @return {HTMLElement}
 */
const createElement = (tagName, options = {}) => {
    const {
        content = "",
        classes = [],
        attributes = {},
        events = {},
        children = []
    } = options;

    const element = document.createElement(tagName);

    // Set text content
    if (content) {
        element.textContent = content;
    }

    // Add classes
    if (classes.length > 0) {
        element.classList.add(...classes);
    }

    // Set attributes
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    })

    // Attach event listeners
    Object.entries(events).forEach(([event, handler]) => {
        element.addEventListener(event, handler)
    })

    // Append children
    children.forEach((child) => {
        element.appendChild(child);
    })

    return element;
}

/**
 * Creates a matrix
 *
 * @param {number} rows - Number of rows
 * @param {number} cols - Number of columns
 * @return {HTMLElement}
 */
const createMatrix = (rows=2, cols=2) => {
    const tableRows = [];

    for (let i = 0; i < rows; i++) {
        const tr = createElement("tr", {
            classes: ["tr"],
        });

        for (let j = 0; j < cols; j++) {
            const tdClasses = [];

            if ( i === j) {
                tdClasses.push("diagonal")
            }

            const td = createElement("td", {
                content: `${i+1}:${j+1}`,
                classes: tdClasses
            });

            tr.appendChild(td);
        }

        tableRows.push(tr);
    }

    const tbody = createElement("tbody", {
        classes: ["tbody"],
        children: tableRows
    });

    return createElement("table", {
        classes: ["table"],
        children: [tbody],
    });
}

const matrixDiv = document.querySelector("#matrix");
matrixDiv.append(createMatrix(5, 5));