console.log("locked and loaded nerd")
const mySnake = document.getElementById("snake");
const stage = document.querySelector("body");
const Hiss = new Audio ("sounds/SnakeHISS.mp3");
mySnake.onclick = function(){ 
    mySnake.classList.toggle("move")
    Hiss.play();
}

stage.addEventListener("click", function(event){
    console.log(event.clientX + " : " + event.clientY);
    var coords = `translateX(${event.clientX-200}px) translateY(${event.clientY-150}px)`;
    mySnake.style.transform = coords;

})

document.onkeydown = checkKeys; 
function checkKeys (event){

    var style = window.getComputedStyle(mySnake);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41
    var yVal = matrix.m42
    var coords;
    if(event.keyCode == "37") {
        coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
        mySnake.style.transform = coords;
    }
    //right arrow
    if(event.keyCode == "39") {
        coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
        mySnake.style.transform = coords;
    }
    //up arrow
    if(event.keyCode == "38") {
        coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
        mySnake.style.transform = coords;
    }
    //down arrow
    if(event.keyCode == "40") {
        coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
        mySnake.style.transform = coords;
    }

}
function addMyObject(){
    let myObject = document.createElement("img");
    myObject.src = "img/latest.jpg";
    myObject.style.width="200px"
    stage.appendChild(myObject);
    let w = window.innerWidth;
    let h = window.innerHeight;
    let randomX = Math.floor((Math.random() * w) -41)
    let randomY = Math.floor((Math.random() * h) -58)

    myObject.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;

    setTimeout( () => { myObject.remove(); addMyObject()}, 5000)
}

addMyObject()