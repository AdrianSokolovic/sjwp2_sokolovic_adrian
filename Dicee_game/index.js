let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

let randomNumber3 = Math.floor(Math.random()*6)+1;
let randomImageSource3 = "images/dice" + randomNumber3 + ".png";
document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

let randomNumber4 = Math.floor(Math.random()*6)+1;
let randomImageSource4 = "images/dice" + randomNumber4 + ".png";
document.querySelectorAll("img")[3].setAttribute("src", randomImageSource4);

let p1 = randomNumber1 + randomNumber2;
let p2 = randomNumber3 + randomNumber4;

document.querySelectorAll("h2")[0].innerHTML = p1;
document.querySelectorAll("h2")[1].innerHTML = p2;
if (p1 > p2){
    document.querySelectorAll("h1")[0].innerHTML = "🎉Player 1 Wins!🎉";
}
else if (p1 < p2){
    document.querySelectorAll("h1")[0].innerHTML = "🎉Player 2 Wins!🎉";
}
else{
    document.querySelectorAll("h1")[0].innerHTML = "DRAW😒";
}