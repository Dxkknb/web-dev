'use strict';

// Get attribute value
const htmlTag = document.getElementsByTagName('html')[0];
console.log(htmlTag.lang);

// Use attribute value

const form = document.querySelector('#form');
const inputMessage = document.querySelector("input[data-type='message']");
const messagesContainer = document.querySelector('.messages-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = inputMessage.value;

    if (message === '' || message.length <= 4) {
        inputMessage.setAttribute('data-state', 'invalid');
        alert('message not valid!');
    } else if (message.length > 4) {
        inputMessage.setAttribute('data-state', 'valid');

        const messageItem = createElement('li', message);
        messagesContainer.appendChild(messageItem);
        inputMessage.value=""
    }
})


function createElement(tagName, text="") {
    const element = document.createElement(tagName);
    element.textContent = text;

    return element;
}

// Exercise

const colorizeExternalLinks = () => {
    const links = document.querySelectorAll('a');

    for (const link of links) {
        const href = link.getAttribute('href');

        if (!href) continue;

        if (!href.includes('://')) continue;

        if (href.startsWith('http://internal.com')) continue;

        link.style.color = 'orange';
    }
};

colorizeExternalLinks()