const toggle = document.querySelector(".toggle-item"),
body=document.querySelector('body'),
content=document.getElementById('context');
let buttonOn = false;
function invert() {
  alert("hi")
  document.body.style.filter = "invert(1) hue-rotate(180deg)";
  let media = document.querySelectorAll("img, picture, video");
  media.forEach((mediaItem) => {
      mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
  })
}
toggle.addEventListener("click", function(){
  this.classList.toggle("active");
  body.classList.toggle("active");

  // function to change content from light -- dark

  if(toggle.classList.contains("active")){
    if (!buttonOn) {
      buttonOn = true;
      chrome.tabs.executeScript({
          file: 'appOff.js'
      })
      }
      content.innerHTML="Dark Mode";
  }
  else{
    buttonOn = false;
    chrome.tabs.executeScript({
        file: 'appOn.js'
      })
      content.innerHTML="Light Mode";
  }
});