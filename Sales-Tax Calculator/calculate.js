
console.log("hi");
document.querySelector("#submit").addEventListener("click",function(){
    let subtotal= parseFloat(document.getElementById("income").value);
    let taxtotal= parseFloat(document.querySelector(".tax1").value); 
   let salestax = subtotal + (subtotal * (taxtotal / 100));
    document.getElementById('tax').innerHTML = salestax;
    return salestax;
})