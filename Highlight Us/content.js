chrome.runtime.onMessage.addListener (
    (request, sender, sendResponse) => {
        console.log(request);
        if (request.action === "highlight") {
            
            console.log('Hello World');

            let noLinks = document.links;
            for (let i = 0; i < noLinks.length; i++) {
                noLinks[i].style = "background-color: yellow;"
            }
        }
    }
)