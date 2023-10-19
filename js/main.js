
let draggedCard = null;

function drag(event) {
    draggedCard = event.target;
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event, columnClass) {
    event.preventDefault();
    if (draggedCard) {
    const targetColumn = document.querySelector(`.${columnClass}`);
    targetColumn.appendChild(draggedCard);
    draggedCard = null;
    }
}