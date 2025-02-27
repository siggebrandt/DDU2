// Skriv ett program som frågar efter en text (prompt)
// Om texten startar med "A" (notera versal) så ska det
// loggas på konsolen "Texten startar med A".
// Annars ska det loggas "Texten startar inte med A".

//let text = []; // detta behövs inte
let text = prompt("skriv en prompt");

if (text[0] == "A") {
  console.log("Texten startar med A");
} else {
  console.log("Texten startar inte med A");
}
