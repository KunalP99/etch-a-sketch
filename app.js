const container = document.querySelector('.container');

const makeGrid = (gridSize) => {
    // First for loop creates the rows by creating a new element, and appending that element to the container
    for (let i = 0; i < gridSize; i++) {
        let rows = document.createElement('div');
        container.appendChild(rows).className = 'rows';

        /* Second for loop, is nested, so for each row, 16 cells will be created (makeGrid(16)). In css we used "display: inline-block", so the cells 
        are generated beside the row */
        for (let k = 0; k < gridSize; k++) {
            let cell = document.createElement('div');
            rows.appendChild(cell).className = 'cells';
        }
    }
};

const changeColour = () => {
    let cells = document.getElementsByClassName('cells');

    for (const cell of cells) {
        cell.addEventListener("mouseover", () => {
            cell.classList.add("changeColour");
        })
    }
};

makeGrid(20);
changeColour();