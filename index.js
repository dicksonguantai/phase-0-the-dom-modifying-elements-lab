// Write your code here!
//Creates avariable pointing to element main with id #main
const main = document.getElementById("main");

main.remove();// deletes variable main that points to element main

const newHeader = document.createElement('h1');

// Set the id attribute to "victory"
newHeader.setAttribute('id', 'victory');

// Add text to the h1 element
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the h1 element to the body of the DOM
document.body.appendChild(newHeader);