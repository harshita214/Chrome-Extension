document
  .getElementById("computeInterest")
  .addEventListener("click", function () {
    var principal = document.getElementById("principal").value;

    if (principal == "" || principal <= 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);

    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML =
      "<h3>If you deposit " +
      "<span class='highlight'>" +
      principal +
      "</span>" +
      ", at an interest rate of " +
      "<span class='highlight'>" +
      rate +
      "</span>%." +
      " You will receive an amount of " +
      "<span class='highlight'>" +
      interest +
      "</span>" +
      ", in the year " +
      "<span class='highlight'>" +
      yearNow +
      "</span>.</h3>";
  });

document.getElementById("rate").addEventListener("change", function () {
  var slider = document.getElementById("rate");
  var output = document.getElementById("rate_display");
  output.innerHTML = slider.value;
  slider.oninput = function () {
    output.innerHTML = this.value;
  };
});

document
  .getElementById("clearInput")
  .addEventListener("click", function () {
  document.getElementById("principal").value = "";
  document.getElementById("rate").value = "10.25";
  document.getElementById("rate_display").innerHTML = "10.25%";
  document.getElementById("years").value = "1";
  document.getElementById("result").innerHTML = "";
});
