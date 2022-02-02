let clickBtn = document.getElementById('click-btn');

//detect current active tab 
clickBtn.addEventListener ('click', () => {
    chrome.tabs.query ({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage (tabs[0].id, {action: "highlight"})
    })
})

console.log(clickBtn);


