
//JS code
console.log("Chrome extension go?");

chrome.runtime.onMessage.addListener(gotMessage);

let funnyim = [ "https://pbs.twimg.com/profile_images/1287289686839291905/HI3zi0AC_400x400.jpg" ];
const imgs = document.getElementsByTagName("img");

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    const headers = document.getElementsByTagName('p');
    for(let i=0;i<headers.length;i++) {
    headers[i].innerText="nityodaynityodaynityodaynityoday";
    }
    for(let i=0; i<imgs.length; i++)
    {
        const randomImg = Math.floor(Math.random() * funnyim.length);
        imgs[i].src = funnyim[randomImg];
    }
}





/*"default_popup": "popup.html",*/

/* if(message.txt === "hello") {
    let paragraphs = document.getElementsByTagName('p');
    for( elt of paragraphs) {
        elt.style['background-color'] = '#FF00FF';
    }*/