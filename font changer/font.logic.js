String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var lastSelectedStandard = "default";
var lastSelectedSans = "default";
var lastSelectedSerif = "default";
var lastSelectedMonospace = "default";

var colors = {
	"white-f": "#fff",
	"black-f": "black",
	"red-f": "#FF2F3B",
	"brown-f": "#A55820",
	"orange-f": "#FF9F2F",
	"yellow-f": "#FFEA2F",
	"purple-f": "#E22FFF",
	"blue-f": "#2FCDFF",
	"dark-blue-f": "#2F69FF"
}

var invColors = {
	"#fff": "white-f",
	"black": "black-f",
	"#FF2F3B": "red-f",
	"#A55820": "brown-f",
	"#FF9F2F": "orange-f",
	"#FFEA2F": "yellow-f",
	"#E22FFF": "purple-f",
	"#2FCDFF": "blue-f",
	"#2F69FF": "dark-blue-f"
}


$('.slider-input').jRange({
    from: 12,
    to: 24,
    step: 1,
    scale: [],
    format: '%s',
    width: 370,
    showLabels: false,
    snap: true
});

chrome.storage.sync.get(['color'], function(result) {
	if (result['color']) {
		$(".clr").removeClass("f-selected");
		$("#" + invColors[result['color']]).addClass("f-selected");
	}
});

async function getGoogleFonts() {
	let response = await fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCOyKeQHMxdTl0P-prjiq-HfI8t8PaGTVA");

	if (response.ok) {
	  let json = await response.json();
	  json['items'].forEach(function(item, i, arr) {
		  if (item['files']['regular']) {
			var font = new FontFace(item['family'], `url(${item['files']['regular']})`);
			document.fonts.add(font);

			fontOption = new Option(item['family'], item['files']['regular']);
			fontOption.setAttribute("style",`font-family:${item['family']}`);
			$(".fonts-list-standard").append(fontOption);
		  }
		  if (item['category'] === "serif" && item['files']['regular']) {
			var font = new FontFace(item['family'], `url(${item['files']['regular']})`);
			document.fonts.add(font);

			fontOption = new Option(item['family'], item['files']['regular']);
			fontOption.setAttribute("style",`font-family:${item['family']}`);

			$(".fonts-list-sans").append(fontOption);
		  }
		  if (item['category'] === "sans-serif" && item['files']['regular']) {
			var font = new FontFace(item['family'], `url(${item['files']['regular']})`);
			document.fonts.add(font);

			fontOption = new Option(item['family'], item['files']['regular']);
			fontOption.setAttribute("style",`font-family:${item['family']}`);

			$(".fonts-list-serif").append(fontOption);
		  }
		  if (item['category'] === "monospace" && item['files']['regular']) {
			var font = new FontFace(item['family'], `url(${item['files']['regular']})`);
			document.fonts.add(font);

			fontOption = new Option(item['family'], item['files']['regular']);
			fontOption.setAttribute("style",`font-family:${item['family']}`);

			$(".fonts-list-monospace").append(fontOption);
		  }
	  });

	  chrome.storage.sync.get(['standard', 'sans', 'serif', 'monospace', 'color'], function(result) {
		if (result['standard']) {
			standardFontData = JSON.parse(result['standard']);

			$(".font-preview-standard").css('font-family', `"${standardFontData.family}", Arial`)
			$('.fonts-list-standard option:contains("' + standardFontData.family + '")').prop('selected', 'selected');

			lastSelectedStandard = standardFontData.family;
		}
		if (result['sans']) {
			sansFontData = JSON.parse(result['sans']);

			$(".font-preview-sans").css('font-family', `"${sansFontData.family}", Arial, sans-serif`)
			$('.fonts-list-sans option:contains("' + sansFontData.family + '")').prop('selected', 'selected');

			lastSelectedSans = sansFontData.family;
		}
		if (result['serif']) {
			serifFontData = JSON.parse(result['serif']);

			$(".font-preview-serif").css('font-family', `"${serifFontData.family}", Arial, serif`)
			$('.fonts-list-serif option:contains("' + serifFontData.family + '")').prop('selected', 'selected');

			lastSelectedSerif = serifFontData.family;
		}
		if (result['monospace']) {
			monospaceFontData = JSON.parse(result['monospace']);

			$(".font-preview-monospace").css('font-family', `"${monospaceFontData.family}", Arial, monospace`)
			$('.fonts-list-monospace option:contains("' + monospaceFontData.family + '")').prop('selected', 'selected');

			lastSelectedMonospace = monospaceFontData.family;
		}

		if (result['color']) {
			$('.font-color option:contains("' + result['color'].capitalize() + '")').prop('selected', 'selected');
		}
	})
	}
}
getGoogleFonts();

chrome.storage.sync.get(['disabled'], function(result) {
	if (result['disabled']) {
		$("#status-switch").prop('checked', false);
		chrome.fontSettings.setDefaultFontSize({
			pixelSize: 14,
		});
		chrome.fontSettings.setMinimumFontSize({
			pixelSize: 14,
		});
		$('.font-size').jRange('setValue', '14');
		$(".font-size-px").prop('innerText', 14);

		$('.font-size').jRange('disable');
		$("select").prop('disabled', true);

		$(".clr").removeClass("f-selected");
		$("#black-f").addClass("f-selected");
		chrome.runtime.sendMessage({type: "changeColor", color: "black"});
		chrome.storage.sync.set({color: false});
	} else {
		$("#status-switch").prop('checked', true);
	}
});

$("#status-switch").on("click", function(e) {
	const eValue = e.target.checked;
	if (eValue) {
		chrome.storage.sync.set({disabled: false});
		$('.font-size').jRange('enable');
		$("select").prop('disabled', false);
	} else {
		chrome.storage.sync.set({disabled: true});
		$('.font-size').jRange('setValue', '14');
		$(".font-size-px").prop('innerText', 14);

		$('.font-size').jRange('disable');
		$("select").prop('disabled', true);

		$(".clr").removeClass("f-selected");
		$("#black-f").addClass("f-selected");
		chrome.runtime.sendMessage({type: "changeColor", color: "black"});
		chrome.storage.sync.set({color: false});
	}
});

$(".color-reset").on("click", function(e) {
	$(".clr").removeClass("f-selected");
	$("#black-f").addClass("f-selected");
	chrome.runtime.sendMessage({type: "changeColor", color: "black"});
	chrome.storage.sync.set({color: false});
});

// Font size
chrome.fontSettings.getDefaultFontSize(({pixelSize}) => {
	$('.font-size').jRange('setValue', String(pixelSize));
	$(".font-size-px").prop('innerText', pixelSize);		
});

$(".size-reset").on("click", function(e) {
	$(".font-size-px").prop('innerText', 14);
	chrome.fontSettings.setDefaultFontSize({
		pixelSize: 14,
	});
	chrome.fontSettings.setMinimumFontSize({
		pixelSize: 14,
	});
});

$(".font-size").change(function(event) {
	const size = +event.target.value || 0;
	$(".font-size-px").prop('innerText', size);
	chrome.fontSettings.setDefaultFontSize({
		pixelSize: size,
	});
	chrome.fontSettings.setMinimumFontSize({
		pixelSize: size,
	});
});

$(".clr").on('click', function(e) {
	$(".clr").removeClass("f-selected");
	$("#" + e.target.id).addClass("f-selected");
	if (e.target.id === "black-f") {
		chrome.runtime.sendMessage({type: "changeColor", color: "black"});
		chrome.storage.sync.set({color: false});
	} else {
		chrome.runtime.sendMessage({type: "changeColor", color: colors[e.target.id]});
		chrome.storage.sync.set({color: colors[e.target.id]});
	}
});


$(".family-reset").on('click', function(e) {
	$(".font-preview-standard").css('font-family', `Arial`);
	$(".fonts-list-standard option:first").prop("selected", true);
	chrome.storage.sync.set({standard: false});
	chrome.runtime.sendMessage({type: "removeFont", fontStyle:"standard", last:lastSelectedStandard});
	lastSelectedStandard = "default";

	$(".font-preview-sans").css('font-family', `Arial, serif`);
	$(".fonts-list-sans option:first").prop("selected", true);
	chrome.storage.sync.set({sans: false});
	chrome.runtime.sendMessage({type: "removeFont", fontStyle:"sans-serif", last:lastSelectedSans});
	lastSelectedSans = "default";

	$(".font-preview-serif").css('font-family', `Arial, sans-serif`);
	$(".fonts-list-serif option:first").prop("selected", true);
	chrome.storage.sync.set({serif: false});
	chrome.runtime.sendMessage({type: "removeFont", fontStyle:"serif", last:lastSelectedSerif});
	lastSelectedSerif = "default";

	$(".font-preview-monospace").css('font-family', `Arial, monospace`);
	$(".fonts-list-monospace option:first").prop("selected", true);
	chrome.storage.sync.set({monospace: false});
	chrome.runtime.sendMessage({type: "removeFont", fontStyle:"monospace", last:lastSelectedMonospace});
	lastSelectedMonospace = "default";
})

$('.fonts-list-standard').change(function(event) {
	if (event.target.value !== "default") {
		var font = new FontFace(event.target.selectedOptions[0].label, `url(${event.target.value})`);
		document.fonts.add(font);
		$(".font-preview-standard").css('font-family', `"${event.target.selectedOptions[0].label}", Arial`)
		chrome.runtime.sendMessage({type: "changeFont", last:lastSelectedStandard, fontStyle:"standard", family: event.target.selectedOptions[0].label, fontURL: event.target.value.replace('http', 'https')});
		chrome.storage.sync.set({standard: JSON.stringify({family: event.target.selectedOptions[0].label, url: event.target.value.replace('http', 'https')})});
		lastSelectedStandard = event.target.selectedOptions[0].label;
	} else {
		$(".font-preview-standard").css('font-family', `Arial`)
		chrome.storage.sync.set({standard: false});
		chrome.runtime.sendMessage({type: "removeFont", fontStyle:"standard", last:lastSelectedStandard});
		lastSelectedStandard = "default";
	}
});

$('.fonts-list-sans').change(function(event) {
	if (event.target.value !== "default") {
		var font = new FontFace(event.target.selectedOptions[0].label, `url(${event.target.value})`);
		document.fonts.add(font);
		$(".font-preview-sans").css('font-family', `"${event.target.selectedOptions[0].label}", Arial, serif`)
		chrome.runtime.sendMessage({type: "changeFont", last:lastSelectedSans, fontStyle:"sans-serif", family: event.target.selectedOptions[0].label, fontURL: event.target.value.replace('http', 'https')});
		chrome.storage.sync.set({sans: JSON.stringify({family: event.target.selectedOptions[0].label, url: event.target.value.replace('http', 'https')})});
		lastSelectedSans = event.target.selectedOptions[0].label;
	} else {
		$(".font-preview-sans").css('font-family', `Arial, serif`)
		chrome.storage.sync.set({sans: false});
		chrome.runtime.sendMessage({type: "removeFont", fontStyle:"sans-serif", last:lastSelectedSans});
		lastSelectedSans = "default";
	}
});

$('.fonts-list-serif').change(function(event) {
	if (event.target.value !== "default") {
		var font = new FontFace(event.target.selectedOptions[0].label, `url(${event.target.value})`);
		document.fonts.add(font);
		$(".font-preview-serif").css('font-family', `"${event.target.selectedOptions[0].label}", Arial, sans-serif`)
		chrome.runtime.sendMessage({type: "changeFont", last:lastSelectedSerif, fontStyle:"serif", family: event.target.selectedOptions[0].label, fontURL: event.target.value.replace('http', 'https')});
		chrome.storage.sync.set({serif: JSON.stringify({family: event.target.selectedOptions[0].label, url: event.target.value.replace('http', 'https')})});
		lastSelectedSerif = event.target.selectedOptions[0].label;
	} else {
		$(".font-preview-serif").css('font-family', `Arial, sans-serif`)
		chrome.storage.sync.set({serif: false});
		chrome.runtime.sendMessage({type: "removeFont", fontStyle:"serif", last:lastSelectedSerif});
		lastSelectedSerif = "default";
	}
});

$('.fonts-list-monospace').change(function(event) {
	if (event.target.value !== "default") {
		var font = new FontFace(event.target.selectedOptions[0].label, `url(${event.target.value})`);
		document.fonts.add(font);
		$(".font-preview-monospace").css('font-family', `"${event.target.selectedOptions[0].label}", Arial, monospace`)
		chrome.runtime.sendMessage({type: "changeFont", last:lastSelectedMonospace, fontStyle:"monospace", family: event.target.selectedOptions[0].label, fontURL: event.target.value.replace('http', 'https')});
		chrome.storage.sync.set({monospace: JSON.stringify({family: event.target.selectedOptions[0].label, url: event.target.value.replace('http', 'https')})});
		lastSelectedMonospace = event.target.selectedOptions[0].label;
	} else {
		$(".font-preview-monospace").css('font-family', `Arial, monospace`)
		chrome.storage.sync.set({monospace: false});
		chrome.runtime.sendMessage({type: "removeFont", fontStyle:"monospace", last:lastSelectedMonospace});
		lastSelectedMonospace = "default";
	}
});