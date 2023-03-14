
let filenames=[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];
let imgs= document.getElementsByTagName("img");

for(imgElt of imgs){
    let r= Math.floor(Math.random() * filenames.length);
    let file= 'anime/'+ filenames[r];
    imgElt.src= chrome.extension.getURL(file);
}