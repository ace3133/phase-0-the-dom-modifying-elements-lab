// Write your code here!
// index.js

// Assuming there's an existing main element in your HTML
const mainElement = document.getElementById('main');

// Check if the main element exists before trying to remove it
if (mainElement) {
  // Remove the main element
  mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Assign an id of 'victory' to the newHeader
newHeader.id = 'victory';

// Set the text content with your name
newHeader.textContent = 'Hass Mroueh is the champion';

// Append the newHeader to the main element
mainElement.appendChild(newHeader);
