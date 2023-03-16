//get reference to first select element
const currencyEl_one = document.getElementById('currency-one');

//get reference to second select element
const currencyEl_two = document.getElementById('currency-two');

//get reference to first input element
const amountEl_one = document.getElementById('amount-one');

//get reference to second input element
const amountEl_two = document.getElementById('amount-two');

//get reference to rate
const rateEl = document.getElementById('rate');

//get reference to swap button
const swap = document.getElementById('swap');


function calculate() {
  //getting value of first select
  const currency_one = currencyEl_one.value;

  //get reference to second select
  const currency_two = currencyEl_two.value;

  //fetching the api
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);

      //searching for the second select element from the api object 
      const rate = data.rates[currency_two];

      //changing the rate text accordingly
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      //changing the second input according to the rate
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

//event for the first select element
currencyEl_one.addEventListener('change', calculate);

//event for the first input
amountEl_one.addEventListener('input', calculate);

//event for the second select element
currencyEl_two.addEventListener('change', calculate);

//event for the second input
amountEl_two.addEventListener('input', calculate);

//eveny for swap button
swap.addEventListener('click', function() {
  const temp = currencyEl_one.value;

  currencyEl_one.value = currencyEl_two.value;

  currencyEl_two.value = temp;
  calculate();
});

calculate();