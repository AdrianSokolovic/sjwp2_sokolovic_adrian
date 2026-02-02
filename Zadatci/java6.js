let BitcoinInput = document.getElementById("bitcoin");
let EteriumInput = document.getElementById("eterium");
let p_BitcoinD = document.getElementById("bit1");
let p_BitcoinE = document.getElementById("bit2");
let p_EteriumD = document.getElementById("ete1");
let p_EteriumE = document.getElementById("ete2");
let Button = document.querySelector("button");
let Bitcoin_dolari = 0;
let Bitcoin_euri = 0;
let Eterium_dolari = 0;
let Eterium_euri = 0;

Button.addEventListener("click", function (){
    Bitcoin_dolari = parseFloat(BitcoinInput.value) * 76791.52;
    Bitcoin_euri = parseFloat(BitcoinInput.value) * 64713.38;
    p_BitcoinD.innerHTML = Bitcoin_dolari + "$" 
    p_BitcoinE.innerHTML = Bitcoin_euri + "€"; 

    Eterium_dolari = parseFloat(EteriumInput.value) * 2240.49; 
    Eterium_euri = parseFloat(EteriumInput.value) * 1891.84;
    p_EteriumD.innerHTML = Eterium_dolari + "$";
    p_EteriumE.innerHTML = Eterium_euri + "€";
});
    
    
