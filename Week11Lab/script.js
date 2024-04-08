const container = document.getElementById('container');
let gridSize = 16;

function createGrid() {
    gridSize = prompt("Enter number of squares per side (max 100):");
    if (gridSize === null || gridSize === "" || isNaN(gridSize)) return;
    gridSize = Math.min(Math.max(parseInt(gridSize), 1), 100);
    clearGrid();

    // Calculate the size of each square based on the container's width and the number of squares per side
    const squareSize = container.offsetWidth / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
    container.style.setProperty('--grid-size', gridSize);
}

function clearGrid() {
    container.innerHTML = '';
}

function changeColor(e) {
    const square = e.target;
    const currentColor = window.getComputedStyle(square).getPropertyValue('background-color');
    const rgb = currentColor.match(/\d+/g);
    const interactionCount = {};

    if (rgb) {
        let r = parseInt(rgb[0]);
        let g = parseInt(rgb[1]);
        let b = parseInt(rgb[2]);

        // Increment interaction count for the square
        interactionCount[square.id] = (interactionCount[square.id] || 0) + 1;

        // If square has undergone 10 interactions, turn it completely black and return
        if (interactionCount[square.id] === 10) {
            square.style.backgroundColor = 'black';
            return;
        }

        // Randomize RGB values
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);

        // Progressive darkening effect
        const darknessFactor = 0.1 * interactionCount[square.id]; // 10% darker for each interaction
        r *= (1 - darknessFactor);
        g *= (1 - darknessFactor);
        b *= (1 - darknessFactor);

        const newColor = `rgb(${r}, ${g}, ${b})`;
        square.style.backgroundColor = newColor;
    }
}

createGrid();

