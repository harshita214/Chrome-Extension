
//Send Message To Background
chrome.runtime.sendMessage({name: "fetchWords"}, (response) => {
    //Wait for Response
  
    console.log(response);
  
    document.querySelector('h4').innerHTML = response.word;
    document.querySelector('p').innerHTML = response.desc;
  
  
  });
  
  document.getElementById('next').addEventListener('click',()=>
{
  chrome.runtime.sendMessage({name: "fetchWords"}, (response) => {
    //Wait for Response
  
    console.log(response);
  
    document.querySelector('h4').innerHTML = response.word;
    document.querySelector('p').innerHTML = response.desc;
  
  
  });
});
