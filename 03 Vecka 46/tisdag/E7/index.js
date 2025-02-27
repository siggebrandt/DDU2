// Koda ett program som skapar en sida som den som visas på bilden (image.png).

// Notera att det finns en index.css som är redan länkad från index.html
// Studera den för att lista ut vilka element och klasser som behövs.
// Du får inte göra någon ändring i index.css

// Du måste använda konstanerna nedan i din kod

const main = document.querySelector("main");
const n1 = 5;
const n2 = 10;

for (i = 1; i <= n1; i++) {
  let column = document.createElement("div");
  column.className = "column";
  main.appendChild(column);
  for (let j = 1; j <= n2; j++) {
    let box = document.createElement("p");
    box.textContent = i + " x " + j + " = " + i * j;
    column.appendChild(box);
  }
}

/*

for (let column = 1; column <= n1; column++) {
  const div = document.createElement("div");
  div.classList.add("column");
  main.appendChild(div);
  for (let row = 1; row <= n2; row++) {
    const p = document.createElement("p");
    div.appendChild(p);
    p.textContent = `${column} x ${row} = ${column * row}`;
  }
}*/
