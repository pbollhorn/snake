import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";
import Queue from "https://pbollhorn.github.io/datastruktur-portfolio/queue/queue.js";
import { CellValue, Direction } from "./enums.js";

const rows = 20;
const cols = 30;

let grid = new Grid(rows, cols, CellValue.EMPTY);

let snakeHead = { row: Math.floor(rows / 2), col: Math.floor(cols / 2) };
let snakeBody = new Queue();
snakeBody.enqueue({ row: snakeHead.row + 1, col: snakeHead.col });
snakeBody.enqueue({ row: snakeHead.row + 2, col: snakeHead.col });

export function nextFrame(snakeDirection) {
  const newGrid = new Grid(rows, cols, CellValue.EMPTY);

  snakeBody.enqueue({ row: snakeHead.row, col: snakeHead.col });
  snakeBody.dequeue();
  if (snakeDirection === Direction.UP) {
    snakeHead.row--;
  }
  if (snakeDirection === Direction.DOWN) {
    snakeHead.row++;
  }
  if (snakeDirection === Direction.LEFT) {
    snakeHead.col--;
  }
  if (snakeDirection === Direction.RIGHT) {
    snakeHead.col++;
  }

  newGrid.set(snakeHead, CellValue.SNAKE_HEAD);
  for (const element of snakeBody) {
    newGrid.set(element, CellValue.SNAKE_BODY);
  }

  // Show an apple
  newGrid.set({ row: 2, col: 2 }, CellValue.APPLE);

  grid = newGrid;
}

export function getBoard() {
  console.log("hello from model.getBoard()");
  return grid;
}
