let Dugme = document.getElementsByClassName("myButton")[0];
let brojac = 0;

Dugme.addEventListener("click", function(){
    if (brojac % 2 == 0){
        document.body.style.backgroundColor = "red"
    } else{
        document.body.style.backgroundColor = "blue"
    }
    brojac++;
});

