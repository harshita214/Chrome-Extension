var listElement = document.querySelector("#app2 ul");
var inputElement = document.querySelector("#app2 input");
var buttonElement = document.querySelector("#app2 button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    var linkText = document.createTextNode("done");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}

let interval;

const timer = {
  pomodoro: 25,
  short: 5,
  longInterval: 4,
};

const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", () => {
  const { action } = startBtn.dataset;
  // If the timer is stopped start it.
  if (action === "start") startTimer();
  // If the timer is working stop it.
  else stopTimer();
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  switchMode(timer.mode);
  stopTimer();
});

// Checks which timer mode is chosen and switches to it
const modeBtns = document.querySelector("#mode-btns");
modeBtns.addEventListener("click", (e) => {
  const { mode } = e.target.dataset;
  if (!mode) return;
  switchMode(mode);
  stopTimer();
});

// Gets the remaining time by finding the difference
// between the expected end time and the current time
function getRemainingTime(end) {
  const currentTime = Date.parse(new Date());
  const difference = end - currentTime;

  const total = Number.parseInt(difference / 1000, 10);
  const minutes = Number.parseInt((total / 60) % 60, 10);
  const seconds = Number.parseInt(total % 60, 10);

  return { total, minutes, seconds };
}

// Starts the timer based on the remaining time
function startTimer() {
  let { total } = timer.remaining;
  const end = Date.parse(new Date()) + total * 1000;

  startBtn.dataset.action = "stop";
  startBtn.textContent = "Stop";

  interval = setInterval(function () {
    timer.remaining = getRemainingTime(end);
    updateClock();

    total = timer.remaining.total;
    // Stops the timer and reset it when it reaches zero
    if (total == 0) {
      clearInterval(interval);
      switchMode(timer.mode);
      stopTimer();
    }
  }, 1000);
}

// Stops the timer without resetting it
function stopTimer() {
  clearInterval(interval);
  startBtn.dataset.action = "start";
  startBtn.textContent = "Start";
}

// Updates the clock with the timer data
function updateClock() {
  const { remaining } = timer;

  // Formats the minutes and seconds correctly
  min.textContent = `${remaining.minutes}`.padStart(2, "0");
  sec.textContent = `${remaining.seconds}`.padStart(2, "0");
}

// Switches the selected mode and updates the background color and the clock.
function switchMode(mode) {
  timer.mode = mode;
  timer.remaining = {
    total: timer[mode] * 60,
    minutes: timer[mode],
    seconds: 0,
  };

  updateClock();
}

// The default timer mode is pomodoro (25 mins)
document.addEventListener("DOMContentLoaded", () => {
  switchMode("pomodoro");
});
