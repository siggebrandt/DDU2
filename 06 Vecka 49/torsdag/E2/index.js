function randomElement(array) {
  // Returns a random element of the array
  const min = 0;
  const max = array.length - 1;
  const randomIndex = Math.floor((max + 1) * Math.random());
  return array[randomIndex];
}

const nCols = 30;
const nRows = 200;
const backgroundDOM = document.querySelector("#background");
backgroundDOM.style.gridTemplateRows = `repeat(${nRows}, 1fr)`;
backgroundDOM.style.gridTemplateColumns = `repeat(${nCols}, 1fr)`;

const subduedColors = [
  '#B0C4DE', // Light Steel Blue
  '#B0E0E6', // Powder Blue
  '#ADD8E6', // Light Blue
  '#87CEEB', // Sky Blue
  '#87CEFA', // Light Sky Blue
  '#4682B4', // Steel Blue
  '#5F9EA0', // Cadet Blue
  '#6495ED', // Cornflower Blue
  '#7B68EE', // Medium Slate Blue
  '#6A5ACD'  // Slate Blue
];

const nCells = nCols * nRows;
for (let i = 0; i < nCells; i++) {
  const cell = document.createElement("div");
  backgroundDOM.appendChild(cell);
  cell.style.backgroundColor = randomElement(subduedColors);
}