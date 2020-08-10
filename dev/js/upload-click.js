
console.log("helo");

gsap.registerPlugin(DrawSVGPlugin);

gsap.from("#spiral",{duration:5, drawSVG:"0%"});

function showPopup() {
    var x = document.getElementById("popup");

    if (x.style.display === "none") {

      x.style.display = "block";

    } else {

      x.style.display = "none";
    }
  }

var yellowButton = document.querySelector('#button');

window.onclick = function(event){

    if(event.target == yellowButton){
        
        showPopup();
    }
}