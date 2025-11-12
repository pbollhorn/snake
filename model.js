import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";
import Queue from "https://pbollhorn.github.io/datastruktur-portfolio/queue/queue.js";

const rows = 20;
const cols = 30;

let grid = new Grid(rows, cols, false);
let snakeHead = { row: Math.floor(rows / 2), col: Math.floor(cols / 2) };
let snakeBody = new Queue();
snakeBody.enqueue({ row: snakeHead.row + 1, col: snakeHead.col });
snakeBody.enqueue({ row: snakeHead.row + 2, col: snakeHead.col });


export function nextFrame(snakeDirection) {
  const newGrid = new Grid(rows, cols, false);

  newGrid.set(snakeHead, true);
  for (const cell of snakeBody) {
    newGrid.set(cell, true);
  }

  grid = newGrid;
}

export function getBoard() {
  console.log("hello from model.getBoard()");
  return grid;
}
