const url = "http://www.boredapi.com/api/activity";
fetch(url)
  .then((data) => data.json())
  .then((jokeData) => {
    const jokeText = jokeData.activity;
    const jokeElement = document.getElementById("jokeElement");

    jokeElement.innerHTML = jokeText;
  });
