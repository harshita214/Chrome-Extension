class Observer
{
	_observer;

	constructor()
	{}

	get Config()
	{
		return {
			attributes: true,
			childList: true,
			subtree: true
		}
	}

	static CreateContainerLoadedObserver(selector, Handler)
	{
		let newObserver = new Observer();
		let initialized = false;
		newObserver._observer = new MutationObserver(function(mutations)
		{
			mutations.forEach(function(mutation)
			{
				if (mutation.addedNodes.length > 0 && $(selector).length > 0 && initialized == false)
				{
					initialized = true;
					Handler();
					newObserver.Stop();
				}
			});
		});

		return newObserver;
	}

	static CreateMutationObserver(Handler)
	{
		let newObserver = new Observer();
		newObserver._observer = new MutationObserver(function(mutations)
		{
			Observer.AddedNodesHandler(mutations, Handler);
		});
		return newObserver;
	}

	static CreateResizeObserver(Handler)
	{
		let newObserver = new Observer();
		newObserver._observer = new ResizeObserver(entries => Handler(entries));
		return newObserver;
	}

	static AddedNodesHandler(mutations, Handler)
	{
		mutations.forEach(function(mutation)
		{
			if (mutation.addedNodes.length > 0)
				Handler(mutation.addedNodes);
		});
	}

	Observe(target)
	{
		let observationTarget;
		if (typeof target == "string")
			observationTarget = document.querySelector(target);
		else
			observationTarget = target[0];

		this._observer.observe(observationTarget, this.Config);
	}

	Stop()
	{
		this._observer.disconnect();
	}
}