const url = "http://www.boredapi.com/api/activity";

var solo = document.getElementById("solobutton");
var grp = document.getElementById("groupbutton");

solo.addEventListener("click", () => {
  checker("solo");
});
grp.addEventListener("click", () => {
  checker("group");
});

function checker(input) {
  var num = Math.floor(Math.random() * 3) + 2;
  switch (input) {
    case "solo":
      fetch("http://www.boredapi.com/api/activity?participants=1")
        .then((data) => data.json())
        .then((activityData) => {
          const activityText = activityData.activity;
          const activityElement = document.getElementById("activityElement");

          activityElement.innerHTML = activityText;
        });
      break;
    case "group":
      fetch(`http://www.boredapi.com/api/activity?participants=${num}`)
        .then((data) => data.json())
        .then((activityData) => {
          const activityText = activityData.activity;
          const activityElement = document.getElementById("activityElement");

          activityElement.innerHTML = activityText;
        });
      break;
    default:
      fetch("http://www.boredapi.com/api/activity")
        .then((data) => data.json())
        .then((activityData) => {
          const activityText = activityData.activity;
          const activityElement = document.getElementById("activityElement");

          activityElement.innerHTML = activityText;
        });
      break;
  }
}
