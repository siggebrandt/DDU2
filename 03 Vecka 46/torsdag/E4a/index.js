// Skriv ett program som frågar efter en siffra (prompt)
// Om siffran är delbar med 2 så ska det skrivas i <main>:
//    "siffran X är delbar med 2" (där X är siffran som användaren angav)
// Om siffran är delbar med 3 så ska det skrivas i <main>:
//    "siffran X är delbar med 3" (där X är siffran som användaren angav)
// Om siffran är delbar med 4 så ska det skrivas i <main>:
//    "siffran X är delbar med 4" (där X är siffran som användaren angav)

// Notera att det finns en del siffror som är delbara med 2, 3 och 4, och då
// måste alla texter komma på webbsidan.
// Se videon.

let number = prompt("En siffra");

if (number % 2 == 0) {
  document.body.innerHTML += `siffran ${number} är delbar med 2`;
}
if (number % 3 == 0) {
  document.body.innerHTML += `<br>siffran ${number} är delbar med 3`;
}
if (number % 4 == 0) {
  document.body.innerHTML += `<br>siffran ${number} är delbar med 4`;
}
