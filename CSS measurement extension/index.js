window.onload=function(){
  let px = document.getElementById("px");
  let em = document.getElementById("em");
  let rem = document.getElementById("rem");
  let percent = document.getElementById("percent");
  
  function pxToOther(val) {
    em.value = (val *0.0625);
    rem.value = (val *0.0625);
    percent.value = (val *6.25);
    
  }
  function emToOther(val) {
    px.value = (val * 16);
    rem.value = (val *1);
    percent.value = (val *100);
    
  }
  function remToOther(val) {
    px.value = (val * 16);
    em.value = (val *1);
    percent.value = (val *100);
    
  }
  function percentToOther(val) {
    px.value = (val * 0.16);
    em.value = (val *0.01);
    rem.value = (val *0.01);
    
  }
  
  document.getElementsByName("grow")[0].addEventListener('input',function(event){
    let value= this.value;
    let convertFrom=this.id;
    console.log(convertFrom);
    console.log(value);
    switch (convertFrom) {
        case "px":
          pxToOther(parseFloat(value));
          break;
        case "em":
          emToOther(parseFloat(value));
          break;
      
      case "rem":
          remToOther(parseFloat(value));
          break;
      
      case "percent":
          percentToOther(parseFloat(value));
          break;
      } 
  })
  document.getElementsByName("grow")[1].addEventListener('input',function(event){
    let value= this.value;
    let convertFrom=this.id;
    console.log(convertFrom);
    console.log(value);
    switch (convertFrom) {
        case "px":
          pxToOther(parseFloat(value));
          break;
        case "em":
          emToOther(parseFloat(value));
          break;
      
      case "rem":
          remToOther(parseFloat(value));
          break;
      
      case "percent":
          percentToOther(parseFloat(value));
          break;
      } 
  })
  document.getElementsByName("grow")[2].addEventListener('input',function(event){
    let value= this.value;
    let convertFrom=this.id;
    console.log(convertFrom);
    console.log(value);
    switch (convertFrom) {
        case "px":
          pxToOther(parseFloat(value));
          break;
        case "em":
          emToOther(parseFloat(value));
          break;
      
      case "rem":
          remToOther(parseFloat(value));
          break;
      
      case "percent":
          percentToOther(parseFloat(value));
          break;
      } 
  })
  document.getElementsByName("grow")[3].addEventListener('input',function(event){
    let value= this.value;
    let convertFrom=this.id;
    console.log(convertFrom);
    console.log(value);
    switch (convertFrom) {
        case "px":
          pxToOther(parseFloat(value));
          break;
        case "em":
          emToOther(parseFloat(value));
          break;
      
      case "rem":
          remToOther(parseFloat(value));
          break;
      
      case "percent":
          percentToOther(parseFloat(value));
          break;
      } 
  })
}