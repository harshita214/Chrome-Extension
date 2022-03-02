document.getElementById("button").addEventListener("click", () => {

    const zone1 = document.getElementById("country-list1").value
    const zone2 = document.getElementById("country-list2").value
    var url, time;

    url = "https://api.timezonedb.com/v2.1/get-time-zone?key=8Q3J95FGY8W4&format=json&by=zone&zone=" + zone1;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            time = data.formatted.split(' ')[1];
            document.getElementById("timeBox1").value = time;
        });

    url = "https://api.timezonedb.com/v2.1/get-time-zone?key=8Q3J95FGY8W4&format=json&by=zone&zone=" + zone2;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            time = data.formatted.split(' ')[1];
            document.getElementById("timeBox2").value = time;
        });
});