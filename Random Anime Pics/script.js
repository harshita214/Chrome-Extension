const getbtn = document.getElementById("btn");
const animeBox = document.querySelector(".animeBox");
const anime = document.querySelector(".anime");
const animeName = document.querySelector(".heroName");

const api_url = `https://api.catboys.com/img`;

getbtn.addEventListener("click", async function () {
  const res = await fetch(api_url);
  const data = await res.json();
  anime.src = data.url;
  animeBox.style.display = "block";
  animeName.textContent = data.artist;
});