// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.command == "increase_speed") {
    // Increase the video speed by 0.25
    var video = document.getElementsByTagName("video")[0];
    if (video) {
      video.playbackRate += 0.25;
    }
  } else if (request.command == "decrease_speed") {
    // Decrease the video speed by 0.25
    var video = document.getElementsByTagName("video")[0];
    if (video) {
      video.playbackRate -= 0.25;
    }
  }
});
