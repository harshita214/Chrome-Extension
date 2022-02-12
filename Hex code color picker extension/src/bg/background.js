// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.type == 'reInit')
		init(sender.tab);
    if(request.type == 'copy')
        copyTextToClipboard(request.text)
	// sendResponse();
	return true;
});

chrome.browserAction.onClicked.addListener(function(tab) {
    init(tab);
});

function get_screenshot(cb) {
        try {
            chrome.tabs.captureVisibleTab(null, {
                "format": "png"
            }, function(data) {
                if (chrome.runtime.lastError) {
                    return cb(false);
                }
                cb({type: "image_data", data: data });
            })
        } catch (e) {
            chrome.tabs.captureVisibleTab(null, function(data) {
                if (chrome.runtime.lastError) {
                    return cb(false);
                }
                cb({type: "image_data", data: data });
            })
        }
    }


function init(tab){
	chrome.tabs.executeScript(tab.id, {
        file: "/src/content/inject.js"
    }, function() {
		get_screenshot((e)=>{
			if(e) chrome.tabs.sendMessage(tab.id, e);
		})
    })
}

function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.blur();
  document.body.removeChild(copyFrom);
}

chrome.browserAction.onClicked.addListener(init);