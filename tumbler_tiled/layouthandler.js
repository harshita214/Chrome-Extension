class LayoutHandler
{
	static LayoutContainer;

	static Initialize()
	{
		$(PostsHandler.PostsContainer).addClass('posts-container');
		$(PostsHandler.PostsContainer).masonry(
		{
			itemSelector: `[data-id][${PostsHandler.PostAddedAttribute}]`,
			columnWidth: Settings.ColumnWidth,
			gutter: Settings.Gutter,
			isAnimated: false,
			isFitWidth: true,
			transitionDuration: 0
		});
	}

	static UpdateLayout()
	{
		LayoutHandler.Initialize();
		$(PostsHandler.PostsContainer).masonry();
	}

	static AddToMasonry($post, prepend = false)
	{
		$(PostsHandler.PostsContainer).masonry(prepend ? 'prepended' : 'appended', $post);
	}
}