let COUNTDOWN_STARTED = false;
const daysDropdown = document.getElementById("days");
const monthsDropdown = document.getElementById("months");
const reminderBtn = document.getElementById("remind-btn");

const countdown = document.getElementById("countdown");
const rDays = document.getElementById("remaining-days");
const rHrs = document.getElementById("remaining-hours");
const rMins = document.getElementById("remaining-minutes");
const rSec = document.getElementById("remaining-seconds");
let INTERVAL = setInterval(() => {
}, 1000);

countdown.style.visibility = "hidden";
reminderBtn.addEventListener('click', onClickRemindMe);

document.addEventListener("DOMContentLoaded", function () {
  initializeDropdowns();
});


function initializeDropdowns() {
  for (day = 1; day <= 31; day++) {
    option = document.createElement("option");
    option.innerHTML = day;
    daysDropdown.appendChild(option);
  }

  for (month = 1; month <= 12; month++) {
    option = document.createElement("option");
    option.innerHTML = month;
    monthsDropdown.appendChild(option);
  }
}

function onClickRemindMe() {
  COUNTDOWN_STARTED = true;

  error_paragraph = document.getElementById('error');
  if (!isValidDate()) {
    error_paragraph.style.visibility = 'visible';
    error_paragraph.innerHTML = "Enter valid Date";
    error_paragraph.style.color = "Red";
    document.getElementById('dropdowns').appendChild(error_paragraph);
    return;
  }
  document.getElementById('dropdowns').style.visibility = 'hidden';
  error_paragraph.style.visibility = 'hidden';

  INTERVAL = setInterval(function () {
    viewCountdown(new Date());
  }, 1000);
}

function isValidDate() {
  const days_per_month = getDaysPerMonthDictionary();
  if (days_per_month.get(parseInt(monthsDropdown.options[monthsDropdown.selectedIndex].value)) < parseInt(daysDropdown.options[daysDropdown.selectedIndex].value))
    return false;
  return true;
}

function getDaysPerMonthDictionary() {
  const days_per_month = new Map();
  days_per_month.set(1, 31);
  days_per_month.set(2, 28);
  days_per_month.set(3, 31);
  days_per_month.set(4, 30);
  days_per_month.set(5, 31);
  days_per_month.set(6, 30);
  days_per_month.set(7, 31);
  days_per_month.set(8, 31);
  days_per_month.set(9, 30);
  days_per_month.set(10, 31);
  days_per_month.set(11, 30);
  days_per_month.set(12, 31);
  return days_per_month;
}

function viewCountdown(time) {
  let birth_day = parseInt(monthsDropdown.options[monthsDropdown.selectedIndex].value);
  let birth_month = parseInt(daysDropdown.options[daysDropdown.selectedIndex].value);
  countdown.style.visibility = "visible";

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  today = time;
  let birth_year = today.getFullYear()
  birthdate = new Date(birth_year, birth_month - 1, birth_day, 23, 59);

  if (today.getTime() > birthdate.getTime())
    birthdate = new Date(birth_year + 1, birth_month - 1, birth_day, 23, 59);

  let millis = Math.abs(today.getTime() - birthdate.getTime());

  rDays.innerHTML = Math.floor(millis / day);
  rHrs.innerHTML = Math.floor((millis % day) / hour);
  rMins.innerHTML = Math.floor((millis % hour) / minute);
  rSec.innerHTML = Math.floor((millis % minute) / second);

  if (millis < 0) {
    clearInterval(INTERVAL);
    playMusic();
  }

  function playMusic() {
    new Audio('happy_birthday.mp3').play();
  }
}