// Your code goes here
const btn = document.querySelectorAll('.btn');
btn.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        e.style.transform = "scale(2)";
        e.style.transition = "2s";

    })
})

btn.forEach((e) => {
    e.addEventListener('mouseleave',() => {
        e.style.transform = 'scale(1)';

    })
})

const body= document.querySelector("body");
body.addEventListener('keydown', () => {
   body.style.transform = "rotate(180deg)";
})

body.addEventListener('keyup', () => {
    body.style.transform = 'rotate(0deg)';
})

const navContainer = document.querySelector('.nav-container');
let box = document.createElement('input');
box.type = "text";
box.placeholder ="Click Me";
navContainer.appendChild(box);

box.addEventListener('focus', () => {
    box.style.background = 'blue';
})

box.addEventListener('blur', () => {
    box.style.background = '';
})