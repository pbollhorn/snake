import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";
import Queue from "https://pbollhorn.github.io/datastruktur-portfolio/queue/queue.js";
import { CellValue, Direction } from "./enums.js";

const rows = 20;
const cols = 30;

let grid = new Grid(rows, cols, CellValue.EMPTY);

let snake;
initSnake();

function initSnake() {
  const snakeHead = { row: Math.floor(rows / 2), col: Math.floor(cols / 2) };

  snake = new Queue();
  snake.enqueue({ row: snakeHead.row + 2, col: snakeHead.col });
  snake.enqueue({ row: snakeHead.row + 1, col: snakeHead.col });
  snake.enqueue({ row: snakeHead.row, col: snakeHead.col });
}

export function nextFrame(snakeDirection) {
  
  // Create empty newGrid
  const newGrid = new Grid(rows, cols, CellValue.EMPTY);

  // Move snake
  const snakeHead = structuredClone(snake.peekTail()); // head of snake is tail of queue
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
  snake.enqueue(snakeHead);
  snake.dequeue();

  // Place snake on newGrid
  for (const element of snake) {
    newGrid.set(element, CellValue.SNAKE_BODY);
  }

  // Show an apple
  newGrid.set({ row: 2, col: 2 }, CellValue.APPLE);

  // Replace grid with newGrid
  grid = newGrid;
}

export function getBoard() {
  return grid;
}
