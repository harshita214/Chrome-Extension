const button = document.getElementById("submit");


button.addEventListener("click", function(e){
  e.preventDefault();
  const url =document.getElementById("url").value;
  const topic=document.getElementById("topic").value;
  const date=document.getElementById("date").value;

  const req = new XMLHttpRequest();
  const baseUrl = "http://localhost:5000/";
  const urlParams = `url=${url}&topic=${topic}&date=${date}`;

  
  req.open("POST", baseUrl, true);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded","Access-Control-Allow-Origin");
  req.send(urlParams);
  alert('data submitted')

 
});



