
const gridSizeSelector = document.querySelector('.gridSizeSelector');
let gridSize = gridSizeSelector.value;
console.log(gridSize);

const container = document.querySelector('div[id="container"')

function createGrid() {
    let rowNum;
    let columnNum;
    for (i = 1; i <= gridSize; i++) {
        for (j = 1; j <= gridSize; j++) {
            rowNum = i;
            columnNum = j;
            let div = document.createElement('div');
            div.style.cssText = `grid-area: ${rowNum} / ${columnNum} / ${rowNum}+1 / ${columnNum}+1;`
            div.classList.add('cell')
            container.appendChild(div);
        }
    }
}

    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`
    createGrid();

gridSizeSelector.addEventListener('mouseup', () => {
    sketchable.forEach(div => div.style.removeProperty('background-color'))
    sketchable.forEach(div => div.classList.remove('sketchBlack'))
    sketchable.forEach(div => div.classList.remove('sketchGrey'))
    gridSize = gridSizeSelector.value;
    container.style.removeProperty('grid-template-colums');
    container.style.removeProperty('grid-template-rows');
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`
    createGrid();
});

const sketchable = document.querySelectorAll('div[class="cell"]');

const blackBtn = document.querySelector(".blackBtn");
const greyBtn = document.querySelector(".greyBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
const clearBtn = document.querySelector(".clearBtn");

let sketchColor = 'sketchBlack'; //assigns default color to black

greyBtn.addEventListener('click', () => { // this button changes sketch color to grey
    sketchColor = 'sketchGrey';
});
blackBtn.addEventListener('click', () => { // this button changes sketch color to black
    sketchColor = 'sketchBlack';
});
rainbowBtn.addEventListener('click', () => { // this button changes sketch color to rainbow
    sketchColor = 'sketchRainbow';
});
clearBtn.addEventListener('click', () => { // this button clears etch a sketch
    sketchable.forEach(div => div.style.removeProperty('background-color'))
    sketchable.forEach(div => div.classList.remove('sketchBlack'))
    sketchable.forEach(div => div.classList.remove('sketchGrey'))
});

sketchable.forEach(div => div.addEventListener('mouseover', () => {
    if (sketchColor === 'sketchBlack' || sketchColor === 'sketchGrey') {
        div.classList.remove('sketchBlack');
        div.classList.remove('sketchGrey')
        div.classList.add(sketchColor);
        div.style.removeProperty('background-color');
    } else if (sketchColor === 'sketchRainbow') {
        div.style.cssText = `background-color: rgb(${randomColorNumber()}, ${randomColorNumber()}, ${randomColorNumber()})`;
    }
}));

function randomColorNumber() {
    let randomNumber = Math.floor(Math.random() * 255);
    return randomNumber;
}



