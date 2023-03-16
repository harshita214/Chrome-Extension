// elements
const inputField = document.querySelector("#text-field");
const wordsCounter = document.querySelector("#words-counter");
const spaceCounter = document.querySelector("#space-counter");
const charsCounter = document.querySelector("#chars-counter");
const charsTxt = document.querySelector("#chars-txt");
// functions
inputField.addEventListener("input", function (e) {
  const value = e.target.value;
  //   words
  const words = value.split(/\s+/).filter((item) => item.length);
  wordsCounter.textContent = words.length;
  //   chars
  charsCounter.textContent = value.length;
  console.log(value.length);
  if (value.length == 99999) {
    charsTxt.classList.add("animate__animated", "animate__headShake");
    charsTxt.style.color = "#c70a0a";
  } else {
    charsTxt.classList.remove("animate__animated", "animate__headShake");
    charsTxt.style.color = "#000";
  }
  //   space
  const whiteSpaces = value.split("").filter((item) => item == " ").length;
  spaceCounter.textContent = whiteSpaces;
});