const api_key = '' // enter your api key
const search = document.querySelector('#search');
search.addEventListener('keypress',(e)=>{ //here our event is keypress
    if(e.key === 'Enter' ) //if user has pressed enter key
    {
        fetchImages(search.value); //passing search's value
    }
})

function fetchImages(value)
{
    fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&limit=9&api_key=${api_key}`)
    .then(res=>res.json()) //after fetching sending our response in json format
    .then(jsonData => {
        buildUI(jsonData)
    })
}


function buildUI(response) {
    //just see response in json format and you will understand it
    let column = document.querySelector('.columns')
    let len = response.data.length; //finding length of data array
    column.innerHTML = ''; // clearing existing data if user search another gif and it will remove previous gifs and give us new ones
    for (let index = 0; index < len; index++) {
   let url = response.data[index].images.original.url //from response we are getting our data array and from data array we have images and in images we have original and inside original we have our url
   let img = document.createElement('img')
   img.setAttribute('src', url); // setting attribute and our attribute is gonna be src
    column.appendChild(img);
    }
}

document.body.addEventListener('click', (e) => { //whenever there's a click action happen in the body
    if (e.target.tagName === "IMG")              
        chrome.downloads.download({ url: e.target.src }, () => { })
})