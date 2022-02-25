var UpdateTimer;
var quickCalendar;
function onMonthClick() {
  var d = "https://calendar.google.com/calendar/render?tab=mc&mode=month&date=";
  var c = quickCalendar.datepicker("getDate");
  var e = c.getMonth() + 1;
  var a = "";
  if (e < 10) {
    a = "0" + e;
  } else {
    a = "" + e;
  }
  var b = d + c.getFullYear() + a + "01";
  window.open(b);
  window.close();
}
function setMonthClick() {
  window.setTimeout(function () {
    $(".ui-datepicker-month").click(onMonthClick);
  }, 0);
}
$(function () {
  setTimeString();
  UpdateTimer = window.setInterval(function () {
    setTimeString();
  }, 1000);
  quickCalendar = showCAL();
  $("#CALtoday").click(function () {
    todayCAL();
  });
  $("#CALclose").click(function () {
    closeCAL();
  });
  setMonthClick();
});
function openCal(d) {
  var h = "https://www.google.com/calendar/render?tab=mc&mode=day&date=";
  var f = new Date(d);
  var a = "";
  var c = "";
  var g = f.getMonth() + 1;
  var b = f.getDate();
  if (g < 10) {
    a = "0" + g;
  } else {
    a = "" + g;
  }
  if (b < 10) {
    c = "0" + b;
  } else {
    c = "" + b;
  }
  var e = h + f.getFullYear() + a + c;
  window.open(e);
  window.close();
}
function showCAL() {
  var a = $("#show_cal");
  a.datepicker({
    onSelect: function (c, b) {
      openCal(c);
    },
    changeYear: true,
    onChangeMonthYear: setMonthClick,
  });
  return a;
}
function todayCAL() {
  quickCalendar.datepicker("setDate", new Date());
}
function setTimeString() {
  var a = new Date();
  var b = a.toDateString();
  b = "&nbsp" + b.substr(0, 4);
  $("#CALtime").html(b + a.toLocaleString());
}
function closeCAL() {
  window.clearInterval(UpdateTimer);
  window.close();
}
