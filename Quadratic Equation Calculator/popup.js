

function quadraticEquation() {
        
    var formObject,a,b,c;
    formObject=document.getElementById("mainForm");

    a = parseFloat(formObject.elements["aValue"].value);
    b = parseFloat(formObject.elements["bValue"].value);
    c = parseFloat(formObject.elements["cValue"].value);
    var discriminant = (b*b)-(4*a*c);

    if (discriminant < 0){
    document.getElementById("root1").textContent = "X = Imaginary";
    document.getElementById("root2").textContent = "X = Imaginary";
  }else{

  var root1 = ((-1*b) + Math.sqrt(discriminant))/(2*a);

  if(discriminant == 0){
    document.getElementById("root1").textContent = "X = " + root1;
    document.getElementById("root2").textContent  = "X = " + root1;
  }else{

    var root2 = ((-1*b) - Math.sqrt(discriminant))/(2*a);
     
    document.getElementById("root1").textContent = "X = " + root1;
    document.getElementById("root2").textContent = "X = " + root2;

  }
  
    
  }
    

  }
document.addEventListener('DOMContentLoaded', function() {
var link = document.getElementById('execute');
// onClick's logic below:
link.addEventListener('click', function() {
    quadraticEquation();
});
});
