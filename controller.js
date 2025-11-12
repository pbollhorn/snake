import * as view from "./view.js";
import * as model from "./model.js";

let snakeDirection = 0;

export async function runGame() {
  // This is the game loop
  while (true) {
    const statusCode = model.nextFrame(snakeDirection);
    view.displayBoard(model.getBoard());
    await sleep(1000);
    if (statusCode === 1) {
      alert("Game over");
      break;
    }
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
