import * as controller from "./controller.js";

const board = document.getElementById("board");

export function registerEventHandlers() {
  document.addEventListener("keyup", (event) => {
    const directions = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (directions.includes(event.key)) {
      event.preventDefault(); // stop page scrolling
    }

    switch (event.key) {
      case "ArrowUp":
        // moveSnake("up");
        console.log("up");
        break;
      case "ArrowDown":
        // moveSnake("down");
        console.log("down");
        break;
      case "ArrowLeft":
        // moveSnake("left");
        console.log("left");
        break;
      case "ArrowRight":
        // moveSnake("right");
        console.log("right");
        break;
    }
  });
}

// export function clickedResetBoardButton() {
//   const rows = rowsInput.value;
//   const cols = colsInput.value;

//   // This removes all children from the board
//   board.innerHTML = "";

//   // Sets the CSS property which controls number of columns
//   board.style.gridTemplateColumns = `repeat(${cols}, max-content)`;

//   // Loop over rows and cols and create child elements for the board (the cells)
//   for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
//       board.appendChild(createCellElement(row, col));
//     }
//   }

//   controller.resetBoard(rows, cols);
// }

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
      case true:
        cell.className = "cell filled";
        break;
      case false:
        cell.className = "cell empty";
        break;
    }
  }
}
