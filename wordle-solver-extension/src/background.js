"use strict";

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

import memorise from "lru-memorise";

const MAX_WORDS = 6; ///< Max words to win the game
const WORD_LENGTH = 5;
// let tempWordlist = null;
let found = false;

function calculateResponseVector(word1, word2) {
  let tempWord2 = `${word2}`;
  let msum = Array(WORD_LENGTH).fill(0);
  let foundCharacterIndex = 0;

  for (let idx = 0; idx < WORD_LENGTH; idx++) {
    if (word1[idx] === tempWord2[idx]) {
      msum[idx] = 2;
      tempWord2 =
        tempWord2.substring(0, idx) + "*" + tempWord2.substring(idx + 1);
    }
  }

  for (let idx = 0; idx < WORD_LENGTH; idx++) {
    if (tempWord2.includes(word1[idx]) && msum[idx] === 0) {
      msum[idx] = 1;
      foundCharacterIndex = tempWord2.indexOf(word1[idx]);
      tempWord2 =
        tempWord2.substring(0, foundCharacterIndex) +
        "*" +
        tempWord2.substring(foundCharacterIndex + 1);
    }
  }

  return msum;
}

const memorisedCalculateResponseVector = memorise(calculateResponseVector, {
  lruOptions: { max: 10000000000 },
});

async function proposeNextWord(wordlist, round, tempWordlist) {
  let MIN_LENGTH = 100000;
  let chosenWord = "";
  let srmat = {};
  let allWords = [];

  if (round !== 0) allWords = wordlist;
  else allWords = ["aesir"];

  for (let word1 of allWords) {
    let mat = {};
    let rmat = {};
    let msum = Array(WORD_LENGTH).fill(0);
    word1 = word1.trim();
    if (!tempWordlist) return false;

    for (let word2 of tempWordlist) {
      word2 = word2.trim();
      msum = memorisedCalculateResponseVector(word1, word2);

      if (!rmat.hasOwnProperty(msum)) {
        rmat[msum] = [word2];
      } else {
        rmat[msum].push(word2);
      }
      mat[[word1, word2]] = msum;
    }

    const MAX = Math.max(...Object.values(rmat).map((arr) => arr.length));

    if (MAX < MIN_LENGTH) {
      MIN_LENGTH = MAX;
      chosenWord = word1;
      srmat = rmat;
    }
  }

  // console.log("Finished round: ", round);
  // console.log("RMAT is: ", srmat);

  // console.log("Chosen word: ", chosenWord);

  return [chosenWord, srmat];
}

async function handleRuntimeMessage(request, sender) {
  try {
    if (request.type === "PROPOSE_WORD") {
      // Log message coming from the `request` parameter
      const { found, round, wordlist, tempWordlist } = request.payload;
      // for (let round = 0; round < MAX_WORDS; round++) {
      if (found) {
        sendResponse({ message: "Done" });
        return;
      }
      const [chosenWord, srmat] = await proposeNextWord(
        wordlist,
        round,
        tempWordlist
      );

      return {
        message: "Hola",
        chosenWord,
        srmat,
      };
    }
  } catch (err) {
    console.log("Error in background.js", err);
    return null;
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  handleRuntimeMessage(request, sender).then(sendResponse);
  return true;
});
