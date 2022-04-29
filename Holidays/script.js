const inputText = document.getElementById("input");
const upload = document.getElementById("upload");

const prediction = document.getElementById("prediction");

const results = document.getElementById("results");

inputText.onchange = function () {
  console.log(inputText.value);
  let year = inputText.value.toLowerCase();
  upload.innerHTML = "Year Entered Successfully!";

  prediction.innerHTML = "Holidays Loading ...";

  //Loading location
  fetch(
    `https://calendarific.com/api/v2/holidays?&api_key=b748236ed929be534522cca02588fccc0df0628e&country=IN&year=${year}`
  )
    .then((data) => data.json())
    .then((companyData) => {
      holiday = companyData.response.holidays;
      console.log(holiday);
      prediction.innerHTML = "";
      results.style.display = "block";

      const items = holiday;
      let cardContainer;

      let createTaskCard = (task) => {
        let card = document.createElement("div");
        card.className = "card";
        card.style.width = "450px";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";

        let title = document.createElement("b");
        title.className = "card-header";
        title.innerText = task.name;

        let state = document.createElement("h6");
        state.innerText = task.date.iso;

        let description = document.createElement("p");
        let string = task.description;
        if (string.length > 150) {
          string = string.substring(0, 149) + "...";
        }
        description.innerText = string;
        description.className = "card-text";

        let type = document.createElement("p");
        type.className = "card-text";
        type.innerText = task.type;

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(state);
        cardBody.appendChild(type);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
      };

      const newArray = items.slice(0, items.length);
      let initListOfTasks = () => {
        document.getElementById("results").innerHTML = "";
        cardContainer = document.getElementById("results");
        newArray.forEach((task) => {
          createTaskCard(task);
        });
      };

      initListOfTasks();
    });
};

var e = document.getElementById("category");
function show() {
  var cat = e.options[e.selectedIndex].text;
  console.log(cat);
  let category = cat;
  console.log(category);
  fetch(
    `https://calendarific.com/api/v2/holidays?&api_key=b748236ed929be534522cca02588fccc0df0628e&country=IN&year=2022`
  )
    .then((data) => data.json())
    .then((companyData) => {
      holiday = companyData.response.holidays;
      console.log(holiday);
      prediction.innerHTML = "";
      results.style.display = "block";

      const items = holiday;
      let cardContainer;

      let createTaskCard = (task) => {
        if (task.type == cat) {
          let card = document.createElement("div");
          card.className = "card";
          card.style.width = "450px";

          let cardBody = document.createElement("div");
          cardBody.className = "card-body";

          let title = document.createElement("b");
          title.className = "card-header";
          title.innerText = task.name;

          let state = document.createElement("h6");
          state.innerText = task.date.iso;

          let description = document.createElement("p");
          let string = task.description;
          if (string.length > 150) {
            string = string.substring(0, 149) + "...";
          }
          description.innerText = string;
          description.className = "card-text";

          let type = document.createElement("p");
          type.className = "card-text";
          type.innerText = task.type;

          cardBody.appendChild(title);
          cardBody.appendChild(description);
          cardBody.appendChild(state);
          cardBody.appendChild(type);
          card.appendChild(cardBody);
          cardContainer.appendChild(card);
        }
      };

      const newArray = items.slice(0, items.length);
      let initListOfTasks = () => {
        document.getElementById("results").innerHTML = "";
        cardContainer = document.getElementById("results");
        newArray.forEach((task) => {
          createTaskCard(task);
        });
      };

      initListOfTasks();
    });
}
e.onchange = show;
