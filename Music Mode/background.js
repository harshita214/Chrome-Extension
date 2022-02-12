//Listing for our messages from popout.js
chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if(msg.name == "playTrack"){ //if our event is playTrack
        //now all it needs to do is to adjust audio element in our background.html
        var trackName = msg.track;
       var audioElement = document.querySelector('.audio-element')
       audioElement.src = ''+trackName+'.mp3';
       audioElement.play();
    }

    if(msg.name == "pauseTrack"){
        var audioElement = document.querySelector('.audio-element');
        audioElement.pause();
      }
});