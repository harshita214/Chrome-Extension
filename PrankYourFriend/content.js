
//JS code
console.log("Chrome extension go?");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.txt);
    const headers = document.getElementsByTagName('p');
    for(let i=0;i<headers.length;i++) {
    headers[i].innerText="nityodaynityodaynityodaynityoday";
}
}





/*"default_popup": "popup.html",*/

/* if(message.txt === "hello") {
    let paragraphs = document.getElementsByTagName('p');
    for( elt of paragraphs) {
        elt.style['background-color'] = '#FF00FF';
    }*/