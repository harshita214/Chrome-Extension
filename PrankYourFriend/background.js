
console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {

    let message= {
        txt:"hello"
    }
    chrome.tabs.sendMessage(tab.id,message);
}
