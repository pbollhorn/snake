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
}

initializeSnake();

export function nextFrame(snakeDirection) {
  const newGrid = new Grid(rows, cols, false);

  snake.printQueue();

  for (const cell of snake) {
    grid.set(cell, true);
  }

  grid = newGrid;
}

// let generationNumber;

// export function resetBoard(rows, cols) {
//   grid = new Grid(rows, cols, false);
//   generationNumber = 0;
// }

// export function setCell(row, col) {
//   const value = grid.get({ row, col });
//   grid.set({ row, col }, !value);
// }

// export function addRandomCells() {
//   for (let row = 0; row < grid.rows(); row++) {
//     for (let col = 0; col < grid.cols(); col++) {
//       const currentlyAlive = grid.get({ row, col });
//       const createNewAlive = Math.random() < 0.1; // 10% chance of being true, 90% chance of being false
//       const alive = currentlyAlive || createNewAlive;
//       grid.set({ row, col }, alive);
//     }
//   }
// }

export function getBoard() {
  return grid;
}

// export function getGenerationNumber() {
//   return generationNumber;
// }

// function countLiveNeighbours(row, col) {
//   const neighbourValues = grid.neighbourValues({ row, col });
//   const liveNeighbourCount = neighbourValues.filter(
//     (value) => value === true
//   ).length;
//   return liveNeighbourCount;
// }

// export function doesCellLive(row, col) {
//   const liveNeighbourCount = countLiveNeighbours(row, col);
//   if (liveNeighbourCount < 2) return false;
//   if (liveNeighbourCount == 2) return grid.get({ row, col });
//   if (liveNeighbourCount == 3) return true;
//   if (liveNeighbourCount > 3) return false;
// }

// // Progress model to next generation
// export function nextGeneration() {
//   const newGrid = new Grid(grid.rows(), grid.cols(), false);

//   for (let row = 0; row < grid.rows(); row++) {
//     for (let col = 0; col < grid.cols(); col++) {
//       const alive = this.doesCellLive(row, col); // true or false
//       newGrid.set({ row, col }, alive);
//     }
//   }

//   grid = newGrid;
//   generationNumber++;
// }
