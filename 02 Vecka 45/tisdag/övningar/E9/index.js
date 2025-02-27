/*
Kolla på koden och försök att svara på ALLA frågor. Skriv ner svaren på en bit papper.
Sen kan du köra koden (ladda html-filen på webbservern) och kontrollera om du svarade rätt.
Om du inte svarade rätt, försök att förtå varför svaret blev som det blev.
Fråga gärna assisstenterna eller läraren om något är oklart.
*/

const a1 = [23, 2, 65, 1, 63, 1, 5];
let a2 = [];
let i = 0;

// Vad kommer att loggas på konsolen?
console.log(a1[i++]); // 23 // först loggar, sen inkrementerar vi
console.log(a1[++i]); // 65 // först inkrementerar, sen loggar

// Vad kommer att loggas på konsolen?
console.log(a1[i]); // 65 // i är nu 2

// Vad kommer att loggas på konsolen?
a2.push(a1[++i]); // i = 3, a[0] = 1
console.log(a2[i]); // undefined
console.log(a2[0]); // 1
console.log(i); // 3

// Vad kommer att loggas på konsolen?
console.log(i++); // 3
console.log(++i); // 5
console.log(i); // 5
