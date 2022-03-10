const currency_type = document.getElementById('currency_type');
const amount= document.getElementById("amount");
const format= document.getElementById('format');
const result =document.getElementById('result'); 

amount.addEventListener("input",()=>{
    console.log(amount.value);
})


// Fetching currency types from API
// fetch("https://api.frankfurter.app/currencies")
//     .then((data) => data.json())
//     .then((data) => {
//         display(data);
//     });

// display function to display data in dropdown menu
// function display(data){
//     const entries = Object.entries(data);
//     for(var i =0;i<entries.length;i++){
//         currency_type.innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`;
//     }
// }

// format button function
format.addEventListener("click",()=>{
    let currency_type_value= currency_type.value;
    let amount_value = amount.value;
    format_value(currency_type_value,amount_value);
})

// format_value function 
function format_value(currency_type_value, amount_value){
    let local;
    if(currency_type_value=="INR"){
        local ="en-IN";
    }
    else if(currency_type_value=="USD"){
        local="en-US";
    }
    else{
        local="ja-JP";
    }
    let ans = new Intl.NumberFormat(local, {style: "currency", currency: currency_type_value});
    result.value = `${ans.format(amount_value)}`;
}