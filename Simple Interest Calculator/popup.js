const form = document.getElementById('form');
const principal = document.getElementById('principal');
const rate = document.getElementById('rate');
const time = document.getElementById('time');
const resultInterest = document.getElementById('resultInterest');
const resultAmount = document.getElementById('resultAmount');
const resultElement = document.getElementById('result');

let p = 0;
let r = 0;
let t = 0;
let interest = 0;
let amount = 0;

principal.addEventListener('input', (e) => {
    resultElement.classList.add('hide');
})


const calculateInterest = () => {
    p = parseFloat(principal.value);
    r = parseFloat(rate.value);
    t = parseFloat(time.value);

    interest = ((p*r*t)/100);
    resultInterest.innerText = `₹ ${interest.toFixed(2)}`;
}

const calculateAmount = () => {
    amount = (p + interest);
    resultAmount.innerText = `₹ ${amount.toFixed(2)}`;
}


console.log("form")
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    resultElement.classList.remove('hide');
    calculateInterest();
    calculateAmount();
})