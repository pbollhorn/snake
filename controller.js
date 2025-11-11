import * as view from "./view.js";
import * as model from "./model.js";

export function resetBoard(rows, cols) {
  model.resetBoard(rows, cols);
}

export function setCell(row, col) {
  model.setCell(row, col);
  const grid = model.getBoard();
  view.displayBoard(grid);
}

export function addRandomCells() {
  model.addRandomCells();
  view.displayBoard(model.getBoard());
}

export async function runGame() {
  while (true) {
    model.nextGeneration();
    view.displayBoard(model.getBoard());
    view.displayGenerationNumber(model.getGenerationNumber());
    await sleep(500);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Startup code which is only run once - on page load
view.registerEventHandlers();
// view.clickedResetBoardButton();
console.log(model.getBoard());
view.buildBoard(model.getBoard());
