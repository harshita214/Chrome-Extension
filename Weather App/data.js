const API_key = '89b30d8b9ae9a69adca1d611b62067eb';

window.onload = function(){

    var startPos;
    var geoSucess = function(position){

        startPos=position;
        var lat = startPos.coords.latitude;
        var lon = startPos.coords.longitude;
        var posUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&appid="+API_key;

        fetch(posUrl)
        .then((data) => data.json())

        .then((jsondata) => {
    // console.log(jsondata.name)
    // console.log(jsondata.main.temp)
    // console.log(jsondata.main.feels_like)
    // console.log(jsondata.weather[0].description)

    var iconcode = jsondata.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    fetch(iconurl).then((res) => res.blob())
    .then((result)=>{

        document.getElementById("text_locaton").innerHTML = jsondata.name
    document.getElementById("text_location_country").innerHTML = jsondata.sys.country
    
    document.getElementById("text_temp").innerHTML = Math.round(jsondata.main.temp)
    document.getElementById("text_feelslike").innerHTML = Math.round(jsondata.main.feels_like)

    document.getElementById("text_description").innerHTML = jsondata.weather[0].description
    const imageObjURL = URL.createObjectURL(result);
    document.getElementById("icon").src = imageObjURL;

    })

})

    };
    navigator.geolocation.getCurrentPosition(geoSucess);

}