let duljina = document.getElementById("unos");


let BrojSlova = document.querySelector("p");

duljina.addEventListener("keydown", function (){
    broj = duljina.value.length;
    BrojSlova.innerHTML = "Letter Count: " + broj;
});