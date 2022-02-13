document.querySelector('button').addEventListener('click' , function(){
var SelectedTrack = document.querySelector('select').value;
chrome.runtime.sendMessage({name:"playTrack", track : SelectedTrack}) //sending message to our background.js
});

document.querySelector('button.pause').addEventListener('click', function(){
    chrome.runtime.sendMessage({name: "pauseTrack"});
  });
  