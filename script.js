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