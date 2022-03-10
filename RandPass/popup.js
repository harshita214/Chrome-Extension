const cardElement = document.querySelector('.card');

const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const copyElement = document.getElementById('copy');

const lettersElement = document.getElementById('letters');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');

let lengthOfPassword = lengthElement.value;

const changePasswordStrength = () => {
    if (lengthOfPassword < 8) {
        cardElement.style.borderTopColor = 'red';
    } else if (lengthOfPassword > 8 && lengthOfPassword < 12) {
        cardElement.style.borderTopColor = 'orange';
    } else if (lengthOfPassword > 12) {
        cardElement.style.borderTopColor = 'green';
    }
};

const generate_random_password = () => {
    const letters = lettersElement.checked ?
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' :
        '';
    const numbers = numbersElement.checked ? '0123456789' : '';
    const symbols = symbolsElement.checked ? '~!@#$%^&*()' : '';
    const char_set = `${letters}${numbers}${symbols}`;
    let password = '';
    for (let i = 0; i < lengthOfPassword; i++) {
        const element = char_set[Math.floor(Math.random() * char_set.length)];
        password += element;
    }
    if (char_set.length === 0) {
        password = "You can't generate password without any characters.";
    }
    changePasswordStrength();
    resultElement.textContent = password;
};

lengthElement.addEventListener('change', (e) => {
    lengthOfPassword = e.target.value;
    generate_random_password();
});

copyElement.addEventListener('click', (e) => {
    resultElement.select();
    const isSuccessfull = document.execCommand('copy');
    if (isSuccessfull) {
        e.target.textContent = 'Copied';
        setTimeout(() => {
            e.target.textContent = 'Copy';
        }, 3000);
    } else {
        resultElement.textContent = "Your browser doesn't support clipboard.";
    }
});

generate_random_password();