var a;
var b;
var c;
var ans;
var ans2;
var dis = document.getElementById("dis");
var out1 = document.getElementById("out1");
var out2 = document.getElementById("out2");

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("calculate").addEventListener("click", calc);
  });

function calc() {
    a = parseFloat(document.getElementById("ain").value);
    b = parseFloat(document.getElementById("bin").value);
    c = parseFloat(document.getElementById("cin").value);

    
    disc = (Math.pow(b,2)-(4*(a*c)))
    ans = ((0 - b) + (Math.sqrt(((Math.pow(b,2)-(4*(a*c))))))) / (2 * a);
    ans2 = ((0 - b) - (Math.sqrt(((Math.pow(b,2)-(4*(a*c))))))) / (2 * a);

    if (isNaN(ans) == true) {
        out1.innerHTML = "No Real Solution";
        out2.innerHTML = " ";
    } else {
    dis.innerHTML = "D= " + disc;
    out1.innerHTML = "X1= " + ans;
    out2.innerHTML = "X2= " + ans2;
    }



}