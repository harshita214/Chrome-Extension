let hexInput = document.getElementById("hex");
let rgbInput = document.getElementById("rgb");

window.onload=()=>{
    hexInput.value = "";
    rgbInput.value = "";
}

function valid(element){
    element.style.color = "#202040";
}

function invalid(element,otherElement){
    element.style.color = "#FF0000";
    otherElement.value = 0;
}

rgbInput.addEventListener('input', toHex);
hexInput.addEventListener('input', toRgb);

function toRgb(){
    let hexCode = hexInput.value;
    let rgbArr = [];
    if(/^#?[A-Fa-f0-9]{6}$/.test(hexCode)){
        valid(hexInput);
        hexCode = hexCode.split("#")[1] || hexCode;
        for(let i=0; i<hexCode.length;i+=2){
            rgbArr.push(parseInt(hexCode[i] + hexCode[i+1], 16));
            console.log(rgbArr);
        }
        rgbInput.value = "rgb(" + rgbArr + ")";
        document.body.style.backgroundColor = "rgb(" + rgbArr + ")";
    }
    else{
        invalid(hexInput,rgbInput);
    }
}

function toHex(){
    let rgbCode = rgbInput.value;
    let rgbRegex1 = /^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/;
    let rgbRegex2 = /^[0-9]{1,3},[0-9]{1,3},[0-9]{1,3}$/
    let hex = "#";
    if(rgbRegex1.test(rgbCode) || rgbRegex2.test(rgbCode)){
        rgbCode = rgbCode.replace(/[rgb()]+/g,"") || rgbCode;
        rgbCode = rgbCode.split(",");
        let condition = rgbCode.every((value) => {
            return parseInt(value) <= 255;
        });
        if(condition){
            valid(rgbInput);
            rgbCode.forEach(value => {
                value = parseInt(value).toString(16);
                hex += value.length == 1? "0"+value : value;
            });
            hexInput.value = hex;
            document.body.style.backgroundColor = hex;
        }
        else{
            invalid(rgbInput,hexInput);
        }
    }
    else{
        invalid(rgbInput,hexInput);
    }

}