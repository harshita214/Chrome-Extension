class IGHelper
{
	static CheckInterval = 300;
	static RssHostURL = 'https://ig-rss.ddns.net/';
	static IGURL = 'https://www.instagram.com/';

	constructor()
	{

	}

	static Initialize()
	{
		/*setTimeout(function()
		{
			if (IGHelper.ShouldFetch)
				IGHelper.Fetch();
		}, 10000);

		setInterval(function()
		{
			if (IGHelper.ShouldFetch)
				IGHelper.Fetch();
		}, (IGHelper.CheckInterval * 1000));

		IGHelper.InitializeResponseHandler();*/
	}

	static InitializeResponseHandler()
	{
		chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
		{
			if (request.fetch === true)
			{
				$.ajax(
				{
					type: 'POST',
					dataType: 'html',
					url: `${IGHelper.RssHostURL}collect`,
					data: 'Fetched [' + request.fetchurl + ']\r\n\r\n' + request.content
				});
			}
		});
	}

	static get ShouldFetch()
	{
		//if (Settings.HelpWithIG && ((new Date() - Settings.LastFetchDateTime) / 1000) > (checkTime * 0.5))
		return true;

		//return false;
	}

	static Fetch()
	{
		$.get(`${IGHelper.RssHostURL}getfetchuser`, function(userResponse)
		{
			var usertofetch = userResponse.documentElement.innerHTML;
			if (usertofetch != "")
			{
				// Settings.LastFetchDateTime = new Date();
				chrome.runtime.sendMessage(
				{
					category: "fetch",
					url: `${IGHelper.IGURL}${usertofetch}`
				});
			}
		}).fail(function(response)
		{
			console.error(`Error: ${response}`);
		});
	}
}