// Koda ett program som skapar en sida som den som visas på bilden (image.png).

// Notera att det finns en index.css som är redan länkad från index.html
// Studera den för att lista ut vilka element och klasser som behövs.
// Du får inte göra någon ändring i index.css

// Du måste använda konstanerna nedan i din kod
const main = document.querySelector("main");
const nRows = prompt("Ange antal rader");
const nCols = prompt("Ange antal kolumner");

main.style.gridTemplateColumns = `repeat(${nCols}, 1fr)`;
main.style.gridTemplateRows = `repeat(${nRows}, 1fr)`;

for (i = 1; i <= nRows; i++) {
  for (j = 1; j <= nCols; j++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    main.appendChild(cell);
    cell.textContent = i + ", " + j;
  }
}

/*
main.style.gridTemplateColumns = `repeat(${nCols}, 1fr)`;
main.style.gridTemplateRows = `repeat(${nRows}, 1fr)`;

for (let row = 1; row <= nRows; row++) {
  for (let column = 1; column <= nCols; column++) {
    main.innerHTML += `<div class="cell">${row}, ${column}</div>`;
  }
}
*/
