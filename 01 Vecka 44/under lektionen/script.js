let a; // Skapar variabeln a
a = prompt("välj bakgrundsfärg, please"); // En fråga som man besvarar, svaret sparas i variabeln a som sedan kan användas.
/* --- Koden fortsätter inte förrän prompten är svarad. --- */
console.log(a); // loggar variabeln a i konsolen
document.querySelector("body").style.backgroundColor = a; // Byter bakgrundsfärg på body, använder variabeln a som värde.

let h1 = prompt("bg h1, please"); // skapar variabeln h1, sparar svaret från prompten i den.
/* --- Koden fortsätter inte förrän prompten är svarad. --- */
console.log("h1: " + h1); // loggar varaibeln h1's värde i konsolen

let h2 = prompt("bg h2, please"); // skapar variabeln h2, sparar svaret från prompten i den.
/* --- Koden fortsätter inte förrän prompten är svarad. --- */
console.log("h2: " + h2); // loggar variabeln h2's värde i konsolen

document.querySelector("h1").style.backgroundColor = h1; // Byter bakgrundsfärg på HTML elementet h1, använder variabeln h1
document.querySelector("h2").style.backgroundColor = h2; // Byter bakgrundsfärg på HTML elementet h2, använder variabeln h2

document.querySelector("h1").textContent = h1; // Ändrar texten vad som står i HTML elementet h1, använder variabeln h1 som värde.
