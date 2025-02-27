// Skriv ett program som ber om en sträng och
// loggar på konsolen hur många "a"-tecken (gemene)
// som finns i strängen.

//let text = [];
let text = prompt("Skriv en text");
let numberOfA = 0;

for (i = 0; i < text.length; i++) {
  if (text[i] == "a" /* || text[i] == "A"*/) {
    numberOfA++;
  }
}
console.log("Antal A: " + numberOfA);
