let Kamen = document.getElementById("kamen"); 
let Skare = document.getElementById("skare");
let Papir = document.getElementById("papir");
let Rezultat = document.querySelector("p");
let Odabir;
let Random = Math.floor(Math.random() * 3);

Kamen.addEventListener("click", function(){
    Odabir = 0;

    if (Random == 0) {
        Rezultat.innerHTML = "Ti: Kamen";
        Rezultat.innerHTML += "Protivnik: Kamen";
        Rezultat.innerHTML += "Neriješeno!";
    }
    if (Random == 1) {
        Rezultat.innerHTML = "Pobjeda"
    }
    if (Random == 2) {
        Rezultat.innerHTML = "Poraz"
    }
    Random = Math.floor(Math.random() * 3);
});

Skare.addEventListener("click", function(){
    Odabir = 1;
    if (Random == 0) {
        Rezultat.innerHTML = "Poraz"
    }
    if (Random == 1) {
        Rezultat.innerHTML = "Neriješeno"
    }
    if (Random == 2) {
        Rezultat.innerHTML = "Pobjeda"
    }
    Random = Math.floor(Math.random() * 3);
});

Papir.addEventListener("click", function(){
    Odabir = 2;
    if (Random == 0) {
        Rezultat.innerHTML = "Pobjeda"
    }
    if (Random == 1) {
        Rezultat.innerHTML = "Poraz"
    }
    if (Random == 2) {
        Rezultat.innerHTML = "Neriješeno"
    }
    Random = Math.floor(Math.random() * 3);
});

