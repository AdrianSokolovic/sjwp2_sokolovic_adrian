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

    if(isNaN(value) || value < 1 || value > 100){
        Msg.innerHTML = "Unesi broj između 1 i 100";
        Msg.style.color = "Crimson";
        return;
    }
    pokusaji++;
    updateAttempts();

    if (value === random_Number){
        Msg.innerHTML = "Pogodak. broj je " + random_Number;
        Msg.style.color = "green";
    }
    else if(value < random_Number){
        Msg.innerHTML = "Premalo";
        Msg.style.color = "Orange";
    }
    else{
        Msg.innerHTML = "Previše";
        Msg.style.color = "Orange";
    }
}

function newGame() {
    random_Number = randNumber();
    pokusaji = 0;
    Input.value = "";
    Msg.innerHTML = "Nova igra";
    Msg.style.color = "Black";
    updateAttempts();
    Input.focus();
}