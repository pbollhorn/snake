import * as controller from "./controller.js";
import { CellValue, Direction } from "./enums.js";

const board = document.getElementById("board");

export function registerEventHandlers() {
  document.addEventListener("keyup", (event) => {
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault(); // stop page scrolling
        controller.turnSnake(Direction.UP);
        break;
      case "ArrowDown":
        event.preventDefault(); // stop page scrolling
        controller.turnSnake(Direction.DOWN);
        break;
      case "ArrowLeft":
        event.preventDefault(); // stop page scrolling
        controller.turnSnake(Direction.LEFT);
        break;
      case "ArrowRight":
        event.preventDefault(); // stop page scrolling
        controller.turnSnake(Direction.RIGHT);
        break;
    }
  });
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

export function displayBoard(grid) {
  // Loop over all children of the board (which are the cells)
  for (const cell of board.children) {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    // Set CSS classes for cell depending on true/false value in grid
    switch (grid.get({ row, col })) {
      case CellValue.EMPTY:
        cell.innerText = "";
        break;
      case CellValue.SNAKE:
        cell.innerText = "🟢";
        break;
      case CellValue.APPLE:
        cell.innerText = "🍎";
        break;
    }
  }
}
