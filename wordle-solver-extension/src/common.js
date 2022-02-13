export const GAME_STATE = {
  READY: "READY",
  PLAYING: "PLAYING",
  WON: "WON",
  LOST: "LOST",
};

export function setGameCurrentState(gameState) {
  chrome.storage.local.set({ gameState: gameState });
}

export const TILE_STATE = {
  ABSENT: 0,
  PRESENT: 1,
  CORRECT: 2,
  EMPTY: 3,
};

export function resultColorValueToNumber(value) {
  switch (value) {
    case "absent":
      return TILE_STATE.ABSENT;
    case "present":
      return TILE_STATE.PRESENT;
    case "correct":
      return TILE_STATE.CORRECT;
    case "empty":
      return TILE_STATE.EMPTY;
    default:
      return TILE_STATE.ABSENT;
  }
}

export function resultColorNumberToValue(number) {
  switch (number) {
    case TILE_STATE.ABSENT:
      return "absent";
    case TILE_STATE.PRESENT:
      return "present";
    case TILE_STATE.CORRECT:
      return "correct";
    case TILE_STATE.EMPTY:
      return "empty";
    default:
      return "absent";
  }
}
