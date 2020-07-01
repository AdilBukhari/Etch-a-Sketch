function makeGrid(sideLength) {
    removeGrid();

    const sketchPad = document.getElementById('sketch-pad');
    const boxDimension = (600 - (sideLength + 1)) / sideLength;

    for (let h = 0; h < sideLength; h++) {
        const row = document.createElement("div");
        row.setAttribute('style', 'display: flex; flex-direction: row; margin: auto; margin-top: 1px');

        for (let w = 0; w < sideLength; w++) {
            const box = document.createElement("div");
            box.setAttribute('style', `background-color: #ffffff; margin-right: 1px; width: ${boxDimension}px; height: ${boxDimension}px;`);
            //box.setAttribute('style', `width: ${boxDimension}; height: ${boxDimension};`);

            if (w === 0) {
                box.style.marginLeft = '1px';
            }
            
            box.classList.add('box'); 
            row.appendChild(box);
        }

        row.classList.add('row');
        sketchPad.appendChild(row);
    }

    const boxes = document.getElementsByClassName('box');
    [...boxes].forEach((box) => {
    box.addEventListener('mouseenter', function() {
        this.style.visibility = 'hidden';
    });
});
    
}

function removeGrid() {
    const boxes = document.getElementsByClassName('box');
    [...boxes].forEach((box) => {
        box.remove();
    });

    const rows = document.getElementsByClassName('row');
    [...rows].forEach((row) => {
        row.remove();
    });

}

document.addEventListener("DOMContentLoaded", makeGrid(16));

clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
    let numSquares = parseInt(prompt("How many boxes per side? "));
    if(numSquares !== null && numSquares > 0) {
        makeGrid(numSquares);
    }
});