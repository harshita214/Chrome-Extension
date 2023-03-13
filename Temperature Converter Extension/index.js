document.querySelector("#submit").addEventListener("click", function() {
    let numberTemp = document.getElementById('temp').value;
    
    let tempSelected = document.getElementById('temp_diff');
    let valueTemp = tempSelected.value;
  
    
    
    if (valueTemp == "cel-fah") {
      
      
     let celf = parseFloat(numberTemp);
      let celsiusFahrenheit = ((celf * 1.8) + 32);
      let resultTemp = celsiusFahrenheit.toFixed(2);
      document.getElementById('result').innerHTML = `= ${resultTemp} °Fahrenheit`;
    }
    else if (valueTemp == "fah-cel") {
      
     let fahc = parseFloat(numberTemp);
      let fahrenheitCelsius = ((fahc - 32) / 1.8);
      let resultTemp = fahrenheitCelsius.toFixed(2);
      document.getElementById('result').innerHTML = `= ${resultTemp} °Celsius`;
    }
    else if (valueTemp == "cel-kel") {
      
     let celk = parseFloat(numberTemp);
      let celsiusKelvin = celk + 273.15;
      let resultTemp = celsiusKelvin.toFixed(2);
      document.getElementById('result').innerHTML = `= ${resultTemp} °Kelvin`;
    }
    else if (valueTemp == "kel-cel") {
      
     let kelc = parseFloat(numberTemp);
      let kelvinCelsius = kelc - 273.15;
      let resultTemp = kelvinCelsius.toFixed(2);
      document.getElementById('result').innerHTML = `= ${resultTemp} °Celsius`;
    }
    else if (valueTemp == "fah-kel") {
      
      let fahk = parseFloat(numberTemp);
      let fahrenheitKelvin = ((fahk - 32) / 1.8) + 273.15;
      let resultTemp = fahrenheitKelvin.toFixed(2);
      document.getElementById('result').innerHTML = `= ${resultTemp} °Kelvin`;
    }
    else if (valueTemp == "kel-fah") {
      
     let  kelf = parseFloat(numberTemp);
      let kelvinCelsius = ((kelf - 273.15) * 1.8) + 32;
      let resultTemp = kelvinCelsius.toFixed(2);
      document.getElementById('result').innerHTML = `= ${resultTemp} °Fahrenheit`;
    }
  })
  