
/*document.querySelector("form").addEventListener("submit",async(event)=>{
    event.preventDefault();
    const word =document.querySelector("#word").value;
    const response= await fetch('http://api.detamuse.com/words?rel_syn=${word}');
    const synonyms= await response.json();
    document.querySelector("#synonyms").innerHTML=synonyms
    .map((synonym)=>synonym.word)
    .join(", ");
});

*/
window.onload=function(){
console.log("hi");

var api = 'https://api.datamuse.com/words?rel_syn=';
var query = api + userWord + '&callback';
var synWord = document.getElementById('result');
var userWord = '';

function displaySyn(wordOne, wordTwo){
  console.log(userWord);
  synWord.innerHTML = '"' + wordOne + '"' +' is synonymous with ' + '"' + wordTwo + '"';
  console.log(synWord.innerHTML);

}

function getJSON(url, callback) {
    console.log("hello");
  var xhr = new XMLHttpRequest();
  xhr.open("get", url, true);
  xhr.responseType = "json";
  xhr.onload = function() {
  var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
}


document.querySelector("#search").addEventListener('click',function(){
    console.log("harry");
  userWord = document.getElementById('userWord').value;
  
  getJSON(api + userWord + '&callback',function(err, data) {
    
    displaySyn( userWord , data[0].word);
    
  }); 
  
})}
/*function getSyn(){
    console.log("harry");
  userWord = document.getElementById('userWord').value;
  
  getJSON(api + userWord + '&callback',function(err, data) {
    
    displaySyn( userWord , data[0].word);
    
  }); 
  
}*/

