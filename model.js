import Grid from "https://pbollhorn.github.io/datastruktur-portfolio/grid/grid.js";
import Queue from "https://pbollhorn.github.io/datastruktur-portfolio/queue/queue.js";

const rows = 20;
const cols = 30;

let grid = new Grid(rows, cols, false);
let snake;

function initializeSnake() {
  snake = new Queue();

  const head = { row: Math.floor(rows / 2), col: Math.floor(cols / 2) };
  snake.enqueue(head);
  snake.enqueue({ row: head.row + 1, col: head.col });
  snake.enqueue({ row: head.row + 2, col: head.col });
}

initializeSnake();

export function nextFrame(snakeDirection) {
  const newGrid = new Grid(rows, cols, false);

  snake.printQueue();

  for (const cell of snake) {
    newGrid.set(cell, true);
  }

  grid = newGrid;
}

export function getBoard() {
  console.log("hello from model.getBoard()");
  return grid;
}
