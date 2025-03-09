const printButton = document.getElementById('printButton');
const drawingBoard = document.getElementById('drawing-board');

// Setup drawing board functionality (simple drawing with mouse)
let isDrawing = false;
drawingBoard.addEventListener('mousedown', () => {
    isDrawing = true;
});
drawingBoard.addEventListener('mouseup', () => {
    isDrawing = false;
});
drawingBoard.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        const x = e.offsetX;
        const y = e.offsetY;
        const dot = document.createElement('div');
        dot.style.width = '5px';
        dot.style.height = '5px';
        dot.style.position = 'absolute';
        dot.style.left = `${x - 2}px`;
        dot.style.top = `${y - 2}px`;
        dot.style.backgroundColor = 'black'; // Change color if needed
        drawingBoard.appendChild(dot);
    }
});

// Handle print button
printButton.addEventListener('click', () => {
    alert("Design sent to printer!");
    // Send the design data to the printer here
});
