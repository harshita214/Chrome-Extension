const buttons = document.getElementsByTagName("button");


  
  for (let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",getdata);
    
  };

function getdata (){
  const text =this.innerHTML;
  if (text=="Light Spacing") {
    chrome.tabs.executeScript({
      file:"two.js"
    })
    
  } else if(text=="Medium Spacing") {
    chrome.tabs.executeScript({
      file:"four.js"
    })
    
  }
  else if(text=="Extra Large"){
    chrome.tabs.executeScript({
      file:"six.js"
    })

  }
};






