let Celsius = document.querySelector("input");
let Fahrenheit = document.querySelectorAll("p")[1];
let Kelvin = document.querySelectorAll("p")[2];
let btn = document.querySelector("button");
let F = 0;
let K = 0;

btn.addEventListener("click", function (){
    F = (parseInt(Celsius.value) * 1.8) + 32;
    K = parseInt(Celsius.value) + 273.15;
    Fahrenheit.innerHTML = "Fahrenheit: " + F;
    Kelvin.innerHTML = "Kelvin: " + K;
});