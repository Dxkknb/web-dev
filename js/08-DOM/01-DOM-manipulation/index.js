window.setTimeout(()=> {
    console.log(Date.now() - new Date(0));
}, 2000);

// DOM: Document Object Model

document.body.style.color = "#ff8888";

const listItems = document.querySelectorAll('.section li');
listItems.forEach((li) => {
    li.addEventListener('mouseenter', (e) => {
        li.classList.add('active');
    });
    li.addEventListener('mouseleave', (e) => {
        li.classList.remove('active');
    });
})

document.body.classList.add("bg-dark");
setTimeout(() => {
    document.body.classList.remove("bg-dark");
}, 2000);

// TODO: Walk through the DOM
/**
 * @type {Element}
 */
const importantBox = document.querySelector('#box-important');
console.log(importantBox);

/**
 * All divs in div.container node
 * @type {NodeListOf<Element>}
 */
const containerBoxes = document.querySelectorAll('.container > div');
console.log(containerBoxes);

// DOM tree

const ul = document.querySelector('.list');
console.log(ul.nodeName, ul.innerText)

ul.setAttribute('hidden', 'hidden');
ul.removeAttribute('hidden');
console.log(ul.getAttribute('class'));
ul.classList.add('bold');

// Style
const title = document.querySelector('.title');
title.style.color = "darkblue";

console.log(getComputedStyle(title).color)

// Create Element

const newLi = document.createElement('li');
newLi.innerHTML = "Bonjour les gens!";

document.querySelector('ul.list').append(newLi);
