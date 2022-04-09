const inputText = document.getElementById("input");
const upload = document.getElementById("upload");

const prediction = document.getElementById("prediction");
const ip = document.getElementById("ip");
const city = document.getElementById("city");
const region = document.getElementById("region");
const postal_code = document.getElementById("postal_code");
const country = document.getElementById("country");
const timezone = document.getElementById("timezone");
const time = document.getElementById("time");
const connection = document.getElementById("connection");
const isp = document.getElementById("isp");
const results = document.getElementById("results");

inputText.onchange = function () {
  console.log(inputText.value);
  let ip_address = inputText.value;
  upload.innerHTML = "IP Address Entered Successfully!";

  prediction.innerHTML = "Geolocation Loading ...";

  //Loading location
  fetch(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=a5eaf500bec041f39ec266288a9e6296&ip_address=${ip_address}`
  )
    .then((data) => data.json())
    .then((ipData) => {
      console.log(ipData);
      prediction.innerHTML = "";
      results.style.display = "block";
      results.style.backgroundImage = `url(${ipData.flag.png})`;
      ip.innerHTML = "IP Address: " + ipData.ip_address;
      city.innerHTML = "City: " + ipData.city;
      region.innerHTML = "State: " + ipData.region;
      postal_code.innerHTML = "Postal Code: " + ipData.postal_code;
      country.innerHTML = "Country: " + ipData.country;
      timezone.innerHTML = "Timezone: " + ipData.timezone.name;
      time.innerHTML = "Current Time: " + ipData.timezone.current_time;
      connection.innerHTML =
        "Connection : " + ipData.connection.autonomous_system_organization;
      isp.innerHTML = "ISP: " + ipData.connection.isp_name;
    });
};
