// Skriv ett program som frågar efter en text (prompt)
// Om texten startar med "A" (notera versal)
// eller med "B" eller med "C" så ska det loggas på
// konsolen "Texten startar med A" (eller B eller C, beroende på)
// Annars ska det loggas "Texten startar inte med A , B eller C".

let text = [];
text = prompt("Skriv en text");

if (text[0] == "A") {
  console.log("Texten startar med A");
} else if (text[0] == "B") {
  console.log("Texten startar med B");
} else if (text[0] == "C") {
  console.log("Texten startar med C");
} else {
  console.log("Texten startar inte med A , B eller C");
}
