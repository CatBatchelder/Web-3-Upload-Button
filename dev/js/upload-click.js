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