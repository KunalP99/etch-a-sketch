const gridContainer = document.querySelector('.grid-container');
const changeSize = document.getElementById('change-size');

const makeGrid = (col, rows) => {
    for (let i = 0; i < (col * rows); i++) {
        const grid = document.createElement('div');
        grid.style.border = '1px solid black';

        // Creates the columns using repeat property to create x amount of columns (same as rows)
        gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        // Creates the rows using repeat property creating x amount of rows (same as columns)
        gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        // Adds the grid to the container as a child
        gridContainer.appendChild(grid).classList.add('cells');
    }
};

const changeColour = () => {
    // Gets the HTML collection of elements with the class 'cells'
    let cells = document.getElementsByClassName('cells');

    // Iterates through the HTML collection, with each individual element being assigned to cell, and then running the addEventListener to execute the code inside
    for (const cell of cells) {
        cell.addEventListener("mouseover", () => {
            // Adds class 'change-colour' when hoevered over
            cell.classList.add('change-colour');
        })
    }
};

// Selecting all elements with a class of 'cells' and removing them from 'gridContainer'
const reset = () => {
    const cells = gridContainer.querySelectorAll('.cells');
    cells.forEach(cell => cell.remove());
};

changeSize.addEventListener('click', () => {
    reset();
    let input = prompt("Enter a value: ");
//     console.log(typeof input)
     makeGrid(input, input);
     changeColour();
 });

 makeGrid(16, 16);
 changeColour();


