// document.getElementById('displayBtn').addEventListener('click', () => {

//     const totalRows=10
//     const totalColumns=10

//     var inputRow = parseInt(document.getElementById('row').value);
//     var inputCol = parseInt(document.getElementById('column').value);
    
//     const spriteWidth = 75;
//     const spriteHeight = 53;

//     const img = document.getElementById('image');
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');

    
        
//     const x = (inputCol - 1) * frameWidth; // Convert to 0-based index
//     const y = (inputRow - 1) * frameHeight; // Convert to 0-based index
    

//     // Draw the specified frame onto the canvas
//     ctx.drawImage(img, 75, 53, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
    
// });

document.getElementById('displayBtn').addEventListener('click', () => {

    const totalRows = 10;
    const totalColumns = 10;

    var inputRow = parseInt(document.getElementById('row').value);
    var inputCol = parseInt(document.getElementById('column').value);

    const spriteWidth = 75;
    const spriteHeight = 53;

    const img = document.getElementById('image');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous image

    if (!isNaN(inputRow) && inputRow >= 1 && inputRow <= totalRows && isNaN(inputCol)) {
        // Only row is provided: display all images in the row
        for (let col = 1; col <= totalColumns; col++) {
            const x = (col - 1) * spriteWidth;
            const y = (inputRow - 1) * spriteHeight;
            ctx.drawImage(img, x, y, spriteWidth, spriteHeight, (col - 1) * spriteWidth, 0, spriteWidth, spriteHeight);
        }
    } else if (!isNaN(inputCol) && inputCol >= 1 && inputCol <= totalColumns && isNaN(inputRow)) {
        // Only column is provided: display all images in the column
        for (let row = 1; row <= totalRows; row++) {
            const x = (inputCol - 1) * spriteWidth;
            const y = (row - 1) * spriteHeight;
            ctx.drawImage(img, x, y, spriteWidth, spriteHeight, 0, (row - 1) * spriteHeight, spriteWidth, spriteHeight);
        }
    } else if (!isNaN(inputRow) && !isNaN(inputCol) && inputRow >= 1 && inputRow <= totalRows && inputCol >= 1 && inputCol <= totalColumns) {
        // Both row and column are provided: display the specific image
        const x = (inputCol - 1) * spriteWidth;
        const y = (inputRow - 1) * spriteHeight;
        ctx.drawImage(img, x, y, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    } else {
        alert("Please enter valid row and column values (1-10).");
    }
});

