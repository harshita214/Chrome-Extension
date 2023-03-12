var input = document.querySelector('#city');
var main = document.querySelector('#text_locaton');
var country = document.querySelector('#text_location_country');
var temp = document.querySelector('#text_temp');
var feels = document.querySelector('#text_feelslike');
var desc = document.querySelector('#text_description');
var button = document.querySelector('.submit');

button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=89b30d8b9ae9a69adca1d611b62067eb')
    .then(response => response.json())
    .then(data => {
         var tempVal = Math.round(data.main.temp);
        var feelVal = Math.round(data.main.feels_like);
        var nameVal = data.name;
        var counVal = data.sys.country;
        var descVal = data.weather[0].description;
        

        main.innerHTML = nameVal;
        country.innerHTML = counVal;
        temp.innerHTML = tempVal;
        feels.innerHTML = feelVal;
        desc.innerHTML = descVal;
        input.value = "";
    })

    .catch(err=> alert("wrong city name!"));
})
