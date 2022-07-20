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
            // Adds class 'change-colour' when hovered over
            cell.classList.add('change-colour');
        })
    }
};


const rbgColour = () => {
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    let cells = document.getElementsByClassName('cells');
};

// Selecting all elements with a class of 'cells' and removing them from 'gridContainer'
const reset = () => {
    const cells = gridContainer.querySelectorAll('.cells');
    cells.forEach(cell => cell.remove());
};

// When user clicks button, the grid is reset, and the user is prompted to enter a value which becomes the new grid size
changeSize.addEventListener('click', () => {
    reset();
    let input = prompt("Enter a value (1 - 64):");
    if (input > 64 || input < 1) {
        input = prompt("Please enter a value between 1 - 64:")
    }
     makeGrid(input, input);
     changeColour();
 });

 makeGrid(16, 16);
 changeColour();
 rbgColour();


