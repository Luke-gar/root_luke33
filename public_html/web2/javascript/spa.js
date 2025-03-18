console.log("ready to go")
const fadein = document.querySelectorAll(".hidden");
fadein.forEach((item) => {
    item.addEventListener("mouseenter", function () {
        console.log("stage1 good");
        item.classList.add("visable");
    })
}) 

