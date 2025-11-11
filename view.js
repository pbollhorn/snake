import * as controller from "./controller.js";

const board = document.getElementById("board");
const generationCounter = document.getElementById("generationCounter");
const resetBoardButton = document.getElementById("resetBoardButton");
const addRandomCellsButton = document.getElementById("addRandomCellsButton");
const runGameButton = document.getElementById("runGameButton");
const rowsInput = document.getElementById("rowsInput");
const colsInput = document.getElementById("colsInput");

export function registerEventHandlers() {
  resetBoardButton.addEventListener("click", clickedResetBoardButton);
  addRandomCellsButton.addEventListener("click", clickedAddRandomCellsButton);
  runGameButton.addEventListener("click", clickedRunGameButton);
  board.addEventListener("click", clickedBoard);
}

export function clickedResetBoardButton() {
  const rows = rowsInput.value;
  const cols = colsInput.value;

  // This removes all children from the board
  board.innerHTML = "";

  // Sets the CSS property which controls number of columns
  board.style.gridTemplateColumns = `repeat(${cols}, max-content)`;

  // Loop over rows and cols and create child elements for the board (the cells)
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      board.appendChild(createCellElement(row, col));
    }
  }

  controller.resetBoard(rows, cols);
}

export function buildBoard(grid) {
  // Sets the CSS property which controls number of columns
  board.style.gridTemplateColumns = `repeat(${grid.cols()}, max-content)`;

  // Loop over rows and cols and create child elements for the board (the cells)
  for (let row = 0; row < grid.rows(); row++) {
    for (let col = 0; col < grid.cols(); col++) {
      board.appendChild(createCellElement(row, col));
    }
  }
}

function createCellElement(row, col) {
  let cell = document.createElement("div");
  cell.className = "cell empty";
  cell.setAttribute("data-row", row);
  cell.setAttribute("data-col", col);
  return cell;
}

function clickedAddRandomCellsButton() {
  controller.addRandomCells();
}

function clickedRunGameButton() {
  rowsInput.disabled = true;
  colsInput.disabled = true;
  resetBoardButton.disabled = true;
  addRandomCellsButton.disabled = true;
  controller.runGame();
}

function clickedBoard(event) {
  const target = event.target;
  if (target.classList.contains("cell")) {
    const row = parseInt(target.dataset.row);
    const col = parseInt(target.dataset.col);
    controller.setCell(row, col);
  }
}

export function displayBoard(grid) {
  // Loop over all children of the board (which are the cells)
  for (const cell of board.children) {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    // Set CSS classes for cell depending on true/false value in grid
    switch (grid.get({ row, col })) {
      case true:
        cell.className = "cell filled";
        break;
      case false:
        cell.className = "cell empty";
        break;
    }
  }
}

export function displayGenerationNumber(generationNumber) {
  generationCounter.innerText = generationNumber;
}
