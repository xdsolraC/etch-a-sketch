/* GLOBAL VARIABLES */
const h1 = document.querySelector("h1");
const gridSizeElem = document.querySelector(".grid-size");
const sketch = document.querySelector(".sketch");
const buttons = document.querySelectorAll(".button");
const resizeBtn = document.querySelector(".resizeBtn");
const clearBtn = document.querySelector(".clearBtn");
const colorPicker = document.querySelector(".color-picker");
const randomBtn = document.querySelector("#random");
let sketchPx = 400;
let gridSizeValue = parseInt(gridSizeElem.textContent);
let colorValue = colorPicker.value;
let randomBtnValue = randomBtn.checked;

/* FUNCTIONS */
function createGrid(gridSize) {
    // Create squares function based on the gridSize:
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        const squareSize = sketchPx / gridSize;
        square.classList.add("grid-square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Append a draw event listener to each square when created:
        square.addEventListener("mouseover", () => {
            if (randomBtnValue) {
                square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            } else {
                square.style.backgroundColor = colorValue;
            }
        })

        // Append each square to the sketch:
        sketch.appendChild(square);
    }
}

// Function to remove the current grid when a new grid is created
function removeGrid() {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach((square) => {
        square.remove();
    })
}

/* EVENT LISTENERS */

// Immediately create the default grid and assign default colors when the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Create default grid:
    createGrid(gridSizeValue);

    // Assign default color to various elements:
    h1.style.backgroundColor = colorPicker.value;
    randomBtn.style.accentColor = colorPicker.value;
    buttons.forEach((button) => {
        button.style.backgroundColor = colorPicker.value;
    })
})

// Resize click event listener
resizeBtn.addEventListener("click", () => {
    gridSizeValue = parseInt(prompt("Enter new grid size: (e.g. 64 = 64 x 64)"));
    if (gridSizeValue > 0 && gridSizeValue <= 100) {
        gridSizeElem.textContent = gridSizeValue;
        removeGrid();
        createGrid(gridSizeValue);
    } else {
        alert("Please enter a number between 1 and 100");
    }
})

// Clear grid click event listener
clearBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach((square) => {
        square.style.backgroundColor = "transparent";
    })
})