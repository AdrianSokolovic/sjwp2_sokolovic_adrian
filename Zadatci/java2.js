let brojac = 0;
let Broj = document.getElementById("broj");
let Plus = document.getElementById("plus");
let Minus = document.getElementById("minus");

Plus.addEventListener("click", function (){
    brojac++;
    Broj.innerHTML = brojac;
});

Minus.addEventListener("click", function (){
    brojac--;
    Broj.innerHTML = brojac;
});