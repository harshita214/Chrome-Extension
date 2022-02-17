class PageHandler
{
	static Dashboard = "dashboard";
	static Queue = "queue";
	static Blog = "blog";

	static GetPage()
	{
		let currentUrl = window.location.href.toLowerCase();
		if (currentUrl.indexOf(PageHandler.Dashboard) > 0)
		{
			return {
				Blog: null,
				Page: PageHandler.Dashboard
			};
		}
		else if (currentUrl.indexOf(PageHandler.Queue) > 0)
		{
			return {
				Blog: PageHandler.GetBlog(),
				Page: PageHandler.Queue
			};
		}

		//Not Handled
		return {
			Blog: null,
			Page: null
		};
	}

	static GetBlog()
	{
		let currentUrl = window.location.href.toLowerCase();
		if (currentUrl.indexOf(PageHandler.Dashboard) > 0)
			return null;

		let startIndex = currentUrl.indexOf(PageHandler.Blog) + PageHandler.Blog.length + 1;
		let endIndex = currentUrl.indexOf('/', startIndex);
		return currentUrl.substring(startIndex, endIndex);
	}

	static AddShuffleButton()
	{
		let $shuffleButton = $('<li>').append($('<a>').attr('href', '#').append($('<span>').text('Shuffle')));
		$shuffleButton.appendTo($('aside ul'));
		$shuffleButton.click(function()
		{
			PostsHandler.ShufflePosts();
		});
	}
}