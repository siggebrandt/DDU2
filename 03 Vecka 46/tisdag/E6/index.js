// Koda ett program som skapar en sida som den som visas på video.
// - Den frågar efter en siffra
// - Den skriver ut alla siffror i ordningen inne i <main> med en <br>-tagg
//   mellan varje siffra

// Notera att det finns en index.css men den är inte länkad från
// index.html. Du måste skapa link-elementet från JS.
// Kom ihåg att link-element ingår i head-elementet.

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "index.css";
document.head.appendChild(link);

let quest = prompt("skriv en siffra");

let main = document.querySelector("main");
for (let i = 0; i < quest; i++) {
  main.innerHTML += `${i}<br>`;
}
