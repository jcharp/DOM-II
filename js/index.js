// Your code goes here

//creating a selector for button and making it larger when mouse enters

const btn = document.querySelectorAll('.btn');
btn.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        e.style.transform = "scale(2)";
        e.style.transition = "2s";

    })
})

//makeing the button go back to original size when mouse leaves

btn.forEach((e) => {
    e.addEventListener('mouseleave',() => {
        e.style.transform = 'scale(1)';

    })
})

//creating a selector for the body and making it rotate 180 degrees on key press

const body= document.querySelector("body");
body.addEventListener('keydown', () => {
   body.style.transform = "rotate(180deg)";
})

//returning body to original orentations when key is let go

body.addEventListener('keyup', () => {
    body.style.transform = 'rotate(0deg)';
})

//creating a selector for nav-container and adding a text box at end

const navContainer = document.querySelector('.nav-container');
let box = document.createElement('input');
box.type = "text";
box.placeholder ="Click Me";
navContainer.appendChild(box);

//adding event listener for when box is focused on it turns blue

box.addEventListener('focus', () => {
    box.style.background = 'blue';
})

//removing the blue background when box is blured

box.addEventListener('blur', () => {
    box.style.background = '';
})

//adding an alert for when someone tries to copy anything

const source = window.addEventListener('copy', (event) => {
    alert("COPY IS NOT ALLOWED ON THIS WEBSITE");
})

// adding scroll event to window

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if(scrolled === scrollable) {
        alert('IT IS TIME TO PLAN YOUR TRIP. CALL US AT 1-800-555=5555');
    }
})