function createPad(sizeX) {
    let clearAllCells = document.querySelectorAll('.cell');
    clearAllCells.forEach(cell => cell.remove());
    var container = document.getElementById('pad-container');
    container.setAttribute('style', `grid-template-columns: repeat(${sizeX}, 1fr)`);
    let padSize = sizeX * sizeX;
    for (var i = 0; i < padSize; i++) {
        var padCell = document.createElement('div');
        padCell.classList.add("cell");
        container.appendChild(padCell);
    }
    let allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => cell.addEventListener("mouseover", function() {
        event.target.style.backgroundColor = "orange";
    }));
}