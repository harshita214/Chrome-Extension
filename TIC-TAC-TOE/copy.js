clearDOM();

addStructure();

addJavascript();

function clearDOM(){
    document.documentElement.innerHTML = '';
  }

function addStructure(){
    let style = document.createElement('style');
    style.innerHTML = `
    *, *::after, *::before {
        box-sizing: border-box;
      }
      
      :root {
        --cell-size: 100px;
        --mark-size: calc(var(--cell-size) * .9);
      }
      
      body {
        margin: 0;
      }
      
      .board {
        width: 100vw;
        height: 100vh;
        display: grid;
        justify-content: center;
        align-content: center;
        justify-items: center;
        align-items: center;
        grid-template-columns: repeat(3, auto)
      }
      
      .cell {
        width: var(--cell-size);
        height: var(--cell-size);
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
      }
    
      .cell:first-child,
      .cell:nth-child(2),
      .cell:nth-child(3) {
        border-top: none;
      }
    
      .cell:nth-child(3n + 1) {
        border-left: none;
      }
    
      .cell:nth-child(3n + 3) {
        border-right: none;
      }
    
      .cell:last-child,
      .cell:nth-child(8),
      .cell:nth-child(7) {
        border-bottom: none;
      }
    
      .cell.x,
      .cell.circle {
        cursor: not-allowed;
      }
      
      .cell.x::before,
      .cell.x::after,
      .cell.circle::before {
        background-color: red;
      }
      
    
      .board.x .cell:not(.x):not(.circle):hover::before,
      .board.x .cell:not(.x):not(.circle):hover::after,
      .board.circle .cell:not(.x):not(.circle):hover::before {
        background-color: lightgrey;
      }
      
    
      .cell.x::before,
      .cell.x::after,
      .board.x .cell:not(.x):not(.circle):hover::before,
      .board.x .cell:not(.x):not(.circle):hover::after {
        content: '';
        position: absolute;
        width: calc(var(--mark-size) * .15);
        height: var(--mark-size);
      }
      
      .cell.x::before,
      .board.x .cell:not(.x):not(.circle):hover::before {
        transform: rotate(45deg);
      }
      
      .cell.x::after,
      .board.x .cell:not(.x):not(.circle):hover::after {
        transform: rotate(-45deg);
      }
       
     
      .cell.circle::before,
      .cell.circle::after,
      .board.circle .cell:not(.x):not(.circle):hover::before,
      .board.circle .cell:not(.x):not(.circle):hover::after {
        content: '';
        position: absolute;
        border-radius: 50%;
      }
      
      .cell.circle::before,
      .board.circle .cell:not(.x):not(.circle):hover::before {
        width: var(--mark-size);
        height: var(--mark-size);
      }
      
      .cell.circle::after,
      .board.circle .cell:not(.x):not(.circle):hover::after {
        width: calc(var(--mark-size) * .7);
        height: calc(var(--mark-size) * .7);
        background-color: white;
      }
      
    
      .winning-message {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .9);
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 5rem;
        flex-direction: column;
      }
      
      .winning-message button {
        font-size: 3rem;
        background-color: white;
        border: 1px solid black;
        padding: .25em .5em;
        cursor: pointer;
      }
      
      .winning-message button:hover {
        background-color: black;
        color: white;
        border-color: white;
      }
      
      .winning-message.show {
        display: flex;
      }
    `;
    document.head.appendChild(style);
    let board= document.createElement('div');
    board.setAttribute('class', 'board');
    board.setAttribute('id', 'board');
    for(let i=0; i<9;i++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.setAttribute('data-cell','');
        cell.setAttribute('id', `${i}`);
        board.appendChild(cell);
    }
    document.body.appendChild(board);
    let message= document.createElement('div');
    message.setAttribute('class','winning-message');
    message.setAttribute('id','winningMessage');
    let winningText= document.createElement('div');
    winningText.setAttribute('data-winning-message-text', '');
    message.appendChild(winningText)
    let btn= document.createElement('button');
    btn.setAttribute('id', 'restartButton');
    btn.textContent= 'Restart';
    message.appendChild(btn);
    document.body.appendChild(message);
  }

function addJavascript(){
  const X_CLASS = 'x'
  const CIRCLE_CLASS = 'circle'
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const cellElements = document.querySelectorAll('[data-cell]')
  const board = document.getElementById('board')
  const winningMessageElement = document.getElementById('winningMessage')
  const restartButton = document.getElementById('restartButton')
  const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
  let circleTurn
  
  startGame()
  
  restartButton.addEventListener('click', () => window.location.reload())
  
  function startGame() {
    // window.location.reload()
    circleTurn = false
  
    cellElements.forEach(cell => {
      cell.classList.remove(X_CLASS)
      cell.classList.remove(CIRCLE_CLASS)
    })
  
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
  
    recognition.addEventListener('result', (e)=>{
      if(e.results[0].isFinal){
        const text = [...e.results]
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      //  console.log(text)   
       const cell= document.getElementById(`${text}`);
      //  console.log(cell)
       const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
       placeMark(cell, currentClass)
       if (checkWin(currentClass)) {
         endGame(false)
       } else if (isDraw()) {
         endGame(true)
       } else {
         swapTurns()
         setBoardHoverClass()
       }
      }
    });
  
    recognition.addEventListener('end', ()=>{
      recognition.start();
    })
  
    recognition.start();
  
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
  }
  
  
  function endGame(draw) {
    if (draw) {
      winningMessageTextElement.innerText = 'Draw!'
    } else {
      winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
  }
  
  function isDraw() {
    return [...cellElements].every(cell => {
      return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
  }
  
  function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
  }
  
  function swapTurns() {
    circleTurn = !circleTurn
  }
  
  function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
      board.classList.add(CIRCLE_CLASS)
    } else {
      board.classList.add(X_CLASS)
    }
  }
  
  function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        return cellElements[index].classList.contains(currentClass)
      })
    })
  }
  }
  