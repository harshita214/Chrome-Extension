


const totalamount = document.getElementById("amount");
const interestRate=document.getElementById("interest");
const year = document.getElementById("time");


const calcbtn= document.getElementById("calc");
calcbtn.addEventListener("click",calculate);

const delbtn= document.getElementById("reset");
delbtn.addEventListener("click",resetall);


const result= document.createElement('h2');
result.classList.add("result");

function calculate(){
    const p =totalamount.value;
const r = interestRate.value;
const t = year.value;
const amount = p * (Math.pow((1 + (r / 100)), (t)));
  // const interest = amount - p;
  if(amount>0 && p>0 && r>0 && t>0){
    result.innerHTML="total amount will be "+ amount;
    document.body.appendChild(result);

    

  }
  else{
    result.innerHTML=" Something wrong ";
    document.body.appendChild(result);
  }
 




};

function resetall(){
    totalamount.value='';
    interestRate.value='';
    year.value='';
  let results = document.getElementsByClassName("result");
  results[0].parentNode.removeChild(results[0]);

   
 


};


