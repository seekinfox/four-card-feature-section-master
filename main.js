function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("visible");
}

const color = document.querySelectorAll(".share");
color.forEach(color => {
    color.addEventListener("click", ()=>{
        color.classList.toggle("color");
    });   
});