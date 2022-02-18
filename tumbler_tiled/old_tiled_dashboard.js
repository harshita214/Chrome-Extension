// Helper Arrays
var $existingPosts = [];
// Observer Objects
var reviewObserver;
var newPageContainerObserver;
var newPostsContainerObserver;
var postsContainerObserver;
var newPostButtonsContainerObserver;
var confirmReview = false;
var checkTime = 300;
var resizeObserver;

// At the Start, add the injectedCode to the Page
(function()
{
	// var pagination_loader = document.getElementById('auto_pagination_loader');
	// if (pagination_loader != undefined)
	// 	pagination_loader.parentElement.removeChild(pagination_loader)
	var script = document.createElement('script');
	script.id = 'newRemoveChildScript';
	script.src = chrome.extension.getURL("injectedCode.js");
	$("head").append(script);
	document.querySelector('.cfpPU').id = 'posts';
	setTimeout(function()
	{
		if (CheckFetchIG()) FetchIG();
	}, 10000);
	setInterval(function()
	{
		if (CheckFetchIG()) FetchIG();
	}, (checkTime * 1000));
})();

function CheckFetchIG()
{
	//if (Settings.HelpWithIG && ((new Date() - Settings.LastFetchDateTime) / 1000) > 1200)
	if (Settings.HelpWithIG && ((new Date() - Settings.LastFetchDateTime) / 1000) > (checkTime * 0.5)) return true;
	return false;
}

function FetchIG()
{
	// var baseHostURL = "https://igrss.ddns.net/";
	// var igURL = "https://www.instagram.com/";
	// $.get(`${baseHostURL}getfetchuser`, function(userResponse){
	// 	var usertofetch = userResponse.documentElement.innerHTML;
	// 	if (usertofetch != ""){
	// 		Settings.LastFetchDateTime = new Date();
	// 		chrome.runtime.sendMessage({ category: "fetch", url: `${igURL}${usertofetch}` });
	// 	}
	// }).fail(function(response){
	// 	console.error(`Error: ${response}`);
	// });
}
// Handle the click on the added Icon for Settings
function SetupOptionsClick()
{
	$('#tiled_button > a').click(function()
	{
		$("body").append("<div id='tDSettings' style='display: none;' name='Tumblr - Tiled Dashboard Settings'></div> \
    					  <div id='tDBackground' style='display: none;'></div>");
		BuildOptions();
		LoadOptions();
		$("#saveButton").click(SaveOptions);
		$("#tDSettings").fadeIn();
		$("#tDBackground").fadeIn();
		$("#tDBackground").click(function()
		{
			$("#tDSettings").fadeOut("slow", function()
			{
				$("#tDSettings").remove();
			});
			$("#tDBackground").fadeOut("slow", function()
			{
				$("#tDBackground").remove();
			});
			// Send Setup Options closed Event to Google Analytics
			chrome.runtime.sendMessage(
			{
				category: "setup_options_not_saved"
			});
		});
		// Send Setup Options opened Event to Google Analytics
		chrome.runtime.sendMessage(
		{
			category: "Setup_options_opened"
		});
	});
}
// Handle the Windows Scroll (load new Posts if needed)
function HandleScroll()
{
	/*$(window).scroll(function() {
		var windowHeight = $(window).height();
		var bottomPosition = $(window).scrollTop() + windowHeight;
		var scrollBarrier =  Math.max($(document).height() * 0.66, $(document).height() - 3 * windowHeight);
		
		if (bottomPosition > scrollBarrier &&
			URLHandler.IsLoadingURLPossible && Settings.InfiniteScrollEnabled == true)
		{
			URLHandler.CreateNextPageURL();
			if (!URLHandler.IsNextPageURLOk)
				return;

			URLHandler.CurrentPageNr++;

			if (URLHandler.IsCurrentURLLoading == false) {
				URLHandler.AddCurrentURLLoading();

				$.ajax({
					type: "GET",
					url: URLHandler.URL,
					//data: URLHandler.URL,
					success: function(msg, status, xhr) {
						var $posts = $(msg).filter('.post_container[data-id]');
						if ($posts.length == 0){
							$posts = $('.post_container[data-id]', $(msg));

						}

						if (URLHandler.OriginalURL.indexOf('likes') > -1)
							URLHandler.NextLikesURL = xhr.getResponseHeader('x-next-page');

						//Add the URL as a DIV to be able to delete the right Element from the Array
						var urlElement = document.createElement('div');
						urlElement.classList.add('loadedURL');
						urlElement.id = this.url.substring(this.url.lastIndexOf('https'));
						$posts.push(urlElement);

						$("#new_page").append($posts);
					}
				});
			}
		}
	});*/
}
// Handle the newly preloaded Posts
function HandleNewPage()
{
	var newPage = document.getElementById('new_page');
	var newPosts = Array.from(newPage.getElementsByClassName('post_container')).filter(element =>
	{
		return element.nodeName == 'LI' && element.childNodes.length > 1;
	});
	if (newPosts.length == 0) return
	var firstLoadedUrlElement = newPage.getElementsByClassName('loadedURL')[0];
	firstLoadedUrlElement.parentNode.removeChild(firstLoadedUrlElement);
	var loadedURL = firstLoadedUrlElement.id;
	var lastPostId = newPosts[newPosts.length - 1].getElementsByClassName('post')[0].attributes['data-id'].nodeValue;
	URLHandler.SetNextPageURL(lastPostId);
	var posts = document.getElementById("posts");
	for (var i = 0; i < newPosts.length; i++)
	{
		var element = newPosts[i];
		element.style.position = "absolute";
		element.style.left = "-600px";
		posts.appendChild(element);
	}
	URLHandler.RemoveLoadedURLLoading(loadedURL);
}
// Handle the newly added Review Elements
function HandleReview()
{
	var reviewButtonToClick = $("div.ui_dialog button.btn_0");
	if (reviewButtonToClick == undefined || reviewButtonToClick == null) return;
	var $spanElement = $('span', reviewButtonToClick).last();
	if ($spanElement == undefined || $spanElement == null || $spanElement[0] == undefined || $spanElement[0] == null) return;
	if ($spanElement != null && $spanElement[0].textContent == 'Request review' && !confirmReview)
	{
		confirmReview = true;
		$spanElement.click();
	}
	else if ($spanElement != null && $spanElement[0].textContent == 'OK' && confirmReview)
	{
		confirmReview = false;
		$spanElement.click();
		$('.ui_dialog_lock').hide();
	}
}
// Handle the event for the new Post-Container (when a new Post is created)
function HandleNewPostCreated(elements)
{
	for (var i = 0; i < elements.length; i++)
	{
		var element = elements[i];
		var $post = $(element);
		$post.css("position", "absolute");
		$post.css("left", "-600px");
		if (URLHandler.HideLikes == true) $post.has("div.like.liked, read_posts_read").addClass("hiddenPost");
		$('#posts').prepend($post);
	}
}

function AddImageHandler()
{
	debugger;
}
// Handle the event for the Post-Container (when more posts are added to the dashboard)
function HandleNewPostsAdded(elements)
{
	for (var i = 0; i < elements.length; i++)
	{
		var element = elements[i];
		if ($existingPosts.length == 0)
		{
			$existingPosts = $(".post_container[data-id]:not(.hiddenPost)");
		}
		var $post = $(element);
		$post.addClass('post_container');
		let $article = $('article', $post);
		$article.addClass('post');
		let $figure = $('figure', $article);
		$figure.children('div').removeAttr('style');
		CloneImages($figure);
		AddResizeHandling(element);
		// Check prepended Posts if they are not available already
		var newPostIndex = $($("#posts").children()).index($post);
		// Fallback:
		// If infiniteScroll is disabled, do not add the new Posts!
		if (newPostIndex > 10 && Settings.InfiniteScrollEnabled == false)
		{
			$post.remove();
			continue;
		}
		var postId = $post.data("id");
		if ($("#post_" + postId, $existingPosts).length > 1)
		{
			$post.remove();
			$post.detach();
			continue;
		}
		if (newPostIndex <= 10)
		{
			if ($('#posts [data-id=' + $post.attr('data-id') + ']').length != 1)
			{
				$post.remove();
				continue;
			}
		}
		$existingPosts.push(element);
		$(".like", $post).each(function(idx, elem)
		{
			$(elem).on("click", function()
			{
				var $likeButton = $(elem);
				var requestedwith = 'XMLHttpRequest';
				var tumblrformkey = $("#tumblr_form_key").attr("content");
				var $likedPost = $(this).closest(".post");
				var id = $likedPost.attr("data-id");
				var reblogKey = $likedPost.attr("data-reblog-key");
				var pt = $likedPost.attr("data-pt");
				var tumblelogname = $likedPost.attr("data-tumblelog");
				var likeUrl = "like";
				var isLiked = $likeButton.hasClass("liked");
				if (isLiked)
				{
					likeUrl = "unlike";
					$likeButton.removeClass("liked");
				}
				else $likeButton.addClass("liked");
				$.ajax(
				{
					type: "POST",
					beforeSend: function(request)
					{
						request.setRequestHeader("x-tumblr-form-key", tumblrformkey);
					},
					url: URLHandler.LikePostBaseURL + likeUrl,
					data:
					{
						"data[id]": id,
						"data[root_id]": id,
						"data[key]": reblogKey,
						"data[placement_id]": false,
						"data[is_recommended]": "",
						"data[pt]": pt,
						"data[tumblelog_name]": tumblelogname,
						"data[method]": "mouse",
						"data[source]": "LIKE_SOURCE_DASHBOARD"
					},
					error: function(jqXHR, textStatus, errorThrown)
					{
						//Restore state if an error occured
						if (this.url.contains("/like")) $likeButton.removeClass("liked");
						else $likeButton.addClass("liked");
					}
				});
			});
		});
		$(".post_control.queue", $post).each(function(idx, elem)
		{
			$(elem).on("click", function()
			{
				var elemID = $(elem).closest(".post").attr("data-id");
				var tumblrformkey = $("#tumblr_form_key").attr("content");
				$.ajax(
				{
					type: "POST",
					beforeSend: function(request)
					{
						request.setRequestHeader("x-tumblr-form-key", tumblrformkey);
					},
					url: URLHandler.PublishPostURL,
					data:
					{
						"id": elemID,
						"queue": "queue"
					},
					success: function(msg)
					{
						$(elem).closest(".post_container").fadeOut();
					}
				});
			});
		});
		$(".post_control.publish", $post).each(function(idx, elem)
		{
			$(elem).on("click", function()
			{
				var elemID = $(elem).closest(".post").attr("data-id");
				var tumblrformkey = $("#tumblr_form_key").attr("content");
				$.ajax(
				{
					type: "POST",
					beforeSend: function(request)
					{
						request.setRequestHeader("x-tumblr-form-key", tumblrformkey);
					},
					url: URLHandler.PublishPostURL,
					data:
					{
						"id": elemID
					},
					success: function(msg)
					{
						$(elem).closest(".post_container").fadeOut();
					}
				});
			});
		});
		$(".post_control.delete", $post).each(function(idx, elem)
		{
			$(elem).on("click", function()
			{
				var elemID = $(elem).closest(".post").attr("data-id");
				var tumblrformkey = $("#tumblr_form_key").attr("content");
				$.ajax(
				{
					type: "POST",
					beforeSend: function(request)
					{
						request.setRequestHeader("x-tumblr-form-key", tumblrformkey);
					},
					url: URLHandler.DeletePostURL,
					data:
					{
						"post_id": elemID,
						"channel_id": URLHandler.BlogNameFromURL
					},
					success: function(msg)
					{
						$(elem).closest(".post_container").fadeOut();
					}
				});
			});
		});
		$("button.review", $post).each(function(idx, elem)
		{
			$(elem).on("click", function(e)
			{
				e.preventDefault();
				var elemID = $(elem).closest(".post").attr("data-id");
				var tumblrformkey = $("#tumblr_form_key").attr("content");
				var blogname = $.ajax(
				{
					type: "POST",
					beforeSend: function(request)
					{
						request.setRequestHeader("x-tumblr-form-key", tumblrformkey);
					},
					url: URLHandler.AppealURL,
					data:
					{
						"post_id": elemID,
						"blog_name": URLHandler.BlogNameFromURL,
						"state": 3
					},
					success: function(msg)
					{
						var post_ID = this.data.split('&')[0].split('=')[1];
						var $likedPost = $('.post', $(elem).closest(".post_container"));
						$($likedPost[0]).css('background', 'lightgreen');
					}
				});
			});
		});
		// Remove the loaded "you may like" Element
		$post.bind('DOMSubtreeModified', function(event)
		{
			var $addedElement = $post;
			var $rapidRecsContainer = $addedElement.filter("div.rapid-recs-container");
			if ($rapidRecsContainer.length > 0 && Settings.ShowNoLikes == true)
			{
				$rapidRecsContainer.remove();
				event.preventDefault;
			}
		});
		$post.css("position", "absolute");
		$post.css("left", "-600px");
		if (URLHandler.HideLikes == true) $post.has("div.like.liked, read_posts_read").addClass("hiddenPost");
		// Append the Post to the displayed Posts
		if (!$post.hasClass("hiddenPost")) AppendToMasonry($post, newPostIndex <= 4, false);
		// Update the PageNr and send a PageView to Google Analytics
		var $newPageElem = $post.filter("li:not(.post_container)");
		if ($newPageElem.length > 0)
		{
			chrome.runtime.sendMessage(
			{
				category: "pageview",
				pageName: "Page #" + URLHandler.CurrentPageNr
			});
		}
	}
}
// Handle the event for the new Post-Container (when a new Post is created)
function HandleNewPostButtonsContainer()
{
	var target = document.querySelector('.new_post_buttons_container');
	if (target == null) return;
	var config = {
		attributes: true,
		childList: true
	};
	var observer = new MutationObserver(function(mutations)
	{
		mutations.forEach(function(mutation)
		{
			if (mutation.addedNodes.length > 0)
			{
				var $added = $(mutation.addedNodes);
				var $createPostButton = $($('.create_post_button', $added));
				if ($createPostButton.length > 0)
				{
					$createPostButton.on('click', function()
					{
						$('html, body').animate(
						{
							scrollTop: 0
						}, 200);
					});
				}
			}
		});
	});
	observer.observe(target, config);
}

function SetupPostRemoverButton()
{
	var target = document.querySelectorAll('aside > div')[1];
	// var target = document.querySelector('#right_column');
	var observer = new MutationObserver(function(mutations)
	{
		mutations.forEach(function(mutation)
		{
			if (mutation.addedNodes.length > 0) HandlePostRemoving();
		});
		observer.disconnect();
	});
	var config = {
		attributes: true,
		childList: true
	};
	observer.observe(target, config);
	AddPostRemoverButton();
}

function AddPostRemoverButton()
{
	if (URLHandler.OriginalURL.indexOf("queue") == -1 && URLHandler.OriginalURL.indexOf("drafts") == -1 && URLHandler.OriginalURL.indexOf("dashboard") == -1)
	{
		var $removeButton = $("#removeButton");
		if ($removeButton.length == 0)
		{
			var $outerDiv = $(document.createElement('div'));
			$outerDiv.addClass('hide_overflow');
			$outerDiv.attr('style', 'padding-left: 10px;');
			var $link = $(document.createElement('a'));
			$link.attr("href", "#")
			$link.attr("id", "removePostsButton")
			$link.attr("style", "outline-width: 0px !important; user-select: auto !important;")
			$link.append($('<div style="display: inline;font-size: 12px;font-weight: 700;color: hsla(0,0%,100%,.6);">Remove Posts:</div>'));
			$outerDiv.append($link);
			$outerDiv.append($('<input style="display: inline; margin-left: 1em; width: 120px;" type="number" id="removePostCountLimit" value="15"></input>'));
			var newLiElement = document.createElement('li');
			var $liElement = $(newLiElement);
			$liElement.addClass('no_push');
			$liElement.append($outerDiv);
			$link.on("click", function(event)
			{
				var $loadedOtherElements = $("#new_page *");
				$loadedOtherElements.remove();
				var countLimit = $('#removePostCountLimit').val();
				if (countLimit == undefined || countLimit == 0) return;
				var $posts = $('.post:visible:not(.radar) .note_link_current').filter(function()
				{
					return $(this).data('count') < $('#removePostCountLimit').val();
				}).closest('.post');
				if ($posts.length == 0) return;
				var notificationElement = document.createElement('div');
				var $notification = $(notificationElement);
				var text = `Removing ${$posts.length} posts...`;
				$notification.text(text);
				$notification.attr('style', 'display: block; position: fixed; font-size: 1.5em; left: 50%; top: 50%; transform: translate(-50%,-50%); padding: .5em; background-color: rgba(54, 70, 93, .75); color: rgba(255, 255, 255, 0.6); z-index: 1000; border-radius: .125em;');
				$('body').prepend($notification);
				$notification.fadeOut(5000, function()
				{
					$notification.remove();
				});
				$posts.each(function(index, element)
				{
					setTimeout(function()
					{
						$('.delete', $(element)).click();
					}, 300 * (index + 1))
				});
			});
			$('#right_column .controls_section.blog_menu').append($liElement);
		}
	}
}

function HandlePostRemoving()
{
	if (URLHandler.OriginalURL.indexOf("queue") > -1)
	{
		var $shuffleButton = $("#xshufflequeue_button");
		if ($shuffleButton.length > 0)
		{
			var $liToRemove = $shuffleButton.closest('li');
			$liToRemove.remove();
		}
	}
}
// Setup the Shuffle Button
function SetupShuffleButton()
{
	var target = document.querySelectorAll('aside > div')[0];
	// var target = document.querySelector('#right_column');
	var observer = new MutationObserver(function(mutations)
	{
		mutations.forEach(function(mutation)
		{
			if (mutation.addedNodes.length > 0) HandleQueuePageShuffling();
		});
		observer.disconnect();
	});
	var config = {
		attributes: true,
		childList: true
	};
	observer.observe(target, config);
	AddShuffleButtonForQueue();
}
// Add the Shuffle Button
function AddShuffleButtonForQueue()
{
	if (URLHandler.OriginalURL.indexOf("queue") > -1)
	{
		var $shuffleButton = $("#shuffleQueueButton");
		if ($shuffleButton.length == 0)
		{
			var newDiv = document.createElement('div');
			var $innerDiv = $(newDiv);
			$innerDiv.addClass('hide_overflow');
			$innerDiv.attr('style', 'color: rgba(255, 255, 255, 0.5) !important; font-weight: bold;padding-left: 10px;');
			$innerDiv.text('Shuffle Queue');
			var newLink = document.createElement('a');
			var $link = $(newLink);
			$link.attr("href", "#")
			$link.attr("id", "shuffleQueueButton")
			$link.attr("style", "outline-width: 0px !important; user-select: auto !important;")
			$link.append($innerDiv);
			var newLiElement = document.createElement('li');
			var $liElement = $(newLiElement);
			$liElement.addClass('no_push');
			$liElement.append($link);
			$liElement.on("click", function(event)
			{
				var $loadedOtherElements = $("#new_page *");
				$loadedOtherElements.remove();
				//Get all displayed Post ID's
				var postIDs = [];
				$.each($('li.post_container:not(.hiddenPost), .columnWidth'), function(index, value)
				{
					$element = $(value);
					if ($element.hasClass('new_post_buttons_container') == false)
					{
						var id = $(".post", $(value)).data("id");
						if (postIDs.includes(id) == false) postIDs.push(id);
					}
				});
				//Shuffle the ID's
				ShuffleArray(postIDs);
				var requestUrl = URLHandler.OriginalURL.replace('#', '');
				requestUrl = URLHandler.OriginalURL.replace('queue', 'order_post_queue/');
				//Create Request with all needed Data
				var tumblrformkey = $("#tumblr_form_key").attr("content");
				var textItem = "shuffling Posts...";
				var notificationElement = document.createElement('div');
				var $notification = $(notificationElement);
				$notification.text(textItem);
				$notification.attr('style', 'display: block; position: absolute; font-size: 1.5em; left: 50%; top: 50%; transform: translate(-50%,-50%); padding: .5em; background-color: rgba(54, 70, 93, .75); color: rgba(255, 255, 255, 0.6); z-index: 1000; border-radius: .125em;');
				$('body').prepend($notification);
				$.ajax(
				{
					type: "POST",
					url: requestUrl,
					data:
					{
						"post_ids": postIDs.join(),
						"form_key": tumblrformkey
					},
					//Masonry update
					success: function(msg)
					{
						// Reorder Posts in the DOM
						textItem = "rearranging Posts...";
						$notification.text(textItem);
						$allPosts = $('li.post_container:not(.hiddenPost), .columnWidth').filter(':not(.new_post_buttons_container)');
						postIDs.reverse();
						var $posts = $('#posts');
						var newPosts = [];
						postsContainerObserver.disconnect();
						for (var i = 0; i < postIDs.length; i++)
						{
							var $post = $('.post_container[data-id="' + postIDs[i] + '"]', $posts);
							newPosts.push($post[0]);
							$posts.prepend($post);
						}
						postsContainerObserver = SetupObserver("#posts", HandleNewPostsAdded);
						HandleNewPostsAdded(newPosts);
						$posts.masonry('reloadItems');
						$posts.masonry();
						textItem = postIDs.length + " Posts shuffled...";
						$notification.text(textItem);
						$notification.fadeOut(2000, function()
						{
							$notification.remove();
						});
						// Send Queue Shuffled Event to Google Analytics
						chrome.runtime.sendMessage(
						{
							category: "queue_shuffled"
						});
					},
					error: function()
					{
						var textItem = "failed :(";
						$notification.text(textItem);
						$notification.fadeOut(2000, function()
						{
							$notification.remove();
						});
					},
					complete: function()
					{
						window.history.pushState(
						{
							"html": "queue",
							"pageTitle": "Tumblr"
						}, "", window.location.href.replace('#', ''));
					}
				});
			});
			$('#right_column .controls_section.blog_menu').append($liElement);
		}
	}
}

function HandleQueuePageShuffling()
{
	if (URLHandler.OriginalURL.indexOf("queue") > -1)
	{
		var $shuffleButton = $("#xshufflequeue_button");
		if ($shuffleButton.length > 0)
		{
			var $liToRemove = $shuffleButton.closest('li');
			$liToRemove.remove();
		}
	}
}
// Append Posts and PageElement to the Masonry
function AppendToMasonry($posts, prepend, firstPage)
{
	// For all Images not in Photosets
	$('.post:not(.is_photoset) figure', $posts).each(function(index, elem)
	{
		debugger;
		// Handle the Image load event
		$(elem).load(function(e)
		{
			debugger;
			var $post = $(this).closest('.post_container');
			if (!$post.hasClass("addedMasonry"))
			{
				setTimeout(function()
				{
					$('#posts').masonry(prepend ? 'prepended' : 'appended', $post);
					$post.addClass("addedMasonry");
				}, 0);
			}
		});
	});
	// Handle Photoset-Posts
	$('.post.is_photoset', $posts).each(function(index, elem)
	{
		var $postElem = $(elem).closest('li.post_container');
		var imgCount = $('.post_media img', $postElem).length;
		var loaded = 0;
		if (firstPage) ModifyPhotoset($postElem);
		// Handle the Image load event
		$('.post_media img', $postElem).load(function(e)
		{
			loaded++;
			// If all photoset images have been loaded
			var $post = $(this).closest('li.post_container');
			if (loaded == imgCount && !$post.hasClass("addedMasonry"))
			{
				ModifyPhotoset($post);
				setTimeout(function()
				{
					$('#posts').masonry(prepend ? 'prepended' : 'appended', $post);
					$post.addClass("addedMasonry");
				}, 0);
			}
		});
	});
	// Handle Video-Posts
	$('.post.is_video', $posts).each(function(index, elem)
	{
		var $post = $(this).closest('li.post_container');
		var $video = $('video', this);
		$video.removeAttr('preload');
		$video.removeAttr('data-crt-video');
		$video.removeAttr('data-crt-options');
		$video.attr('controls', true);
		$('.dock', $post).remove();
		$('.undock', $post).remove();
		if (!$post.hasClass("addedMasonry"))
		{
			setTimeout(function()
			{
				$('#posts').masonry(prepend ? 'prepended' : 'appended', $post);
				$post.addClass("addedMasonry");
			}, 0);
		}
	});
	// Handle all other Post Types directly
	setTimeout(function()
	{
		$posts.each(function(index, elem)
		{
			var $post = $(elem);
			if ($('.post:not(.is_photoset,.is_photo,.is_video)', $post).length > 0)
			{
				if (!$post.hasClass("addedMasonry"))
				{
					$('#posts').masonry(prepend ? 'prepended' : 'appended', $post);
					$post.addClass("addedMasonry");
				}
			}
		});
	}, 0);
	// Send Posts displayed Events to Google Analytics
	$posts.each(function()
	{
		chrome.runtime.sendMessage(
		{
			category: "postsDisplayed"
		});
	});
}

function ModifyPhotoset($post)
{
	//Modify CSS to creat nice Rows of Images if there are more in one Row
	var $photosetRows = $('.photoset_row', $post);
	for (var i = 0; i < $photosetRows.length; i++)
	{
		var $photosetRow = $($photosetRows[i]);
		var $imageLinks = $('a.photoset_photo', $photosetRow);
		if ($imageLinks.length > 1)
		{
			var maxHeight = 0;
			for (var iIdx = 0; iIdx < $imageLinks.length; iIdx++)
			{
				var $img = $('img', $imageLinks[iIdx]);
				$img.css("margin-top", "");
				var imgHeight = $img.height();
				if (imgHeight > maxHeight) maxHeight = imgHeight;
			}
			$photosetRows.height(maxHeight);
			for (var iIdx = 0; iIdx < $imageLinks.length; iIdx++)
			{
				$($imageLinks[iIdx]).height(maxHeight);
				var $img = $('img', $imageLinks[iIdx]);
				$img.height(maxHeight);
			}
		}
	}
}

function HandleRefreshButton()
{
	// Add icon for refreshing the page if the current Page is the Dashboard
	if (URLHandler.OriginalURL.indexOf("dashboard") > 0 && Settings.RefreshEnabled == true)
	{
		$("<div id='refresh_button'>\
			<a style='position: fixed; bottom: 1em; width: 48px; height: 48px;' target='_parent' href='#' onclick='return false' alt='Refresh Dashboard now!'></a>\
    		</div>").insertAfter('#posts');
		$(document).scroll(function()
		{
			// Basic example, show button when scrolled down at least one Viewport Height
			//  and enough posts have been loaded already
			var $posts = $('#posts li.post_container:not(.hiddenPost)');
			var len = $posts.length;
			if ($(document).scrollTop() > $(window).height() && len >= Settings.RefreshNumber && Settings.RefreshEnabled == true) $("#refresh_button").fadeIn();
		});
		$('#refresh_button > a').click(function()
		{
			// Get the first Post, that is currently displayed
			var windowHeight = $(window).height();
			var position = $(window).scrollTop();
			var bottomPosition = position + windowHeight;
			var $posts = $('#posts li.post_container .post');
			var $foundPost = $posts[0];
			for (var i = 0; i < $posts.length; i++)
			{
				var $currentPost = $($posts[i]);
				var postPosition = $currentPost.offset().top;
				var postBottomPosition = postPosition + $currentPost.height();
				if (postPosition < bottomPosition && postBottomPosition > position) $foundPost = $currentPost;
				// If there exists one Post, that is completely inside the window, take it and continue reloading
				if (postPosition > position && postBottomPosition < bottomPosition)
				{
					$foundPost = $currentPost;
					break;
				}
			}
			var foundIndex = $posts.index($foundPost);
			var postId = $foundPost.attr('data-post-id');
			if (Settings.FastLoadEnabled == true) window.location.replace(URLHandler.DashboardURL + (URLHandler.CurrentPageNr + 1 - parseInt(($posts.length - foundIndex) / 10, 10)));
			else window.location.replace(URLHandler.DashboardURL + "2/" + postId);
			// Send RefreshButton clicked Event to Google Analytics
			chrome.runtime.sendMessage(
			{
				category: "refresh_button_clicked"
			});
		});
	}
	else $("#refresh_button").fadeOut();
}
// Saves Options
function SaveOptions()
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
	// Load the saved values that should be used
	Settings.LoadSettings();
	HandleRefreshButton();
	$("#tDSettings").fadeOut("slow", function()
	{
		if (currentIsEnabled != Settings.SettingIsEnabled)
		{
			//Enabled Changed, reload the Page
			location.reload();
		}
		else if (currentWidth != Settings.ColumnWidth || currentGutter != Settings.Gutter || currentBorder != Settings.Border || currentText != Settings.RemoveText || currentMaximumContentHeight != Settings.MaximumContentHeight)
		{
			// Add CSS for Width-Settings
			StylePage();
			SetupMasonry();
		}
		StylePagination();
		$("#tDSettings").remove();
	});
	$("#tDBackground").fadeOut("slow", function()
	{
		$("#tDBackground").remove();
	});
	// Send Setup Options saved Event to Google Analytics
	chrome.runtime.sendMessage(
	{
		category: "setup_options_saved"
	});
}
// Set States using the Preferences stored
function LoadOptions()
{
	if (Settings.SettingIsEnabled == true) $("#IsEnabled").prop("checked", Settings.SettingIsEnabled);
	$("#columnWidth").val("" + Settings.ColumnWidth);
	$("#gutterWidth").val("" + Settings.Gutter);
	$("#borderString").val("" + Settings.Border);
	if (Settings.RemoveText == true) $("#removeTextCheckBox").prop("checked", Settings.RemoveText);
	if (Settings.RefreshEnabled == true) $("#refreshDashboardCheckBox").prop("checked", Settings.RefreshEnabled);
	$("#refreshNumberPosts").val("" + Settings.RefreshNumber);
	if (Settings.InfiniteScrollEnabled == true) $("#infiniteScrollEnabledCheckBox").prop("checked", Settings.InfiniteScrollEnabled);
	if (Settings.ShowNoLikes == true) $("#youMayLikeCheckBox").prop("checked", Settings.ShowNoLikes);
	if (Settings.FastLoadEnabled == true) $("#fastLoadDashboardCheckBox").prop("checked", Settings.FastLoadEnabled);
	$("#maximumPostHeight").val("" + Settings.MaximumContentHeight);
	$("#maximumConcurrentPageLoads").val("" + Settings.MaximumConcurrentPageLoads);
	$("#helpWithIG").prop('checked', Settings.HelpWithIG);
}
// Creates the HTML Code for the Options Page
function BuildOptions()
{
	/* Add this as first Element in the Tableto create the IsEnabled CheckBox in the Options Menu
							<tr> \
								<td>Enable Tiled Dashboard:</td> \
								<td><input type='checkbox' id='IsEnabled'></td> \
								<td>(Enables or Disables the Tiled Dashboard Extension completely)</td> \
							</tr> \ 
	*/
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
						</table> \
					</section> \
					<div id='statusText'></div> \
					<button id='saveButton'>Save</button>";
	$("#tDSettings").append($(content));
}
// Sets up the Masonry
function SetupMasonry()
{
	$('#posts').masonry(
	{
		itemSelector: "[data-id], .columnWidth",
		gutter: Settings.Gutter,
		hiddenStyle:
		{
			opacity: 0,
			transform: 'translateY(50px)'
		},
		visibleStyle:
		{
			opacity: 1,
			transform: 'translateY(0px)'
		},
		/*isAnimated: false,*/
		isFitWidth: true,
	});
	$(window).trigger("resizeEnd");
}

function SetupResizeObserver()
{
	resizeObserver = new ResizeObserver(entries =>
	{
		for (let entry of entries)
		{
			let $post = $(entry.target);
			var items = $('#posts').masonry('getItemElements');
			$('#posts').masonry('layoutItems', items, true);
			$('#posts').masonry();
		}
	});
}

function AddResizeHandling(target)
{
	resizeObserver.observe(target);
}

function SetupObserver(targetId, Handler)
{
	var postsTarget = document.querySelector(targetId);
	var observerObject = new MutationObserver(function(mutations)
	{
		mutations.forEach(function(mutation)
		{
			if (mutation.addedNodes.length > 0) Handler(mutation.addedNodes);
		});
	});
	var postsConfig = {
		attributes: true,
		childList: true
	};
	observerObject.observe(postsTarget, postsConfig);
	return observerObject;
}
// Shortcut Key Setup
document.onkeyup = function(e)
{
	// Rearrange the Masonry if the user hits 'r', only if the user is not editing a post
	if (!URLHandler.IsInPostEditor && e.which == 82)
	{
		$('#posts').masonry();
		// Send manual Masonry Event to Google Analytics
		chrome.runtime.sendMessage(
		{
			category: "manual_masonry"
		});
	}
	else if (!URLHandler.IsInPostEditor && e.which == 46)
	{
		$('#removePostsButton').click();
	}
};
// Handle Document ready Event
$(document).ready(function()
{
	Settings.LoadSettings();
	URLHandler.SetURL(window.location.href);
	chrome.runtime.sendMessage(
	{
		category: "pageview",
		pageName: "Page #" + URLHandler.CurrentPageNr
	});
	StylePagination();
	// Add icon for Settings
	$("<div class='tab iconic tab_nav_account' id='tiled_button'>\
		<a style='width: 26px; margin-left: -6px; margin-right: -6px;' class='tab_anchor' target='_parent' href='#' onclick='return false'>TD</a>\
		</div>").insertBefore('[aria-label="Neuer Eintrag"]');
	SetupOptionsClick();
	StylePage();
	$(window).resize(function()
	{
		if (this.resizeTO) clearTimeout(this.resizeTO);
		this.resizeTO = setTimeout(function()
		{
			$(this).trigger('resizeEnd');
		}, 200);
	});
	$(window).bind('resizeEnd', function()
	{
		var newWidth = $("#posts").width()
		$("#newPostsContainer").animate(
		{
			width: newWidth
		}, 50, "linear");
	});
	// // Add Element for new Posts
	// $("<div class='new_page' id='new_page' style='display:none;'>\
	// 	</div>").insertBefore('.cfpPU');
	// newPageContainerObserver = SetupObserver("#new_page", HandleNewPage);
	// reviewObserver = SetupObserver("body", HandleReview);
	// HandleScroll();
	// HandleRefreshButton();
	// SetupShuffleButton();
	// SetupPostRemoverButton();
	if (URLHandler.HideLikes === true) $(".post_container[data-id]").has("div.like.liked, read_posts_read").addClass("hiddenPost");
	// Create new temporary Post container to load the newly added Posts invisibly
	var $newContainer = $('li.new_post_buttons_container');
	$newContainer.width("100%");
	$('#posts').before('<ol id="newPostsContainer"></ol>');
	$('#newPostsContainer').append($newContainer);
	// newPostsContainerObserver = SetupObserver("#newPostsContainer", HandleNewPostCreated);
	$('#posts div:nth-child(2)').attr('id', 'posts');
	$('#posts').removeAttr('id');
	postsContainerObserver = SetupObserver("#posts", HandleNewPostsAdded);
	// HandleNewPostButtonsContainer();
	SetupResizeObserver();
	///Only run once at startup
	///Setup the Masonry
	PreparePosts();
	SetupMasonry();
	var $posts = $(".post_container[data-id]:not(.hiddenPost)");
	$posts.each(function(index, element)
	{
		chrome.runtime.sendMessage(
		{
			category: "postsDisplayed"
		});
	});
	setTimeout(function()
	{
		$('#posts').masonry();
		$(window).trigger("resizeEnd");
	}, 100);
});

function PreparePosts($element)
{
	if ($element === undefined) $element = $('#posts');
	let $post_container = $('[data-id]', $element);
	$post_container.addClass('post_container');
	let $articles = $('.post_container article', $element);
	$articles.addClass('post');
	let $figures = $('figure', $articles);
	$figures.children('div').removeAttr('style');
	CloneImages($figures);
}

function CloneImages($baseElements)
{
	$baseElements.each(function(baseIndex, baseElement)
	{
		let $baseElement = $(baseElement);
		if ($('img', $baseElement).length == 0)
		{
			var observerObject = new MutationObserver(function(mutations)
			{
				mutations.forEach(function(mutation)
				{
					if (mutation.addedNodes.length > 0) AppendToMasonry(mutation.addedNodes);
				});
			});
			var postsConfig = {
				attributes: true,
				childList: true
			};
			observerObject.observe($baseElement[0], postsConfig);
		}
		$('img', $baseElement).each(function(imageIndex, image)
		{
			let $image = $(image);
			$image.clone().insertAfter($image)
			$image.remove();
		});
	});
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	var baseHostURL = "https://ig-rss.ddns.net/";
	if (request.fetch === true)
	{
		$.ajax(
		{
			type: 'POST',
			dataType: 'html',
			url: `${baseHostURL}collect`,
			data: 'Fetched [' + request.fetchurl + ']\r\n\r\n' + request.content
		});
	}
});