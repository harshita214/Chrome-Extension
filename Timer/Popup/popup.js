var timeInSeconds
var Hour, Minute, Second
var timeLeft
var loaderLength
var totalTime
var timeString = document.getElementById('timestring')
var inputScreen = document.getElementById('inputwrapper')
var timerScreen = document.getElementById('timerwrapper')
var hourInput = document.getElementById('hours')
var minuteInput = document.getElementById('minutes')
var secondInput = document.getElementById('seconds')
var inputError = document.getElementById('error')
var startButton = document.getElementById('startbutton')
var timerMessage = document.getElementById('timermessage')
var resetButton = document.getElementById('resetbutton')
var loadBar = document.getElementById('loader')

startButton.addEventListener('click', clickStart);
resetButton.addEventListener('click', clickReset);



//State Update Code Starts Here ->
setInterval(function (){
    chrome.storage.local.get(['isTimerIdle', 'isTimerRunning'], (result) => {
        if(result.isTimerIdle){
            inputScreen.classList.remove('hide');
            timerScreen.classList.add('hide');
        }
        else {
            inputScreen.classList.add('hide');
            timerScreen.classList.remove('hide');
            if (result.isTimerRunning) {
                timerMessage.innerHTML = "Timer is running";
             }
            else {
                timerMessage.innerHTML = "Time is up"
            }
        }
    }) //fetch storage data
    

},1000)

//TimeUpdate Code Starts Here ->
setInterval(function (){
    chrome.alarms.get('TimerAlarm', function(alarms) {
        if (alarms != null) {
            chrome.storage.local.get(['timeInSeconds'], (result) => {
                totalTime = result.timeInSeconds;
            })
            var now = new Date().getTime();
            var countDownTime = alarms.scheduledTime;
            var distance = countDownTime - now;
            if(distance > 0){
                timeLeft = generateTimeString(Math.floor(distance / 1000));
                loaderLength = (distance * 296)  / (totalTime*1000)
                console.log(loaderLength)
            }
        }
        else {
            timeLeft = '00h 00m 00s';
            loaderLength = 0;
        }
    })

    timeString.innerHTML = timeLeft;
    loadBar.style["width"] = loaderLength + 'px';


    
},50)



function clickReset(){
    chrome.storage.local.set({'isTimerRunning': 0})
    chrome.storage.local.set({'isTimerIdle': 1});
    chrome.alarms.clear('TimerAlarm');
    inputScreen.classList.remove('hide');
    timerScreen.classList.add('hide');
    
}


function clickStart(){
    if ((hourInput.value == 0 && minuteInput.value == 0 && secondInput.value == 0) || (hourInput.value < 0 || minuteInput.value < 0 || secondInput.value < 0)){
        inputError.classList.remove('hide');
    }
    else{

        inputError.classList.add('hide')

        inputScreen.classList.add('hide');
        timerScreen.classList.remove('hide');
        timeInSeconds = hourInput.value * 3600 + minuteInput.value * 60 + secondInput.value;
        chrome.storage.local.set({'timeInSeconds': timeInSeconds})

        chrome.alarms.create(
            'TimerAlarm',
            {when: Date.now() + timeInSeconds * 1000}
        )
        
        chrome.storage.local.set({'isTimerRunning': 1})
        chrome.storage.local.set({'isTimerIdle': 0});
        console.log('clickstarted');
    }
}


function generateTimeString(time){
    Hour = Math.floor(time / 3600);
    Minute = Math.floor((time % 3600) / 60);
    Second = Math.floor((time % 3600) % 60);
    var s = doubleDigitString(Hour) + 'h ' + doubleDigitString(Minute) + 'm ' + doubleDigitString(Second) + 's';
    return s;
}

function doubleDigitString(num){
    s = '0' + num;
    return s.substr(s.length-2);
}

