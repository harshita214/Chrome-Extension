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
- 
![screenshot](https://user-images.githubusercontent.com/81406458/160060701-a007e076-5e2d-4633-b885-1c34accde08c.png)

![screenshot 2](https://user-images.githubusercontent.com/81406458/160060715-338bc825-84e2-4fac-a630-ec891c1edeb8.png)

https://user-images.githubusercontent.com/81406458/160060726-8532c197-e51c-4cfb-a4a3-3239762fb4ef.mp4

