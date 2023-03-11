



document.querySelector("button").addEventListener("click",generateQR);

function generateQR(){
    let data = document.querySelector("textarea").value;
    let baseURL = 'https://api.qrserver.com/v1/create-qr-code/';
    let url = `${baseURL}?data=${data}`;
    document.querySelector("img").src = url;
}
