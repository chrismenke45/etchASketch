function randomColorNumber() { //this fucntion gets a random number <255 and >0, this gives us random colors
    let randomNumber = Math.floor(Math.random() * 255); //get random number between 0 and 1, multiply by 255 and round to nearest integer
    return randomNumber;
}

function createGrid() { //this will create sketchable area in drawning area
    let rowNum;
    let columnNum;
    for (i = 1; i <= gridSize; i++) { // go thru each row
        for (j = 1; j <= gridSize; j++) { // go thru each column
            rowNum = i;
            columnNum = j;
            let div = document.createElement('div'); // add div
            div.style.cssText = `grid-area: ${rowNum} / ${columnNum} / ${rowNum}+1 / ${columnNum}+1;` // place divs
            div.classList.add('cell') // give divs inside etch a sketch a class so they can be called on
            container.appendChild(div);
        }
    }
}

const gridSizeSelector = document.querySelector('.gridSizeSelector'); // select range bar for grid resolution
let gridSize = gridSizeSelector.value; // get grid size number from rangebar

const container = document.querySelector('div[id="container"') // select sketch area 
container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);` // create grid in container
createGrid(); // fill grid in container



const sketchable = document.querySelectorAll('div[class="cell"]'); //define sketchable area in etch a sketch (divs in #container)

const blackBtn = document.querySelector(".blackBtn"); //call button to turn color black
const greyBtn = document.querySelector(".greyBtn"); //call button to turn color grey
const rainbowBtn = document.querySelector(".rainbowBtn"); //call button to turn color rainbow
const clearBtn = document.querySelector(".clearBtn"); //call button to clear

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
clearBtn.addEventListener('click', () => { // this button clears etch a sketch by removing classes and background color attribute
    sketchable.forEach(div => div.style.removeProperty('background-color'))
    sketchable.forEach(div => div.classList.remove('sketchBlack'))
    sketchable.forEach(div => div.classList.remove('sketchGrey'))
});

sketchable.forEach(div => div.addEventListener('mouseover', () => { //this causes sketching to occur
    if (sketchColor === 'sketchBlack' || sketchColor === 'sketchGrey') { //this section works by changing class to change color
        div.classList.remove('sketchBlack'); //removing them allows the new color to be seen
        div.classList.remove('sketchGrey')
        div.classList.add(sketchColor); //adds new color
        div.style.removeProperty('background-color'); //removes rainbow if its there
    } else if (sketchColor === 'sketchRainbow') { //this adds style attribute to be rainbow instead of a class like grey and black
        div.style.cssText = `background-color: rgb(${randomColorNumber()}, ${randomColorNumber()}, ${randomColorNumber()})`; //sets a random color
    }
}));

gridSizeSelector.addEventListener('mouseup', () => { // this makes the grid resolution scroller work
    sketchable.forEach(div => div.style.removeProperty('background-color')) // remove old colors so grid is new
    sketchable.forEach(div => div.classList.remove('sketchBlack'))
    sketchable.forEach(div => div.classList.remove('sketchGrey'))
    gridSize = gridSizeSelector.value; // get new grid value
    container.style.removeProperty('grid-template-colums'); //remove old grid sizes
    container.style.removeProperty('grid-template-rows');
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);` //create new grid in container
    createGrid(); // fill grid in container
});



