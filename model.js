import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";
import Queue from "https://pbollhorn.github.io/datastruktur-portfolio/queue/queue.js";

const rows = 20;
const cols = 30;

export const CellValue = Object.freeze({
  EMPTY: 0,
  SNAKE_HEAD: 1,
  SNAKE_BODY: 2,
  FRUIT: 3,
});

let grid = new Grid(rows, cols, CellValue.EMPTY);

let snakeHead = { row: Math.floor(rows / 2), col: Math.floor(cols / 2) };
let snakeBody = new Queue();
snakeBody.enqueue({ row: snakeHead.row + 1, col: snakeHead.col });
snakeBody.enqueue({ row: snakeHead.row + 2, col: snakeHead.col });

export function nextFrame(snakeDirection) {
  const newGrid = new Grid(rows, cols, false);

  newGrid.set(snakeHead, CellValue.SNAKE_HEAD);
  for (const element of snakeBody) {
    newGrid.set(element, CellValue.SNAKE_BODY);
  }

  grid = newGrid;
}

export function getBoard() {
  console.log("hello from model.getBoard()");
  return grid;
}

const Direction = Object.freeze({
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
});

console.log(Direction);
console.log(Direction.UP);
