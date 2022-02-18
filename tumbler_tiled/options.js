class Options
{
	static OptionButton;

	static Initialize()
	{
		let $headerButton = $('header > div > button');
		let classes = $headerButton.prev().attr('class');
		Options.OptionButton = $("<div class='" + classes + "'> \
			<span id='TD_Setting_Button' style='width: 23px; height: 23px; filter: brightness(0.35);'></span> \
			</div>");

		Options.OptionButton.insertBefore($headerButton);

		$('#TD_Setting_Button').click(function()
		{
			$('body').append("<div id='TD_Settings_Container' style='display: none;' name='Tiled Dashboard - Settings'></div> \
    					  <div id='TD_Settings_Background' style='display: none;'></div>");

			Options.Render();
			Options.LoadOptions();

			$('#TD_Settings_Save').click(Options.SaveOptions);
			$('#TD_Settings_Container').fadeIn();
			$('#TD_Settings_Background').fadeIn();
			$('#TD_Settings_Background').click(function()
			{
				$('#TD_Settings_Container').fadeOut('slow', function()
				{
					$('#TD_Settings_Container').remove();
				});

				$('#TD_Settings_Background').fadeOut('slow', function()
				{
					$('#TD_Settings_Background').remove();
				});

				chrome.runtime.sendMessage(
				{
					category: 'setup_options_not_saved'
				});
			});

			chrome.runtime.sendMessage(
			{
				category: 'Setup_options_opened'
			});
		});
	}

	static LoadOptions()
	{
		if (Settings.SettingIsEnabled == true)
			$("#IsEnabled").prop("checked", Settings.SettingIsEnabled);

		$("#columnWidth").val("" + Settings.ColumnWidth);
		$("#gutterWidth").val("" + Settings.Gutter);
		$("#borderString").val("" + Settings.Border);
		if (Settings.RemoveText == true)
			$("#removeTextCheckBox").prop("checked", Settings.RemoveText);

		if (Settings.RefreshEnabled == true)
			$("#refreshDashboardCheckBox").prop("checked", Settings.RefreshEnabled);

		$("#refreshNumberPosts").val("" + Settings.RefreshNumber);
		if (Settings.InfiniteScrollEnabled == true)
			$("#infiniteScrollEnabledCheckBox").prop("checked", Settings.InfiniteScrollEnabled);

		if (Settings.ShowNoLikes == true)
			$("#youMayLikeCheckBox").prop("checked", Settings.ShowNoLikes);

		if (Settings.FastLoadEnabled == true)
			$("#fastLoadDashboardCheckBox").prop("checked", Settings.FastLoadEnabled);

		$("#maximumPostHeight").val("" + Settings.MaximumContentHeight);
		$("#maximumConcurrentPageLoads").val("" + Settings.MaximumConcurrentPageLoads);
		$("#helpWithIG").prop('checked', Settings.HelpWithIG);
	}

	static SaveOptions()
	{
		var currentIsEnabled = Settings.SettingIsEnabled;
		var currentWidth = Settings.ColumnWidth;
		var currentGutter = Settings.Gutter;
		var currentBorder = Settings.Border;
		var currentText = Settings.RemoveText;
		var currentMaximumContentHeight = Settings.MaximumContentHeight;
		if (Settings.MaximumConcurrentPageLoads < 1) return false;
		localStorage.setItem('IsEnabled', $("#IsEnabled").prop("checked"));
		localStorage.setItem('columnWidth', $("#columnWidth").val());
		localStorage.setItem('gutterWidth', $("#gutterWidth").val());
		localStorage.setItem('borderString', $("#borderString").val());
		localStorage.setItem('removeTextCheckBox', $("#removeTextCheckBox").prop("checked"));
		localStorage.setItem('refreshDashboardCheckBox', $("#refreshDashboardCheckBox").prop("checked"));
		localStorage.setItem('refreshNumberPosts', $("#refreshNumberPosts").val());
		localStorage.setItem('infiniteScrollEnabled', $("#infiniteScrollEnabledCheckBox").prop("checked"));
		localStorage.setItem('youMayLikeCheckBox', $("#youMayLikeCheckBox").prop("checked"));
		localStorage.setItem('fastLoadDashboardCheckBox', $("#fastLoadDashboardCheckBox").prop("checked"));
		localStorage.setItem('maximumPostHeight', $("#maximumPostHeight").val());
		localStorage.setItem('maximumConcurrentPageLoads', $("#maximumConcurrentPageLoads").val());
		localStorage.setItem('IsHelpWithIG', $("#helpWithIG").prop('checked'));

		Settings.LoadSettings();
		LayoutHandler.Initialize();

		$("#TD_Settings_Container").fadeOut("slow", function()
		{
			for (let post of PostsHandler.Posts)
			{
				post.ResizeToWidth(Settings.ColumnWidth);
			}
			$("#TD_Settings_Container").remove();
		});

		$("#TD_Settings_Background").fadeOut("slow", function()
		{
			$("#TD_Settings_Background").remove();
		});

		chrome.runtime.sendMessage(
		{
			category: "setup_options_saved"
		});
	}

	static Render()
	{
		var content = "<h2>General Settings</h2> \
					<section> \
						<table> \
							<tr> \
								<td>Column Width:</td> \
								<td><input type='text' id='columnWidth'></td> \
								<td></td> \
							</tr> \
							<tr> \
								<td>Gutter Width:</td> \
								<td><input type='text' id='gutterWidth'></td> \
								<td>(value in px)</td> \
							</tr> \
						</table> \
					</section> \
					<div id='statusText'></div> \
					<button id='TD_Settings_Save'>Save</button>";


		/*
		Weitere Settings:
				<tr> \
					<td>Posts border:</td> \
					<td><input type='text' id='borderString'></td> \
					<td>(Format: 'width color type')</td> \
				</tr> \
				<tr> \
					<td>Remove text:</td> \
					<td><input type='checkbox' id='removeTextCheckBox'></td> \
					<td>(Removes text below photo- and video posts if checked)</td> \
				</tr> \
				<tr> \
					<td>Refresh on Dashboard:</td> \
					<td><input type='checkbox' id='refreshDashboardCheckBox'></td> \
					<td>(Adds a 'refresh page' button at the bottom of the page on the dashboard)</td> \
				</tr> \
				<tr> \
					<td>Enable Refresh after:</td> \
					<td><input type='text' id='refreshNumberPosts'></td> \
					<td>(value in Number of Posts)</td> \
				</tr> \
				<tr> \
					<td>Enable infinite Scroll:</td> \
					<td><input type='checkbox' id='infiniteScrollEnabledCheckBox'></td> \
					<td>(enables infinite Scroll)</td> \
				</tr> \
				<tr> \
					<td>Remove 'you may also like'</td> \
					<td><input type='checkbox' id='youMayLikeCheckBox'></td> \
					<td>(When liking a post, no additional 'popup' appeard with posts you may like)</td> \
				</tr> \
				<tr> \
					<td>Fast Dashboard loading:</td> \
					<td><input type='checkbox' id='fastLoadDashboardCheckBox'></td> \
					<td>(Fast-loads additional Pages on the Dashboard<br>Attention: this could skip some posts)</td> \
				</tr> \
				<tr> \
					<td>Maximum Post Content Height:</td> \
					<td><input type='text' id='maximumPostHeight'></td> \
					<td>(value in px - '-1' for unlimited)</td> \
				</tr> \
				<tr> \
					<td>Maximum concurrent Page loads:</td> \
					<td><input type='text' id='maximumConcurrentPageLoads'></td> \
					<td>(must be > than 0)</td> \
				</tr> \
				<tr> \
					<td>Help Creator with an IG RssFeed?:</td> \
					<td><input type='checkbox' id='helpWithIG'></td> \
					<td>Please keep this one active, you'll help create an IG - Rss Feed Generator</td> \
				</tr> \
		*/

		let $settingsContent = $(content);
		$('#TD_Settings_Container').append($settingsContent);
	}
}