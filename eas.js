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
container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`
let rowNum;
let columnNum;
for (i=1; i <= gridSize; i++) {
    for (j=1; j <= gridSize; j++) {
        rowNum = i;
        columnNum = j;
        let div = document.createElement('div');
        div.style.cssText = `grid-area: ${rowNum} / ${columnNum} / ${rowNum}+1 / ${columnNum}+1;`
        div.classList.add('cell')
        container.appendChild(div);
    }
} 
const sketchable = document.querySelectorAll('div[class="cell"]')

console.log(sketchable)
sketchable.forEach(div => div.addEventListener('mouseover', () => {
    div.classList.add('sketched');
}))
const black = document.querySelector(".black")
black.addEventListener('click', () => {
    sketchable.style.cssText = 'background-color: black';
});
const grey = document.querySelector(".grey")
grey.addEventListener('click', () => {
    sketchable.style.cssText = 'background-color: red';
});