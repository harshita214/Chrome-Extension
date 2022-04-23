const inputText = document.getElementById("input");
const upload = document.getElementById("upload");

const prediction = document.getElementById("prediction");
var results = document.getElementById("results");

inputText.onchange = function () {
  console.log(inputText.value);
  let url = inputText.value;
  upload.innerHTML = "Video URL Entered Successfully!";

  prediction.innerHTML = "Converting to MP3 ...";

  //Loading location
  fetch(`https://yt-download.org/api/widget?url=${url}`).then((videoData) => {
    console.log(videoData);
    prediction.innerHTML = "";
    video_url = videoData.url.toString();
    console.log(video_url);
    results.setAttribute("src", video_url);
  });
};

//https://www.youtube.com/watch?v=3tmd-ClpJxA
