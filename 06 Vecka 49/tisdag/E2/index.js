// Samma som i E1:
// Se till att funktionen F1 anropas när användaren klickar på knappen A
// Se till att funktionen F2 anropas när användaren klickar på knappen B

// Notera dock att knapparna inte finns kodade i HTML-filen och måste 
// skapas här i JS-filen.

function F1() {
  console.log("Detta är F1");
}

function F2() {
  console.log("Detta är F2");
}

const button = document.createElement("buttonA");
buttonA.textContent = "A";
document.body.appendChild(buttonA); 