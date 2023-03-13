document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("check").addEventListener("click", function() {
      var pnr = document.getElementById("pnr").value;
      if (pnr.length == 10 && !isNaN(pnr)) {
        var url = "https://indianrailwaysapi.p.rapidapi.com/index.php?pnr=" + pnr;
        const options = {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "ec1bb5fd78msh8576224eeee6730p10f0dcjsn5e1c3b26be01",
            "x-rapidapi-host": "indianrailwaysapi.p.rapidapi.com"
          }
        };
        fetch(url, options)
          .then(response => response.json())
          .then(data => {
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";
            if (data.response_code == 200) {
              var status = data.passengers[0].current_status;
              resultDiv.innerHTML = "PNR Status: " + status;
            } else {
              resultDiv.innerHTML = "Invalid PNR number or API Key";
            }
          })
          .catch(error => {
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "Error: " + error.message;
          });
      } else {
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Please enter a valid 10-digit PNR number";
      }
    });
  });
  