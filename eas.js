gridSize = prompt("what grid size?");
let checkGridSize = false;
while (checkGridSize === false) {
    if (gridSize < 100 && gridSize > 4) {
        checkGridSize = true;
        gridSize = Number(gridSize);
    } else {
    alert("Grid must be a number between 4 and 100");
    gridSize = prompt("what grid size?");
    }
}
const container = document.querySelector('div[id="container"')
// container.style.cssText = 'grid-template-columns: repeat(gridSize, 1fr); grid-template-rows: repeat(gridSize, 1fr);'

let rows = document.createElement(".gridRow");
let cells = document.createElement(".cell");

// Creates a default grid sized 16x16
function defaultGrid(gridSize) {
    makeRows(gridSize);
    makeColumns(gridSize);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};
defaultGrid(gridSize);
/*for (i=1; i <= gridSize; i++) {
    for (j=1; j <= gridSize; j++) {
        let div = document.createElement('div' + i + j);
        game.appendChild('div' + i + j)
    }
} */
console.log(game);
