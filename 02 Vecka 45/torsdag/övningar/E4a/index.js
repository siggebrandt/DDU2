// Med hjälp av prompt ska du be besökaren om en text.
// Den ska sedan visas mitt på skärmen, centrerad både horisontellt och vertikalt,
// som det visas på bilden (image).
// Typsnittet ska vara Georgia med storlek 50px.
// Du får inte formatera elementen annat än via JS

// Lös det utan att använda innerHTML

const message = prompt("Hit me!");
const textElement = document.createElement("p");
textElement.textContent = message;

document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

textElement.style.fontFamily = "Georgia";
textElement.style.fontSize = "50px";

document.body.append(textElement);
