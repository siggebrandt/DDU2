// Gör samma sak som i E4a men denna gång ska programmet
// kontrollera om siffran är delbar med alla siffror mellan 2 och 99

// Du måste använda en for-loop, du kan inte skriva en
// if-sats för varje siffra.

// Se videon.

let number = prompt("en siffra, tack");

for (i = 2; i <= 99; i++) {
  if (number % i == 0) {
    txtLine = document.createElement("p");
    document.body.appendChild(txtLine);
    txtLine.textContent = "Siffran " + number + " är delbar med " + i;
  }
}
