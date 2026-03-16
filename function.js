const sketchArea = document.getElementById('sketch-area');

for (let i =0; i < 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    sketchArea.appendChild(square);
}