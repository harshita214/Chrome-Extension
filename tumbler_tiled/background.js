let analyticsCode = 'UA-30926735-7';
let service, tracker, previous;



function startApp()
{
	///Initialize the Analytics service object with the name of your app.
	service = analytics.getService('tumblr_tiled_dashboard');
	service.getConfig().addCallback(initAnalyticsConfig);
	///Get a Tracker using your Google Analytics app Tracking ID.
	tracker = service.getTracker(analyticsCode);
	///Start timing...
	var timing = tracker.startTiming('Analytics Performance', 'Send Event');
	///...send elapsed time since we started timing.
	timing.send();
	service.getConfig().addCallback(function(config)
	{
		config.setTrackingPermitted(true);
	});
}

function initAnalyticsConfig(config)
{
	if (document.getElementById('settings-loading') != undefined)
		document.getElementById('settings-loading').hidden = true;

	if (document.getElementById('settings-loaded') != undefined)
		document.getElementById('settings-loaded').hidden = false;

	var checkbox = document.getElementById('tracking-permitted');
	if (checkbox != undefined)
	{
		checkbox.checked = config.isTrackingPermitted();
		checkbox.onchange = function()
		{
			config.setTrackingPermitted(checkbox.checked);
		};
	}
}

function reportPageview(name)
{
	tracker.sendAppView(name);
}

function reportEvent(category)
{
	tracker.sendEvent(category);
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse)
	{
		if (request.category == "pageview")
		{
			reportPageview(request.pageName);
		}
		else if (request.category == "fetch")
		{
			var requesturl = request.url;
			$.ajax(
			{
				url: requesturl,
				type: "GET",
				/*headers:
				{
					"User-Agent": "Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Mobile Safari/537.36"
				},*/
				/*foreSend: function(request)
				{
					request.setRequestHeader("User-Agent", "Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Mobile Safari/537.36");
				},*/
				success: function(igResponse)
				{
					chrome.tabs.query(
					{
						url: '*://www.tumblr.com/*'
					}, function(tabs)
					{
						chrome.tabs.sendMessage(tabs[0].id,
						{
							fetch: true,
							fetchurl: requesturl,
							content: igResponse
						});
					});
				}
			});
		}
		else
			reportEvent(request.category);
	}
);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)
{
	if (changeInfo.status == 'complete' && tab.active)
	{
		chrome.tabs.sendMessage(tab.id,
		{
			category: 'start'
		});
	}
})

window.onload = startApp;