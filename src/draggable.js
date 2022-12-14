// get the element you want to make draggable
const element = document.getElementById('ball');
const simbling = document.getElementById('container');

// get the current position of the element
let currentX = 0;
let currentY = 0;

// flag to track whether the element is being dragged
let isDragging = false;
let keepDragging = false;

// track the mouse position
let mouseX = 0;
let mouseY = 0;

// add event listeners to the element to handle dragging
element.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);

function onMouseDown(e) {
  // set the isDragging flag to true
  isDragging = true;

  // store the current position of the element
  currentX = e.clientX;
  currentY = e.clientY;
}

function onMouseUp(e) {
  // set the isDragging flag to false
  isDragging = false;
}

function onMouseMove(e) {
  // only move the element if the isDragging flag is set to true
  if (isDragging) {
    // calculate the offset of the element
    const offsetX = e.clientX - currentX;
    const offsetY = e.clientY - currentY;

    // set the element's new position
    element.style.top = `${element.offsetTop + offsetY}px`;
    element.style.left = `${element.offsetLeft + offsetX}px`;

	// set the element's simbling new position
	simbling.style.top = `${simbling.offsetTop + offsetY}px`;
    simbling.style.left = `${simbling.offsetLeft + offsetX}px`;

    // store the current position of the element
    currentX = e.clientX;
    currentY = e.clientY;
  }
}
