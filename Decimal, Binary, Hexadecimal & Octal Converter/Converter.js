document.getElementById("button").addEventListener("click", Converter);

function Converter() {
	var input = document.getElementById("input").value;
	fromSelection = document.getElementById("from");
	toSelection = document.getElementById("to");
	var from = fromSelection.options[fromSelection.selectedIndex].value
	var convert = toSelection.options[toSelection.selectedIndex].value
	
	if(from == "Decimal"){ 
		if (input < 0) {
		  input = 0xFFFFFFFF + n + 1;
		 } 
		 
	switch (convert)  
		{  
		case "Binary":  
		document.getElementById("result").innerHTML = parseInt(input, 10).toString(2);
		break;  
		case "Hexadecimal":  
		document.getElementById("result").innerHTML = parseInt(input, 10).toString(16);
		break;  
		case "Octal":  
		document.getElementById("result").innerHTML = parseInt(input, 10).toString(8);
		break;  
		default:  
		document.getElementById("result").innerHTML =("Wrong input.........");  
		}
	}
	else if(from == "Binary"){ 
		 
	switch (convert)  
		{  
		case "Decimal":  
		document.getElementById("result").innerHTML = parseInt(input, 2).toString(10);
		break;  
		case "Hexadecimal":  
		document.getElementById("result").innerHTML = parseInt(input, 2).toString(16);
		break;  
		case "Octal":  
		document.getElementById("result").innerHTML = parseInt(input, 2).toString(8);
		break;  
		default:  
		document.getElementById("result").innerHTML =("Wrong input.........");  
		}
	}
	else if(from == "Octal"){ 
		 
	switch (convert)  
		{  
		case "Decimal":  
		document.getElementById("result").innerHTML = parseInt(input, 8).toString(10);
		break;  
		case "Hexadecimal":  
		document.getElementById("result").innerHTML = parseInt(input, 8).toString(16);
		break;  
		case "Binary":  
		document.getElementById("result").innerHTML = parseInt(input, 8).toString(2);
		break;  
		default:  
		document.getElementById("result").innerHTML =("Wrong input.........");  
		}
	}
	else if(from == "Hexadecimal"){ 
		 
	switch (convert)  
		{  
		case "Decimal":  
		document.getElementById("result").innerHTML = parseInt(input, 16).toString(10);
		break;  
		case "Octal":  
		document.getElementById("result").innerHTML = parseInt(input, 16).toString(8);
		break;  
		case "Binary":  
		document.getElementById("result").innerHTML = parseInt(input, 16).toString(2);
		break;  
		default:  
		document.getElementById("result").innerHTML =("Wrong input.........");  
		}
	}
	
}

