# Snake-Chrome-extension

Very basic chrome extension that let's you play snake with arrow keys (up, down, left, right) in a popup activated by clicking the extension icon.

Highscore gets saved in chrome.storage.sync, which means it's stored in the cloud (maintained between different chrome instances logged into same google account). 

Game is reset by closing and reopening the popup and no pause function is implemented (yet).

Written with Pure JavaScript, CSS and HTML snake
Game loop:
- check for collisions (wall, food, snake itself)
  - if collision with wall - end game
  - if collision with food - add new node, spawn new food
  - if collision with itself - end game
- advance snake (delete last node, add new)
- check if end of game (spawned enough food to end the game)
