var secondsLeft

chrome.storage.local.set({'isTimerRunning': 0})
chrome.storage.local.set({'isTimerIdle': 1})

const options = {
    type: "basic",
    title: "AlarmClock",
    message: `Now the time is:${new Date().getHours()}:${new Date().getMinutes()}`,
    iconUrl: "logo.png"
  };

chrome.alarms.onAlarm.addListener(
    function(alarm){
        if (alarm.name == 'TimerAlarm'){
            chrome.storage.local.set({'isTimerRunning': 0})
            chrome.alarms.clear('TimerAlarm')
        }
    }
);
