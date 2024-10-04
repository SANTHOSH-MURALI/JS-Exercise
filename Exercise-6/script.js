const movingImage = document.getElementById('moving-image');
const movingArea = document.getElementById('moving-area');
let positionX = 0; // Start position in the middle horizontally
let positionY = 175 // Start position in the middle vertically
let directionX = 0; 
let directionY = 1; 
let state = 0; // 0 for vertical, 1 for horizontal
let intervalId = null;

const moveImage = () => {
    const areaWidth = movingArea.clientWidth;
    const areaHeight = movingArea.clientHeight;
    const imageWidth = movingImage.clientWidth;
    const imageHeight = movingImage.clientHeight;

    switch (state) {
        case 0: //vertical
            if (positionX + imageHeight < areaHeight) {
                positionX += 5; // Move down
            } 
            if(positionX + imageHeight >= areaHeight){
                positionY = 0
                positionX = 175
                state = 1;
            }
            break;
        case 1: //Horizontal
            if (positionY + imageWidth < areaWidth ) {
                    positionY += 5; // Move right
            } 
            if(positionY + imageWidth >= areaWidth){
                positionY = 175
                positionX=0
                state=0
            }
            break;
    }
    movingImage.style.top = `${positionX}px`;
    movingImage.style.left = `${positionY}px`;  
    // console.log(intervalId);
};

document.getElementById('move-btn').addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(moveImage, 90); 
    }
});

document.getElementById('pause-btn').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

document.getElementById('reset-btn').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    positionX = 175; // Reset to middle horizontally
    positionY = 175; // Reset to middle vertically
    directionX = 0; // Reset direction
    state = 0; // Reset to start state
    movingImage.style.left = '175px'; // Reset position to middle
    movingImage.style.top = '175px'; // Reset position to middle
});