import * as controller from "./controller.js";

const board = document.getElementById("board");

export function registerEventHandlers() {
  document.addEventListener("keyup", (event) => {
    const directions = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (directions.includes(event.key)) {
      event.preventDefault(); // stop page scrolling
      switch (event.key) {
        case "ArrowUp":
          controller.turnSnake("up");
          break;
        case "ArrowDown":
          controller.turnSnake("down");
          break;
        case "ArrowLeft":
          controller.turnSnake("left");
          break;
        case "ArrowRight":
          controller.turnSnake("right");
          break;
      }
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
      case 0:
        cell.innerText = "";
        break;
      case 1:
        cell.innerText = "1";
        break;
      case 2:
        cell.innerText = "2";
        break;
    }
  }
}
