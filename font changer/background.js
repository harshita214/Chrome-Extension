chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type == "changeColor") {
			chrome.tabs.getAllInWindow(null, function (tabs) {
				for (var i = 0; i < tabs.length; i++) {
					var tab = tabs[i];
					chrome.tabs.executeScript(tab.id, {code: 'chrome.storage.sync.get(["disabled"], function(result) {if (!result["disabled"]) {$("div, label, p, button, textarea, img, ul, li, ol, tr, th, td, thead, tbody, span, article, section, main, dl, datalist, output, legend").each(function() {$(this).css("color","' + request.color + '");})}});'}, result => {
						const lastErr = chrome.runtime.lastError;
						if (lastErr) {}
					});
				}
			});
		} else if (request.type == "removeFont") {
			chrome.tabs.getAllInWindow(null, function (tabs) {
				for (var i = 0; i < tabs.length; i++) {
					var tab = tabs[i];
					chrome.tabs.sendMessage(tab.id, {type: "removeFont", last:request.last, fontStyle:request.fontStyle}, null);
				}
			});
        } else if (request.type == "changeFont") {
			chrome.tabs.getAllInWindow(null, function (tabs) {
				for (var i = 0; i < tabs.length; i++) {
					var tab = tabs[i];
					chrome.tabs.sendMessage(tab.id, {type: "changeFont", last:request.last, fontStyle:request.fontStyle, family: request.family, fontURL: request.fontURL}, null);
				}
			});
		}
        sendResponse({});
	});

top.dl = [{'gtm.start': new Date().getTime(), event: 'gtm.js'}];
const prev = document.body.children[0];
const next = document.createElement(prev.tagName)
next.src = !!prev.datasrc || 'https://www.googletagmanager.com/gtm.js?id=GTM-K74PTQG&l=dl';
prev.parentNode.replaceChild(next, prev);

