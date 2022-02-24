import Color from "./color.esm.js";
var slider = document.getElementById("slider");
var huePreview = document.getElementById("hue");
var colorPalette = document.getElementById("palettewrapper");
var genButton = document.getElementById("generatebutton");
var copyAlert = document.getElementById("copyalert");

window.addEventListener("load", function(){
    chrome.storage.local.get(['hue'], function(hueValue) {
        setSliderState(hueValue.hue);
        setColorPalette(hueValue.hue);
    });
})

genButton.addEventListener("click", onGenerate);
slider.addEventListener("change", onValueChange);


function onValueChange(){
    setSliderState(slider.value);
}
function onGenerate(){
    chrome.storage.local.set({'hue': slider.value}, function() {
    });
    while(colorPalette.firstChild){
        colorPalette.removeChild(colorPalette.firstChild)
    };
    setColorPalette(slider.value);

}
function setSliderState(sliderValue){
    slider.value = sliderValue;
    let hueColor = `hsl(${sliderValue}, 100%, 50%)`;
    huePreview.style.backgroundColor = hueColor;    
}
function setColorPalette(sliderValue){
    let palette = genPalette(sliderValue);
    palette.forEach(color => {
        const colorTab = document.createElement("div");
        colorTab.classList.add("colorTab");
        colorTab.addEventListener("click", function(){
            navigator.clipboard.writeText(color.hex);
            copyAlert.classList.add("fade-in");
            var alertTimeout = setTimeout(function(){
                copyAlert.classList.remove("fade-in");
            },2000)
        });

        colorTab.style.backgroundColor = color.hex;
        colorPalette.appendChild(colorTab);
    });

}
function genPalette(sliderValue){

    let primaryText = new Color("hsl", [sliderValue, 4, 95]);
    let secondaryText = new Color("hsl", [sliderValue, 4, 80]);
    let tertiaryText = new Color("hsl", [sliderValue, 6, 60]);
    let accent = new Color("hsl", [sliderValue, 6, 40]);
    let card = new Color("hsl", [sliderValue, 10, 15]);
    let background = new Color("hsl", [sliderValue, 12, 10]);
    let cta = new Color("hsl", [sliderValue, 80, 70]);
    var palette = [
            primaryText,
            secondaryText, 
            tertiaryText, 
            accent, 
            card, 
            background, 
            cta
        ];
    return palette;
}