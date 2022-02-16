class PostsHandler
{
	static PostAddedAttribute = 'post-added';
	static PostSelector = `[data-id]:not([${PostsHandler.PostAddedAttribute}])`;

	static PostsContainer;
	static Posts = [];

	static AddPosts()
	{
		$(PostsHandler.PostSelector, PostsHandler.PostsContainer).each((postIndex, post) =>
		{
			PostsHandler.AddPost($(post));
			LayoutHandler.AddToMasonry($(post));
		});
	}

	static AddPost($post)
	{
		$post.attr(PostsHandler.PostAddedAttribute, '');
		$post.css('margin-bottom', LayoutHandler.GutterWidth);

		let post = new Post($post);
		post.ResizeToWidth(Settings.ColumnWidth);

		PostsHandler.Posts.push(post);
	}

	static ShufflePosts()
	{
		PostsHandler.Posts = Common.ShuffleArray(PostsHandler.Posts);
	}
}