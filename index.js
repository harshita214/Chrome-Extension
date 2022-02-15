const get_meaning = document.getElementById("root");
const button = document.getElementById("search");
button.addEventListener("click", function () {
  console.log("hii");
  const search_word = document.getElementById("word");
  const word = search_word.value;
  const promise = fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  console.log(promise);

  promise
    .then((value) => {
      if (!value.ok) {
        throw Error(value.statusText);
      }
      //console.log(value);
      return value.json();
    })
    .then((res) => {
      //console.log(res);
      get_meaning.innerHTML += "<h3>" + word + ":" + "</h3>";
      for (let i = 0; i < res.length; i++) {
        //console.log("meaning",res[i]);
        var meaning_array = res[i].meanings;
        for (const x of meaning_array) {
          //console.log(x.definitions);
          var define = x.definitions;
          for (const y of define) {
            console.log("meaning of word:", y.definition);
            const get_Word = y.definition;
            get_meaning.innerHTML += "<i>" + get_Word + "</i>" + "<br>";
          }
        }
      }
    });
  search_word.value = "";
  search_word.focus();
});
