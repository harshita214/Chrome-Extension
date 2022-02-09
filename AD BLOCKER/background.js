const defaultFilters = [
	"*://*.ebay.com/*",
	"*://*.pune.craigslist.org//*",
	"*://*.gumtree.com/*",
	"*://*.oodle.com/*",
	"*://*.adpost.com/*",
	"*://*.hoobly.com/*",
	"*://*.salespider.com/*",
	"*://*.adsglobe.com/*",
	"*://*.yakaz.com/*",
	"*://*.google-analytics.com/*",
	"*://*.doubleclick.net/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)