let inp_n = document.getElementById("n");
let inp_m = document.getElementById("m");
let btn = document.querySelector("button");
let result = document.getElementById("result");
let n;
let m;
let lambda;

btn.addEventListener("click", function(){
    n = parseInt(inp_n.value);
    m = parseInt(inp_m.value);
    lambda = 6.626*Math.pow(10, -34) / (m * 9.10938356 * Math.pow(10, -31) * n);
    result.innerHTML = "Valna duljina je: " + lambda + " m";
});