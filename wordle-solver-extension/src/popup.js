"use strict";

import "./popup.css";
import { GAME_STATE, setGameCurrentState } from "./common";

const WORDLE_WEBPAGE_URL = "https://www.powerlanguage.co.uk/wordle";
(function () {
  // We will make use of Storage API to get and store `count` value
  // More information on Storage API can we found at
  // https://developer.chrome.com/extensions/storage

  // To get storage access, we have to mention it in `permissions` property of manifest.json file
  // More information on Permissions can we found at
  // https://developer.chrome.com/extensions/declare_permissions
  // const counterStorage = {
  //   get: (cb) => {
  //     chrome.storage.sync.get(["count"], (result) => {
  //       cb(result.count);
  //     });
  //   },
  //   set: (value, cb) => {
  //     chrome.storage.sync.set(
  //       {
  //         count: value,
  //       },
  //       () => {
  //         cb();
  //       }
  //     );
  //   },
  // };

  const gameStateElement = document.getElementById("game-state");
  const wonElement = document.getElementById("won");
  const lostElement = document.getElementById("lost");
  const playButton = document.querySelector("button#play");
  const resetGameButton = document.querySelector("button#reset-game");
  const notWordleWarningElement = document.getElementById("not-wordle-warning");

  function initElements() {}

  async function isOnWordlePage() {
    return new Promise((rs, rj) => {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        let url = tabs[0].url;
        if (url && url.includes(WORDLE_WEBPAGE_URL)) rs(true);
        else rs(false);
      });
    });
  }

  function startPlaying() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        type: "START",
        message: "start",
      });
    });
  }

  function resetGame() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        type: "RESET",
        message: "reset",
      });
    });
  }

  function checkGameState() {
    chrome.storage.local.get(["gameState"], (result) => {
      resetGameButton.disabled = false;
      lostElement.style.display = "none";
      if (result.gameState === GAME_STATE.PLAYING) {
        gameStateElement.innerText = "Game In Progress";
        playButton.disabled = true;
        resetGameButton.disabled = true;
      } else if (result.gameState === GAME_STATE.WON) {
        gameStateElement.innerText = "Won";
        wonElement.style.display = "flex";
        notWordleWarningElement.style.display = "none";
        playButton.disabled = false;
        resetGameButton.disabled = false;
      } else if (result.gameState === GAME_STATE.READY) {
        gameStateElement.innerText = "Ready";
        wonElement.style.display = "none";
        playButton.disabled = false;
      } else if (result.gameState === GAME_STATE.LOST) {
        gameStateElement.innerText = "Lost";
        wonElement.style.display = "none";
        lostElement.style.display = "flex";
        playButton.disabled = true;
        resetGameButton.disabled = false;
      }
    });
  }

  function listenForStorageChanges() {
    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace === "local") {
        checkGameState();
      }
    });
  }

  async function checkIfWordleGameAvailable() {
    const isWordlePage = await isOnWordlePage();
    if (!isWordlePage) {
      playButton.disabled = true;
      resetGameButton.disabled = true;
      gameStateElement.style.display = "none";
      notWordleWarningElement.style.display = "flex";
    }
  }

  async function main() {
    // const isWordleAvailable = await checkIfWordleGameAvailable();

    // if (!isWordleAvailable) return;

    checkGameState();
    listenForStorageChanges();

    // if (!isAlreadyWonGame) {
    //   console.log("NOT WON");
    //   setGameCurrentState(GAME_STATE.READY);
    // }

    checkGameState();

    playButton.addEventListener("click", startPlaying);
    resetGameButton.addEventListener("click", resetGame);

    if (isOnWordlePage()) {
      playButton.disabled = false;
    }
  }

  document.addEventListener("DOMContentLoaded", main);
})();
