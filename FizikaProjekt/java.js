let inp_n = document.getElementById("n");
let inp_m = document.getElementById("m");
let btn = document.querySelector("button");
let result = document.getElementById("result");
let n;
let m;
let lambda;
let h = 6.626*Math.pow(10, -34);
let c = 3*Math.pow(10, 8);
let eV = 1.602*Math.pow(10, -19);

btn.addEventListener("click", function(){
    n = parseInt(inp_n.value);
    m = parseInt(inp_m.value);
    lambda = (h*c*(m*m)*(n*n))/(13.6*eV*(n*n - m*m));
    result.innerHTML = "Valna duljina je: " + lambda + " m";
});