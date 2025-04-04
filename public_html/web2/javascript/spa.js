console.log("ready to go");
//Bruce says use intersection observer https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const fadeIn = document.querySelectorAll(".subtitle");
const textContainers = document.querySelectorAll('.container_text');
console.log(fadeIn);
fadeIn.forEach((item) => {
    
    item.addEventListener("click", function (event) {
        console.log(event.target.parentNode.nextElementSibling.querySelector('p'));
        console.log("stage1 good");
        event.target.parentNode.nextElementSibling.querySelector('p').classList.add("visible");
    })
}) 

const sectionfadein = document.querySelectorAll('.section2_hidden')
console.log(sectionfadein);
sectionfadein.forEach((item) => {
    item.addEventListener("mouseenter", function (event) {
        console.log(event.target.querySelector('section2_hidden'));
        console.log("stage1 set")
        if(item.classList.contains("section2_hidden")) {
            item.classList.add("visible")
        }   
    })
})

const drawin = document.querySelectorAll('drawing')
console.log(drawin);
drawin.forEach((item) => {
    item.addEventListener("click", function (event) {
        console.log(event.target.querySelector('drawing'));
        console.log("set and ready to go")
        if(item.classList.contains(".drawing")){
            item.classList.add("anime")
        }
    } ) 
})