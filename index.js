
var parallox = document.getElementById("parallox");
var myDiv = document.getElementById("myDiv");

window.addEventListener("scroll", function() {
    var offset = window.pageYOffset; 
    parallox.style.backgroundPositionX = offset * 0.6 + "px";
})
window.addEventListener("scroll", function() {
    var offset = window.pageYOffset; 
    myDiv.style.backgroundPosition = offset *0.05 + "px";
})
