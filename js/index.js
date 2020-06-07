// Your code goes here
//mouse enter and mouse leave

const roadMap = document.querySelectorAll('.img-content');

roadMap.forEach((element) => {
    element.addEventListener("mouseenter", function() {
          
        element.style.transform = "scale(1.6)";
        element.style.transition = "transform 2s";
    })
    element.addEventListener("mouseleave", function() {
        element.style.transform = "scale(1)";
    })
});

//Keydown and keyup
const body = document.querySelector('body');

body.addEventListener('keydown', function() {
    body.style.transform = "rotate(180deg)";
})

body.addEventListener("keyup", function() {
    body.style.transform = "rotate(0deg)";
})

//wheel and double click

/* body.addEventListener('wheel', function() {
    body.style.transform = "scale(1.6)";
    body.style.transition ="2s";

}) */

body.addEventListener('dblclick', function() {
    body.style.transform = 'scale(1)';

})

//building a textbox for blur

const navCont = document.querySelector('.nav-container');

var box = document.createElement('input');
box.type = "text";
box.placeholder = "click here";
navCont.appendChild(box);

const clickHere = document.querySelector('input[type="text"]');

clickHere.addEventListener('focus', (event) => {
    event.target.style.background = "yellow";

})

clickHere.addEventListener('blur', (event) =>{
    event.target.style.background = "";
})
