
function getRandomNumber(number) {
    var max = (number+1);
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  
  //Listen for messages
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
  
    if(msg.name == "fetchWords"){
  
  
      const apiKey = 'OUR-API-KEY';
      const dateStr = new Date().toISOString().slice(0, 10); //2020-01-01
      const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+dateStr+'&api_key='+apiKey;
      //We call api..
      //wait for response..
      //send the response...
  
      //fetch(..).await...
  
      const wordsObj = [
        "indeed",
        "Garble",
        "perihelion",
        "brailler",
        "factoid",
        "Lugubrious",
        "consider",
        "accord",
        "utter"
      ];
      const wordsDescObj = [
        "(used for emphasizing a positive statement or answer) really; certainly",
        "reproduce (a message, sound, or transmission) in a confused and distorted way.",
        "the point in the orbit of a planet, asteroid, or comet at which it is closest to the sun.",
        "a mechanical device for writing braille",
        "an item of unreliable information that is reported and repeated so often that it becomes accepted as fact",
        "very sad in an exaggerated or insincere way.",
        "simply means to think about, look at, or judge",
        "concurrence of opinion",
        "without qualification"
      ];
  
      var number = getRandomNumber(9);
  
  
  
      //Send response
      response({word: wordsObj[number], desc: wordsDescObj[number]});
  
    }
  
  });
  