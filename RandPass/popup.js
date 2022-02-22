const charset = {
    "digits": "0123456789",
    "lowercase": "abcdefghijklmnopqrstuvwxyz",
    "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "symbols": "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};

function randInt(n) {
    return Math.floor(Math.random() * n);
}

function passGen(alpha) {
    var textBox = document.getElementById("textBox");
    const n = textBox.value;
    var pass = '';

    for (var i = 0; i < n; i++) {
        pass += alpha[randInt(alpha.length)];
    }

    textBox.value = pass;
    textBox.select();
}

function getAlpha() {
    var alpha = '';
    var checkboxes = document.getElementsByName('option');

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            alpha += charset[ checkboxes[i].id ];
        }
        else {
            alpha = alpha.replace(charset[ checkboxes[i].id ], "");
        }
    }
    return alpha;
}

document.getElementById("generate").addEventListener("click", () => {
    var alpha = getAlpha();
    
    if (alpha.length == 0) {
        alert("Error! Please select something!")
    }
    else {
        passGen(alpha);
    }
});

document.getElementById("reset").addEventListener("click", () => {
    var textBox = document.getElementById("textBox");
    textBox.value = '';
    textBox.focus();
});