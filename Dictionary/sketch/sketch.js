
function setup() {
  noCanvas();

  let bgpage = chrome.extension.getBackgroundPage();
  let word = bgpage.word.trim();

  let url = `http://api.wordnik.com:80/v4/word.json/
  ${word}
  /definitions?limit=1
  &includeRelated=false
  &sourceDictionaries=all
  &useCanonical=false
  &includeTags=false
  &api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5
  `;
  url = url.replace(/\s+/g, '');
  loadJSON(url, gotData);

  function gotData(data) {
    let key= word;
    localStorage.setItem(key,data[0].text);
    createP(data[0].text).style('font-size', '30pt');
  }

  
}
