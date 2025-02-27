// Med hjälp endast av JS skapa en sida som den i bilden
// Använd INTE innerHTML

/*
<main>
    <div id="A" class="column"></div>
    <div id="B" class="column"></div>
    <div id="C" class="column"></div>
    <div id="D" class="column"></div>
  </div>
*/
// SKapar elements
const main = document.createElement("main");
const red = document.createElement("div");
const blue = document.createElement("div");
const green = document.createElement("div");
const yellow = document.createElement("div");

// stylar main
main.style.margin = "50px auto";
main.style.display = "grid";
main.style.gridTemplateColumns = "150px 150px";
main.style.gridTemplateRows = "150px 150px";

// Stylar divarna, men det hade det varigt bättre att använda variabler för borders
red.style.backgroundColor = "red";
red.style.border = "1px solid gray";

blue.style.backgroundColor = "blue";
blue.style.border = "1px solid gray";

green.style.backgroundColor = "green";
green.style.border = "1px solid gray";

yellow.style.backgroundColor = "yellow";
yellow.style.border = "1px solid gray";

document.body.appendChild(main);
main.appendChild(red);
main.appendChild(blue);
main.appendChild(green);
main.appendChild(yellow);
//document.body.appendChild(main);

/* -- innan lektion lösning -- 
document.querySelector("*").style.margin = "0";

document.body.style.display = "flex";
// document.body.style.height = "100vw";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

document.querySelector("main").style.display = "grid";
document.querySelector("main").style.gridTemplateColumns = "1fr 1fr";
document.querySelector("main").style.width = "500px";
document.querySelector("main").style.height = "500px";
document.querySelector("main").style.background = "gray";

document.querySelector("#A").style.backgroundColor = "red";
document.querySelector("#B").style.backgroundColor = "blue";
document.querySelector("#C").style.backgroundColor = "green";
document.querySelector("#D").style.backgroundColor = "yellow";
*/
