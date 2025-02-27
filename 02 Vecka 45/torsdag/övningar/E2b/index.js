// Med hjälp endast av JS skapa en sida som den i bilden
// Använd innerHTML för att skapa de nya elementen

document.body.innerHTML += `<div id="container">
    <div id="A"></div>
    <div id="B"></div>
    <div id="C"></div>
    <div id="D"></div>
  </div>`;

const container = document.querySelector("#container");
container.style.display = "grid";
container.style.gridTemplateColumns = "250px 250px";
container.style.gridTemplateRows = "250px 250px";
container.style.margin = "50px auto";

document.querySelector("#A").style.backgroundColor = "red";
document.querySelector("#B").style.backgroundColor = "blue";
document.querySelector("#C").style.backgroundColor = "green";
document.querySelector("#D").style.backgroundColor = "yellow";

/* -- Förslag på lösning
const divs = document.querySelectorAll("div");
const red = divs[0];
const green = divs[1];
const blue = divs[2];
const yellow = divs[3];
*/
