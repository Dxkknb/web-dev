// Get HTML elements

const mainTitle = document.getElementById("mainTitle");
mainTitle.style.color = "orangered";

const listElement = document.querySelector(".list");
const inputElement = document.querySelector(".form > input");
const formElement = document.querySelector(".form");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const listItem = createElement("li", {
        content: formData.get("item"),
        attributes: {
            style: "font-size: 2rem"
        }
    });

    listElement.appendChild(listItem);

    inputElement.value = ""
})

/**
 *
 * @param {string} tagName
 * @param {Object} options
 *
 * @param {string} options.content
 * @param {Array<string>} options.classes
 * @param {Record<string, string>} options.attributes
 * @param {Record<string, Function>} options.events
 * @return {HTMLElement}
 */
function createElement(tagName, options = {}) {
    const {content = "", classes = [], attributes = {}, events={}} = options;
    const element = document.createElement(tagName);

    if (content) {
        element.textContent = content;
    }

    if (classes.length > 0) {
        element.classList.add(...classes);
    }

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    })

    Object.entries(events).forEach(([event, handler]) => {
        element.addEventListener(event, handler);
    })

    return element;
}

// Get collections of elements

const listItems = document.querySelectorAll(".list > li");
listItems.forEach((element) => {
    element.style.color = "red";
    element.style.fontSize = "2rem";
})