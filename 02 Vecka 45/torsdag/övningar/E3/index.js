// Med hjälp endast av JS skapa en sida som den i bilden (image)
// Notera att HTML-elementen har redan skapats i HTML-filen
// Du behöver fixa färgerna och lite annat formatering (med JS).
// Du behöver också se till att <img> pekar på bildfilen i mappen media (också det med JS).

const main = document.querySelector("main");
const firstLine = document.querySelector("#firstLine");
const secondLine = document.querySelector("#secondLine");
const ul = document.querySelector("ul");
const firstLi = document.querySelectorAll("li.first");
const lastLi = document.querySelectorAll("li.last");
const img = document.querySelector("img");

main.style.textAlign = "center";

firstLine.style.color = "red";

ul.style.listStyle = "none";
firstLi[0].style.color = "green";
firstLi[1].style.color = "green";
lastLi[0].style.color = "blue";
lastLi[1].style.color = "blue";

img.src = "media/heart.png";
img.style.width = "50vw";
