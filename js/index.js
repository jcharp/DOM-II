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