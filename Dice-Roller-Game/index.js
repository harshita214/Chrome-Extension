
function gamestart() {
    //This is for random number
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    // This will give random image.
    const firstDiceImage = 'image/dice' + firstRandomNum + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
    //This is for random number
    const secondRandomNum = Math.floor(Math.random() * 6) + 1;
    // This will give random image.
    const secondDiceImage = 'image/dice' + secondRandomNum + '.png';

    document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

    //Logic for winner
    if (firstRandomNum > secondRandomNum) {
        document.querySelector('h1').innerHTML = 'Player 1 Won the match';
    }
    else if (firstRandomNum < secondRandomNum) {
        document.querySelector('h1').innerHTML = 'Player 2 Won the match';
    }
    else {
        document.querySelector('h1').innerHTML = 'Match is draw';
    }

}