let PrviBrojPut = document.getElementById("prBr");
let DrugiBrojPut = document.getElementById("drBr");
let divRezultat = document.getElementById("rez");

let btnZbrajanje = document.getElementById("zbroji");
let btnOduzimanje = document.getElementById("oduzmi");
let btnDijeljenje = document.getElementById("podijeli");
let btnMnozenje = document.getElementById("pomnozi");
let btnAC = document.getElementById("ac");

function Plus(){
    let PrviBroj = parseInt(PrviBrojPut.value);
    let DrugiBroj = parseInt(DrugiBrojPut.value);
    let rezultat = PrviBroj + DrugiBroj;
    divRezultat.innerHTML = rezultat;
}

function Minus(){
    let PrviBroj = parseInt(PrviBrojPut.value);
    let DrugiBroj = parseInt(DrugiBrojPut.value);
    let rezultat = PrviBroj - DrugiBroj;
    divRezultat.innerHTML = rezultat; 
}

function Podijeljeno(){
    let PrviBroj = parseInt(PrviBrojPut.value);
    let DrugiBroj = parseInt(DrugiBrojPut.value);
    let rezultat = PrviBroj / DrugiBroj;
    divRezultat.innerHTML = rezultat; 
}

function Puta(){
    let PrviBroj = parseInt(PrviBrojPut.value);
    let DrugiBroj = parseInt(DrugiBrojPut.value);
    let rezultat = PrviBroj * DrugiBroj;
    divRezultat.innerHTML = rezultat; 
}

function Brisanje(){
    divRezultat.innerHTML = ""; 
}