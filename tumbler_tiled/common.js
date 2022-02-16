class Common
{
	static ShuffleArray(array)
	{
		let currentIndex = array.length;
		let temporaryElement;

		while (currentIndex > 0)
		{
			let randomIndex = Math.floor(Math.random() * currentIndex--);

			temporaryElement = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryElement;
		}

		return array;
	}
}