function randNumber() {
    return Math.floor(Math.random()*100)+1;
}

let random_Number = randNumber();
let pokusaji = 0;

let Input = document.getElementById("guess");
let Msg = document.getElementById("msg");
let Attempts = document.getElementById("attempts");

function updateAttempts() {
    Attempts.innerHTML = "Pokušaji: " + pokusaji;
}

updateAttempts();

function checkNumber(event) {
    event.preventDefault(); // ne osvježava stranicu na submit
    let value = parseInt(Input.value);
   // console.log(value);
    
}

function newGame() {

}