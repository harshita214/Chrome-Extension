
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

window.addEventListener('keypress',function(e){
  if (!started) {
    document.getElementById("level-title").innerHTML='Level '+level;
    nextSequence();
    started = true;
  }
});

document.querySelectorAll(".btn").forEach(el => {el.addEventListener("click" , function(event) {
console.log("hello");
  let userChosenColour = event.srcElement.id;
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      document.querySelector("body").classList.add("game-over");
      document.getElementById("level-title").innerHTML="Game Over, Press Any Key to Restart";

      setTimeout(function () {
        document.querySelector("body").classList.remove("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  document.getElementById("level-title").innerHTML="Level " +level;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  console.log("hi");
  
          
  function fadeIn() {
      var fade = document.getElementById(randomChosenColour);
      var opacity = 0;
      console.log("hello");
      var intervalID = setInterval(function() {
    
          if (opacity < 1) {
              opacity = opacity + 0.1
              fade.style.opacity = opacity;
          } else {
              clearInterval(intervalID);
          }
      }, 100);
  }
  fadeIn();
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  
  var res= document.getElementById(currentColor);
  console.log(res);
  document.getElementById(currentColor).classList.add("pressed");
  setTimeout(function () {
    document.getElementById(currentColor).classList.remove("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
