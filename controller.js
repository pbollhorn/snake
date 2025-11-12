import * as view from "./view.js";
import * as model from "./model.js";

let snakeDirection = "up";

export function resetBoard(rows, cols) {
  model.resetBoard(rows, cols);
}

export async function runGame() {
  // This is the game loop
  while (true) {
    model.nextFrame(snakeDirection);
    view.displayBoard(model.getBoard());
    await sleep(5000);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function turnSnake(direction) {
  snakeDirection = direction;
  console.log(snakeDirection);
}

// Startup code which is only run once - on page load
view.buildBoard(model.getBoard());
view.registerEventHandlers();
runGame();
