// Med hjälp av tre olika prompts ska du be besökaren om tre texter.
// När användaren har skrivit in den sista texten, så ska alla tre texter visas
// mitt på skärmen, centrerade både horisontellt och vertikalt.

// Notera att programmet lägger till bindesträck före och efter texten
// och info inom parentes om vilken text det handlar om. Se video.

// Typsnittet ska vara Georgia med storlek 25px.
// Du måste använda konstanten font för att formatera typsnittet.
// Du får inte formatera elementen annat än via JS

// Du måste lösa det på två sätt:
// 1) genom att använda template literals
// 2) genom att använda konkatenering av strängar

const font = "25px Georgia";
let prompt1 = prompt("Skriv någonting");
let prompt2 = prompt("Skriv någonting");
let prompt3 = prompt("Skriv någonting");

document.body.innerHTML += `
<p class='prompt'>- ${prompt1} - (text#1)</p>
<p class='prompt'>- ${prompt2} - (text#2)</p>
<p class='prompt'>- ${prompt3} - (text#3)</p>
`;

document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";
document.body.style.gap = "20px";
let promptText = document.querySelectorAll(".prompt");
promptText[0].style.font = font;
promptText[0].style.margin = 0;
promptText[1].style.font = font;
promptText[1].style.margin = 0;
promptText[2].style.font = font;
promptText[2].style.margin = 0;
