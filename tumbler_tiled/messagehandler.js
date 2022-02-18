chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	if (request.category = 'start')
	{
		new TiledDashboard();
		return;
	}
	else if (request.category == 'pageview')
	{
		reportPageview(request.pageName);
	}
	else if (request.category == 'fetch')
	{
		var url = request.url;
		$.get(url, function(igResponse)
		{
			chrome.tabs.query(
			{
				url: '*://www.tumblr.com/*'
			}, function(tabs)
			{
				chrome.tabs.sendMessage(tabs[0].id,
				{
					fetch: true,
					fetchurl: url,
					content: igResponse
				});
			});
		});
	}
});