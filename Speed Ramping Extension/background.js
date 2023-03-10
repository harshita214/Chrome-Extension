// Listen for keyboard shortcuts
chrome.commands.onCommand.addListener(function(command) {
  // Get the current active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Send a message to the content script in the tab to increase or decrease the speed
    chrome.tabs.sendMessage(tabs[0].id, {command: command});
  });
});
