const container = document.querySelector('.container');

const makeGrid = (gridSize) => {
    // Create a for loop for the creation of the rows
    //      - Create row element, and append this element to the container 
    // Create a for loop for the creation of columns inside the rows columns
    //      - Create column element, and append this element to the rows 

    // First for loops creates the rows by created a new element, and appending that element to the container
    for (let i = 0; i < gridSize; i++) {
        let rows = document.createElement('div');
        container.appendChild(rows).className = 'rows';
        console.log(i);

        /* Second for loop, is nested, so for each row, 16 cells will be created. In css we used "display: inline-block", so the cells are generated beside
        the row */
        for (let k = 0; k < gridSize; k++) {
            let cell = document.createElement('div');
            rows.appendChild(cell).className = 'cells';
        }
    }
};

makeGrid(16);