let Kg = document.querySelector("input");
let Dugme = document.querySelector("button");
let Pounds = document.getElementById("pounds");
let Ounces = document.getElementById("ounces");
let Grams = document.getElementById("grams");
let broj;
Dugme.addEventListener("click", function (){
    Kg = Kg.value;
    Pounds.innerHTML = Kg * 2.20462;
    Ounces.innerHTML = Kg * 35.274;
    Grams.innerHTML = Kg * 1000;
});