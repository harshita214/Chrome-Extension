function Colorcode() {

let color = document.getElementById('colorPicker').value;

    
    document.body.style.backgroundColor = color;

    
    document.getElementById('box').value = color;
}


document.getElementById('colorPicker')
    .addEventListener('input', Colorcode);