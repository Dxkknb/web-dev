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
}, 5000);