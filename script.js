var h3 = document.querySelector('h3');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.getElementById("gredient");


function setGredient(){
    body.style.backgroundImage = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.innerHTML = body.style.backgroundImage + ";";
}

color1.addEventListener("input" , setGredient);
color2.addEventListener("input" , setGredient);