let generateBtn = document.querySelector("#shortURL");
let api = document.querySelector("#myurl");
let toastError = document.querySelector('.toast-error')
let toastSuccess = document.querySelector('.toast-success')
let loader = document.querySelector('.loading')
const url = new URL("https://t.ly/api/v1/link/shorten"); //api url endpoint
let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}

generateBtn.addEventListener('click', () => {
    if (api.value) {
        loader.classList.remove('d-hide')
        chrome.storage.local.get(['API'], function (result) //getting our key
        { 
            fetch(url, {  //here we are passing our url
                method: "POST", //it's going to be a post method
                headers: headers,
                body: JSON.stringify({
                    "long_url": api.value, //url which user is going to give
                    "domain": "https://t.ly/",
                    "api_token": result.API //what are value we are getting we are passing it here 
                })
            }).then(response => response.json())
                .then(json => {
                    loader.classList.add('d-hide')
                    toastSuccess.classList.remove('d-hide');
                    toastSuccess.textContent = json.short_url; //from the json response 
                })
                .catch(err => { alert(err) })
        });
    } else {
        toastError.classList.remove('d-hide')
        setTimeout(() => {
            toastError.classList.add('d-hide')
        }, 2500)
    }
})