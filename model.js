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

  // Calcuate new position of snakeHead
  const snakeHead = structuredClone(snake.peekTail()); // front of snake is tail of queue
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

  // move the front of the snake
  snake.enqueue(snakeHead);

  // Place snake on newGrid
  for (const element of snake) {
    newGrid.set(element, CellValue.SNAKE);
  }

  // Show an apple
  newGrid.set({ row: 2, col: 2 }, CellValue.APPLE);

  // Replace grid with newGrid
  grid = newGrid;

  // Check if snakeHead is out of bounds
  if (
    snakeHead.row < 0 ||
    snakeHead.row >= rows ||
    snakeHead.col < 0 ||
    snakeHead.col >= cols
  ) {
    return 1; // status code 1 - game over
  }

  // Check if snakeHead is eating an apple
  if (snakeHead.row === 2 && snakeHead.col === 2) {
    return 0; // return early
  }

  // move the back of the snake
  snake.dequeue();

  return 0; // status code 0 - continue playing
}

export function getBoard() {
  return grid;
}
