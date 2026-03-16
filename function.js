const sketchArea = document.getElementById('sketch-area');
const changeSize = document.getElementById('sketch-size');
const clear = document.getElementById('clear');
const colorBtn = document.getElementById('color');

let newSize = 16;
let newColor = "black";

const canvas = (size, color) => {

    let area = size ** 2;
    let pixelSize = 500 / size;

    for (let i =0; i < area; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${pixelSize}px`;
    square.style.height = `${pixelSize}px`;

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = `${color}`;
    });

    sketchArea.appendChild(square);
    }
};

canvas(newSize, newColor);

changeSize.addEventListener("click", () => {
    newSize = prompt("Enter a new Canvas size: ");

    sketchArea.innerHTML = '';

    if (newSize <= 100){
        canvas(newSize, newColor);
    } else {
        alert("too big, please enter any size from 1-100");
        canvas(16, newColor);
    }
});

clear.addEventListener("click", () => {
    sketchArea.innerHTML = '';
    canvas(newSize, newColor);
});

colorBtn.addEventListener("click", () => {
    newColor = prompt("Enter a new color: ");
    sketchArea.innerHTML = '';
    canvas(newSize, newColor);
});




