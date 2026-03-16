const sketchArea = document.getElementById('sketch-area');
const changeSize = document.getElementById('sketch-size');
const clear = document.getElementById('clear');

const canvas = (size) => {

    let area = size ** 2;
    let pixelSize = 500 / size;

    for (let i =0; i < area; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${pixelSize}px`;
    square.style.height = `${pixelSize}px`;

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });

    sketchArea.appendChild(square);
    }
};

canvas(16);

changeSize.addEventListener("click", () => {
    let newSize = prompt("Enter a new Canvas size: ");

    sketchArea.innerHTML = '';

    if (newSize <= 100){
        canvas(newSize);
    } else {
        prompt("too big, please enter any size from 1-100");
    }
});
