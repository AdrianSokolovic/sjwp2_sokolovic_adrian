let PrviBrojPut = document.getElementById("prBr");
let DrugiBrojPut = document.getElementById("drBr");
let divRezultat = document.getElementById("rez");

//let value = parseInt(Input.value); nastaviti

let PrviBroj = PrviBrojPut.value;
let DrugiBroj = DrugiBrojPut.value;

let btnZbrajanje = document.getElementById("zbroji");
let btnOduzimanje = document.getElementById("oduzmi");
let btnDijeljenje = document.getElementById("podijeli");
let btnMnozenje = document.getElementById("pomnozi");

let rezultat = 0;

function Izracunaj(event) {
    event.preventDefault(); // ne osvježava stranicu na submit
}

function Plus(){
    rezultat = PrviBroj + DrugiBroj;
    divRezultat.innerHTML = rezultat;
}

function Minus(){
    rezultat = PrviBroj - DrugiBroj;
    divRezultat.innerHTML = rezultat; 
}

function Podijeljeno(){
    rezultat = PrviBroj / DrugiBroj;
    divRezultat.innerHTML = rezultat; 
}

function Puta(){
    rezultat = PrviBroj * DrugiBroj;
    divRezultat.innerHTML = rezultat; 
}

