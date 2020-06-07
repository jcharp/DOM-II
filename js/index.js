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
}

)