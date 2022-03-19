
const textarea = document.querySelector("textarea");
const voiceList = document.querySelector("select");
const speechbtn = document.querySelector("button");

let isSpeaking = true ;

voices(); 

function voices(){
    for(let voice of speechSynthesis.getVoices()){

        // selecting "Google US English" voice as default 
        let selected = voice.name === "Google US English" ? "selected" : "";

        // console.log(voice); // It returns the Object of available voices of the device 

        // making our option dynamic and changeable
        let option = `<option value="${voice.name}">${voice.name} (${voice.lang})</option> `;

        //inserting option tag beforeend of select tag
        voiceList.insertAdjacentHTML("beforeend",option)
    }
}

speechSynthesis.addEventListener("voiceschanged",voices)

// our function 
function textToSpeech(text){

    // This Web Speech API interface represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.) In our case its TEXT .
    let utternance = new SpeechSynthesisUtterance(text);


    //Selecting voice 
    for(let voice of speechSynthesis.getVoices()){

        // if the available device voice name is equal to the user selected voice then set the voice to the user selected voice
        if(voice.name === voiceList.value){
            utternance.voice = voice ;
        }
    }

    //It is the controller interface for speech service
    speechSynthesis.speak(utternance);
}


// When user clicks on our button , it will create Even click .
speechbtn.addEventListener("click" , e => {
    e.preventDefault(); //This will prevent our form default behaviour

    //If our textarea is not vacent i.e user has wrote text which we've to convert it in speech 
    if(textarea.value !== ""){

        // if an utternance is not currently in the process of speaking 
        if(!speechSynthesis.speaking){
             //So now we'll call the function and give the user I/P as argument.
            textToSpeech(textarea.value);
        }
        if(textarea.value.length > 100){
            // if isSpeaking is true then change it's value to false and resume the utternance 
            //else change it's value to true and pause the speech 
            if(isSpeaking){
                speechSynthesis.resume();
                isSpeaking=false;
                speechbtn.innerText = " Pause ";
            }else{
                speechSynthesis.pause();
                isSpeaking=true;
                speechbtn.innerText = " Resume ";
            }

            //Once the speech is completed then our btn should converted to its orignal state
            setInterval(()=>{
                if(!speechSynthesis.speaking && !isSpeaking){
                    isSpeaking=true;
                    speechbtn.innerText = " Say It ";
                }
            });
        }else{
            speechbtn.innerText = " Say It ";
        }
    }
})