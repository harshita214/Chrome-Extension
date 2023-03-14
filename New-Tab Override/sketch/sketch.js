
function setup (){
noCanvas();
console.log("hi");
let z= floor(random(4))+1;

function img(z){

    document.querySelector("body").classList.add('game'+z);
}
img(z);
}
