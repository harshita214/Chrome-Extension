class Post
{
	_element;

	constructor($postElement)
	{
		this._element = $postElement;
	}

	ResizeToWidth(width)
	{
		$('article', this._element).css('width', `${width}px`);
	}
}