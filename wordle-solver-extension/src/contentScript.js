"use strict";

import memorise from "lru-memorise";
import { wait } from "./utils/promise";
import swal from "sweetalert2";
import {
  GAME_STATE,
  setGameCurrentState,
  resultColorValueToNumber,
  TILE_STATE,
  resultColorNumberToValue,
} from "./common";

const pageTitle = document.head.getElementsByTagName("title")[0].innerHTML;

const MAX_WORDS = 6; ///< Max words to win the game
const WORD_LENGTH = 5;
let tempWordlist = null;
let found = false;

async function readWordlist() {
  const wordlistURL = chrome.runtime.getURL("/words.txt");

  const file = await fetch(wordlistURL).catch((err) => {
    console.log("Error reading worldlist: ", err);
  });

  if (file) return (await file.text()).split("\n");
}

async function applyForEveryRowTile(callback) {
  const gameRows = document
    .querySelector("game-app")
    .shadowRoot.querySelector("game-theme-manager")
    .querySelectorAll("game-row");

  for (const row of gameRows) {
    const rowElement = row.shadowRoot.querySelector("div");
    const tiles = rowElement.querySelectorAll("game-tile");

    for (const tile of tiles) {
      const tileElement = tile.shadowRoot.querySelector("div");
      callback(rowElement, tileElement);
    }
  }
}

async function inputWordIntoDom(round, word) {
  const gameRows = document
    .querySelector("game-app")
    .shadowRoot.querySelector("game-theme-manager")
    .querySelectorAll("game-row");

  for (const row of gameRows) {
    const rowElement = row.shadowRoot.querySelector("div");
    const tiles = rowElement.querySelectorAll("game-tile");

    for (const tile of tiles) {
      const tileElement = tile.shadowRoot.querySelector("div");

      tileElement.value = word[0];
    }

    break;
  }
}

async function isGameAlreadyWon() {
  const gameRows = document
    .querySelector("game-app")
    .shadowRoot.querySelector("game-theme-manager")
    .querySelectorAll("game-row");

  let numberTilesFilled = 0;
  let isAllTilesCorrect = false;

  for (const row of gameRows) {
    const rowElement = row.shadowRoot.querySelector("div");
    const tiles = rowElement.querySelectorAll("game-tile");

    if (numberTilesFilled === WORD_LENGTH) {
      isAllTilesCorrect = true;
      break;
    }

    const resultInput = [];
    numberTilesFilled = 0;
    for (const tile of tiles) {
      const tileElement = tile.shadowRoot.querySelector("div");
      const state = tileElement.getAttribute("data-state");

      const resultColor = resultColorValueToNumber(state);
      if (resultColor === TILE_STATE.CORRECT) numberTilesFilled++;
    }
  }

  return isAllTilesCorrect;
}

async function inputWordIntoDomUsingKeyboard(word) {
  // const keyboardElement = document
  //   .querySelector("game-app")
  //   .shadowRoot.querySelector("game-theme-manager")
  //   .shadowRoot.querySelector("game-keyboard")
  //   .shadowRoot.querySelector("div#keyboard");

  const keyboardElement = document
    .querySelector("body > game-app")
    .shadowRoot.querySelector("#game > game-keyboard")
    .shadowRoot.querySelector("#keyboard");

  const enterButton = keyboardElement.querySelector(`button[data-key="↵"]`);

  for (const character of word) {
    const keyElement = keyboardElement.querySelector(
      `button[data-key="${character}"]`
    );

    await wait(500);
    keyElement.click();
  }

  await wait(300);
  enterButton.click();
}

async function readInputResultFromDom(round) {
  const gameRows = document
    .querySelector("game-app")
    .shadowRoot.querySelector("game-theme-manager")
    .querySelectorAll("game-row");

  // for (const row of gameRows) {
  const rowElement = gameRows[round].shadowRoot.querySelector("div");
  const tiles = rowElement.querySelectorAll("game-tile");

  const resultInput = [];

  for (const tile of tiles) {
    const tileElement = tile.shadowRoot.querySelector("div");
    const state = tileElement.getAttribute("data-state");

    resultInput.push(resultColorValueToNumber(state));
  }

  return resultInput;
  // }
}

/**
 * @param {{[]: []}} wordsMatrix
 * @param {[]} resultInput
 */
function checkIfWon(wordsMatrix, resultInput) {
  if (!resultInput || resultInput.length === 0) {
    console.error("No input!");
    return;
  }

  tempWordlist = wordsMatrix[resultInput];

  if (tempWordlist && tempWordlist.length === 1) {
    found = true;
    return true;
  }

  return false;
}

/**
 * Promise wrapper for chrome.tabs.sendMessage
 * @param tabId
 * @param item
 * @returns {Promise<any>}
 */
function sendMessagePromise(type, payload) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      {
        type,
        payload,
      },
      (response) => {
        // console.log(response.message);
        if (response && !response.error) {
          resolve(response);
        } else {
          reject(chrome.runtime.lastError);
        }
      }
    );
  });
}

async function resetGameFromDom() {
  // await applyForEveryRowTile((rowElement, tileElement) => {
  //   tileElement.setAttribute(
  //     "data-state",
  //     resultColorNumberToValue(TILE_STATE.EMPTY)
  //   );
  //   // tileElement.innerText = "";
  // });
}

async function resetGameAndRoload() {
  setGameCurrentState(GAME_STATE.READY);
  location.reload();
}

async function resetGameLocalStorage() {
  localStorage.removeItem("gameState");
}

async function handleGameStart() {
  // localStorage.removeItem("gameState");
  await resetGameLocalStorage();

  const alreadyWonGame = await isGameAlreadyWon();

  if (alreadyWonGame) {
    swal.fire("You already won this Game :D", "", "success");
    return;
  }

  setGameCurrentState(GAME_STATE.PLAYING);

  swal.fire({
    title: "Starting Game...",
    timer: 2000,
    timerProgressBar: true,
    icon: "info",
  });
  console.info("Worlde AI: Game Started");

  const wordlist = await readWordlist();

  await wait(1000);

  tempWordlist = [...wordlist];

  let isAiWonGame = false;

  for (let round = 0; round < MAX_WORDS; round++) {
    const response = await sendMessagePromise("PROPOSE_WORD", {
      message: "Hello, my name is Con. I am from ContentScript.",
      wordlist,
      round,
      tempWordlist,
    });

    if (response) {
      swal.close();

      let { chosenWord, srmat } = response;

      await inputWordIntoDomUsingKeyboard(chosenWord);

      await wait(2000);

      const inputResult = await readInputResultFromDom(round);

      await wait(1000);

      if (checkIfWon(srmat, inputResult)) {
        isAiWonGame = true;
        console.info("Wordle AI: DONE! Final word is ", tempWordlist[0]);
        chosenWord = tempWordlist[0];

        swal.fire({
          title: "Final Word Found!",
          icon: "success",
          timer: 2000,
        });

        await wait(2000);

        await inputWordIntoDomUsingKeyboard(chosenWord);

        await wait(4000);

        const inputResult = await readInputResultFromDom(round + 1);

        await wait(1000);

        setGameCurrentState(GAME_STATE.WON);

        swal.fire("You Won!", "", "success");
        break;
      } else {
        swal.fire({
          title: "Looking for next word...",
          icon: "info",
          showCancelButton: false,
          showConfirmButton: false,
          timerProgressBar: true,
          allowOutsideClick: false,
          didOpen: () => {
            swal.showLoading();
          },
          willClose: () => {
            swal.hideLoading();
          },
        });
        console.info("Wordle AI: Looking for your next word...");
      }
    }
  }

  if (!isAiWonGame) {
    setGameCurrentState(GAME_STATE.LOST);
    swal.fire({
      title: "Game Over! Word not found!",
      icon: "error",
    });
  }
}

async function init() {
  const isGameWon = await isGameAlreadyWon();

  if (isGameWon) {
    setGameCurrentState(GAME_STATE.WON);
  } else {
    setGameCurrentState(GAME_STATE.READY);
  }
}

// Listen for message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "START") {
    handleGameStart();
  }

  if (request.type === "RESET") {
    resetGameAndRoload();
    resetGameLocalStorage();
  }

  // Send an empty response
  // See https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-531531890
  // sendResponse({});
  return true;
});

(function () {
  init();
})();
