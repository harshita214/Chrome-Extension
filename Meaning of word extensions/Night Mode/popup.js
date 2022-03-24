if(document.querySelector(".popup")){
    const button  = document.querySelector(".button");
    const circle  = document.querySelector(".circle");
    const body = document.querySelector("body");

    let buttonOn = false;

    circle.addEventListener("click", () => {
        if(!buttonOn){
            buttonOn = true;
            circle.style.animation = "movecircleRight 1s forwards";
            button.style.animation = "backgroundblack 1s forwards";
            body.style.animation = "backgroundBlack 1s forwards";
            chrome.tabs.executeScript({
                file:"buttonOn.js"
            })
        }else{
            buttonOn = false;
            circle.style.animation = "movecircleLeft 1s forwards";
            button.style.animation = "backgroundwhite 1s forwards";
            body.style.animation = "backgroundWhite 1s forwards";
            chrome.tabs.executeScript({
                file:"buttonOff.js"
            })
        }
    });
}
