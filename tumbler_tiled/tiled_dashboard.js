class TiledDashboard
{
	static Instance;

	constructor()
	{
		if ($('main [data-id]:first-child').length > 0)
			this.Initialize();
		else
		{
			let containerObserver = Observer.CreateContainerLoadedObserver('main [data-id]:first-child', this.Initialize);
			containerObserver.Observe($('#base-container'));
		}

		TiledDashboard.Instance = this;
	}

	Initialize()
	{
		Settings.LoadSettings();
		Options.Initialize();
		IGHelper.Initialize();

		PostsHandler.PostsContainer = $('main [data-id]:first-child').parent();

		LayoutHandler.Initialize();
		PostsHandler.AddPosts();

		let layoutResizeObserver = Observer.CreateResizeObserver(LayoutHandler.UpdateLayout);
		layoutResizeObserver.Observe($('body'));

		let postsAddedObserver = Observer.CreateMutationObserver(PostsHandler.AddPosts);
		postsAddedObserver.Observe(PostsHandler.PostsContainer);

		if (this !== undefined)
			this.SetupPageSpecificControls();
		else
			TiledDashboard.Instance.SetupPageSpecificControls();
	}

	SetupPageSpecificControls()
	{
		let pageInfo = PageHandler.GetPage();
		if (pageInfo.Page == PageHandler.Queue)
			PageHandler.AddShuffleButton();
	}
}