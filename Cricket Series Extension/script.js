var current = document.getElementById("current");
var upcoming = document.getElementById("upcoming");

current.addEventListener("click", () => {
  checker("current");
});
upcoming.addEventListener("click", () => {
  checker("upcoming");
});

function checker(input) {
  switch (input) {
    case "current":
      fetch("https://cricket-live-score4.p.rapidapi.com/apis/series", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "cricket-live-score4.p.rapidapi.com",
          "x-rapidapi-key":
            "8e8b0875e1msh3b60b0d6d24c50ap1f267ejsn6a95b9a0b89d",
        },
      })
        .then((data) => data.json())
        .then((activityData) => {
          const seriesData = activityData.data.current;
          let cardContainer;

          let createTaskCard = (task) => {
            let card = document.createElement("div");
            card.className = "col ";
            console.log(task);
            let cardBody = document.createElement("div");

            let sdate = document.createElement("h5");
            var parts = task["dates "];
            sdate.innerText = parts;

            let seriesName = document.createElement("h3");
            seriesName.innerText = task.series_name;

            let wmintemp = document.createElement("h3");
            wmintemp.innerText = task["series_type "];

            cardBody.appendChild(sdate);
            cardBody.appendChild(seriesName);
            cardBody.appendChild(wmintemp);

            card.appendChild(cardBody);
            cardContainer.appendChild(card);
          };

          const newArray = seriesData.slice(0, 5);
          let initListOfTasks = () => {
            if (cardContainer) {
              document.getElementById("daily").replaceWith(cardContainer);
              return;
            }

            cardContainer = document.getElementById("daily");
            newArray.forEach((task) => {
              createTaskCard(task);
            });
          };

          initListOfTasks();
        });
      break;
    case "upcoming":
      fetch("https://cricket-live-score4.p.rapidapi.com/apis/series", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "cricket-live-score4.p.rapidapi.com",
          "x-rapidapi-key":
            "8e8b0875e1msh3b60b0d6d24c50ap1f267ejsn6a95b9a0b89d",
        },
      })
        .then((data) => data.json())
        .then((activityData) => {
          const seriesData = activityData.data.upcoming;
          let cardContainer;

          let createTaskCard = (task) => {
            let card = document.createElement("div");
            card.className = "col ";
            console.log(task);
            let cardBody = document.createElement("div");

            let sdate = document.createElement("h5");
            var parts = task["dates "];
            sdate.innerText = parts;

            let seriesName = document.createElement("h3");
            seriesName.innerText = task.series_name;

            let wmintemp = document.createElement("h3");
            wmintemp.innerText = task["series_type "];

            cardBody.appendChild(sdate);
            cardBody.appendChild(seriesName);
            cardBody.appendChild(wmintemp);

            card.appendChild(cardBody);
            cardContainer.appendChild(card);
          };

          const newArray = seriesData.slice(0, 5);
          let initListOfTasks = () => {
            if (cardContainer) {
              document.getElementById("daily").replaceWith(cardContainer);
              return;
            }

            cardContainer = document.getElementById("daily");
            newArray.forEach((task) => {
              createTaskCard(task);
            });
          };

          initListOfTasks();
        });
      break;
    default:
      console.log("Fetching...");
      break;
  }
}
