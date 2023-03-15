const img = document.querySelector("img"),
	file = document.querySelector('input[type="file"]'),
	picker = document.getElementById("picker"),
	colorList = document.querySelectorAll(".res div"),
	del = document.querySelector("#del"),
	copy = document.querySelector("#copy"),
	hex = document.querySelector(".hex"),
	container = document.querySelector(".container");

var res = document.querySelector("#result");
var resBar = document.querySelector(".res");


document.body.addEventListener("dragover", (event) => {
	event.preventDefault();
	document.body.classList.add("drag-over");
});
document.body.addEventListener("dragleave", () => {
	document.body.classList.remove("drag-over");
});
document.body.addEventListener("drop", (event) => {
	event.preventDefault();
	document.body.classList.remove("drag-over");
	const file = event.dataTransfer.files[0];
	if (file.type.startsWith("image/")) {
		fileInput.files = event.dataTransfer.files;
		const reader = new FileReader();
		reader.readAsDataURL(fileInput.files[0]);
		img.setAttribute("title", "Clique para trocar imagem!");
		img.style.opacity = "1";
		reader.onload = () => {
			img.setAttribute("src", reader.result);
		};
	}
});


img.addEventListener("click", () => {
	file.click();
});
if (file.files.length === 0) {
	img.setAttribute("title", "Clique para selecionar uma imagem!");
}
fileInput.onchange = () => {
	let reader = new FileReader();
	if (file.files.length === 0) {
		alert("Selecione um arquivo!");
	} else {
		img.setAttribute("title", "Clique para trocar imagem!");
		img.style.opacity = "1";
		//picker.disabled = false;
		reader.readAsDataURL(fileInput.files[0]);
		reader.onload = () => {
			img.setAttribute("src", reader.result);
		};
	}
};

const colorThief = new ColorThief();
var hexColors = null;
img.addEventListener("load", function () {
	const topColors = colorThief.getPalette(img, 4);
	hexColors = topColors.map((color) => {
		return rgbToHex(color);
	});

	colorList.forEach((cor, i) => {
		cor.style.background = hexColors[i];
		cor.innerHTML = `<p>${hexColors[i]}</p>`;
	});
	return hexColors;
});
function rgbToHex(rgb) {
	return (
		"#" +
		((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)
	);
}
del.addEventListener("click", () => {
	let inpText = document.querySelector("input[type='text']");
	file.value = "";
	img.setAttribute("src", "");
	img.style.opacity = "0";
	colorList.forEach((cor, i) => {
		cor.style.background = "";
		cor.innerHTML = `<p></p>`;
	});
});
colorList.forEach((item, i) => {
	item.addEventListener("mouseover", () => {
		colorList.forEach((divHex) => {
			divHex.classList.remove("active");
		});
		item.classList.add("active");
	});
});


colorPicker = null;
picker.addEventListener("click", () => {
	const resultElement = document.getElementById("result");
	if (!window.EyeDropper) {
		resultElement.textContent =
			"Your browser does not support the EyeDropper API";
		return;
	}
	const eyeDropper = new EyeDropper();
	eyeDropper
		.open()
		.then((result) => {
			colorPicker = result.sRGBHex;

			resultElement.textContent = colorPicker;
			resultElement.style.backgroundColor = colorPicker;
			container.style.height = "460px";
			hex.style.opacity = "1";
			hex.style.background = colorPicker;
		})
		.catch((e) => {
			resultElement.textContent = e;
		});
});


copy.addEventListener("click", () => {
	const temp = document.createElement("textarea");
	temp.value = colorPicker;
	document.body.appendChild(temp);
	temp.select();
	document.execCommand("copy");
	document.body.removeChild(temp);
	copy.innerText = "check_circle";
	alert("Valor copiado para a área de transferência!");
	setTimeout(() => {
		container.style.height = "410px";
		hex.style.opacity = "0";
		copy.innerText = "content_copy";
	}, 5000);
});
