let leftQueue = document.querySelectorAll('.leftQueue');
let rightQueue = document.querySelectorAll('.rightQueue');
let redRect = document.querySelector('.oscillate');


function moveLeftQueue() {
    let bottomRect = leftQueue[0]; 
    bottomRect.setAttribute('x', '-20%');

    // After 1 second, move the other boxes down
    setTimeout(() => {
      // Shift down each rectangle by adjusting their 'y' position
      for (let i = 1; i<leftQueue.length ; i++ ) {
        let newX = parseFloat(leftQueue[i].getAttribute('y')) + 10;
        leftQueue[i].setAttribute('y', newX + '%');
      }

      // Move the last rectangle to the top position
      bottomRect.setAttribute('x', '10%');
      bottomRect.setAttribute('y', '30%');

      // Re-order the queue (move the last rectangle to the first position)
      leftQueue = [ ...Array.from(leftQueue).slice(1, leftQueue.length),bottomRect];
    }, 1000); // Delay to allow the bottom rectangle to move out
  }

  // Function to handle the queue movement for right queue
function moveRightQueue() {
    let bottomRect = rightQueue[0]; // Get the bottom-most rectangle
    bottomRect.setAttribute('x', '120%');

    // After 1 second, move the other boxes down
    setTimeout(() => {
      // Shift down each rectangle by adjusting their 'y' position
      for (let i = 1; i <rightQueue.length; i++) {
        let newY = parseFloat(rightQueue[i].getAttribute('y')) + 10;
        rightQueue[i].setAttribute('y', newY + '%');
      }

      // Move the last rectangle to the top position
      bottomRect.setAttribute('y', '30%');
      bottomRect.setAttribute('x', '80%');

      // Re-order the queue (move the last rectangle to the first position)
      rightQueue = [ ...Array.from(rightQueue).slice(1, rightQueue.length ),bottomRect];
    }, 1000); // Delay to allow the bottom rectangle to move out
  }

  // Interval to move the queues every 3 seconds
  setInterval(() => {
    moveLeftQueue();
    moveRightQueue();
  }, 2000);

  // Oscillating red rectangle back and forth above the queues
  let oscillateDirection = 1;
  setInterval(() => {
    let redX = parseFloat(redRect.getAttribute('x'));
    if (redX > 52 || redX < 40) {
      oscillateDirection *= -1;  // Change direction
    }
    redRect.setAttribute('x', redX + oscillateDirection + '%');
  }, 100);