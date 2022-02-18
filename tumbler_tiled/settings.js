class Settings
{
	static GetNumber(value)
	{
		return parseInt(value, 10);
	}

	// Retrieve the Dimension of the Value
	static GetDimension(value)
	{
		return value.substring((this.GetNumber(value) + "").length);
	}

	static GetBoolSetting(settingName, defaultValue)
	{
		var settingTemp = localStorage.getItem(settingName);
		if (settingTemp === null)
			return defaultValue;
		else
			return (settingTemp == 'true');
	}

	static GetTextSetting(settingName, defaultValue)
	{
		var settingTemp = localStorage.getItem(settingName);
		if (settingTemp === null)
			return defaultValue;
		else
			return settingTemp;
	}

	static GetIntegerSetting(settingName, defaultValue)
	{
		var settingTemp = localStorage.getItem(settingName);
		if (settingTemp === null)
			return defaultValue;
		else
			return this.GetNumber(settingTemp);
	}

	static GetDateSetting(settingName, defaultValue)
	{
		var settingTemp = localStorage.getItem(settingName);
		if (settingTemp === null || settingTemp === "NaN")
			return defaultValue;
		else
			return new Date(localStorage.getItem("LastFetchDateTime"));
	}

	static get LastFetchDateTime()
	{
		var newValue = this.GetDateSetting('LastFetchDateTime', new Date(2000, 0, 1));
		this.LastFetchDateTime = newValue;
		return newValue;
	}

	static set LastFetchDateTime(value)
	{
		localStorage.setItem('LastFetchDateTime', value.toString())
	}

	static LoadSettings()
	{
		this.SettingIsEnabled = this.GetBoolSetting('IsEnabled', true);
		this.ColumnWidth = this.GetIntegerSetting('columnWidth', '400');
		this.Gutter = this.GetIntegerSetting('gutterWidth', 10);
		this.Border = this.GetTextSetting('borderString', '1px grey solid');
		this.RemoveText = this.GetBoolSetting('removeTextCheckBox', false);
		this.RefreshEnabled = this.GetBoolSetting('refreshDashboardCheckBox', true);
		this.RefreshNumber = this.GetIntegerSetting('refreshNumberPosts', 200);
		this.InfiniteScrollEnabled = this.GetBoolSetting('infiniteScrollEnabled', true);
		this.ShowNoLikes = this.GetBoolSetting('youMayLikeCheckBox', true);
		this.FastLoadEnabled = this.GetBoolSetting('fastLoadDashboardCheckBox', false);
		this.MaximumContentHeight = this.GetIntegerSetting('maximumPostHeight', -1);
		this.MaximumConcurrentPageLoads = this.GetIntegerSetting('maximumConcurrentPageLoads', 2);
		this.HelpWithIG = this.GetBoolSetting('IsHelpWithIG', true);
		this.LastFetchDateTime = this.GetDateSetting('LastFetchDateTime', new Date(2000, 0, 1));
	}
}