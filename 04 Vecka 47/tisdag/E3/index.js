// Egentligen saknar koden nedan mening helt och hållet.
// Det är något helt abstrakt som jag har hittat på för att hjälpa dig
// förstå grunden i hur funktioner fungerar.
// Den hjälper INTE förstå varför funktioner kan vara intressanta
// eller vad man kan använda funktioner till.
// Det kommer snart! Bear with me so far!

// Vad kommer det att loggas på konsolen?

function f(a) {
  return a + 1;
}

for (let i = 0; i < f(1); i = f(i)) { // i < 2; i = f(i) (inkrementeras) (i = i + 1);
  console.log(i);
}

for (let i = 0; i < f(1); i = f(i)) { // i < 2; i = f(i) (inkrementeras) (i = i + 1);
  console.log(f(i)); // i + 1
}

// Notera att jag har också ändrat villkor-delen i for-loopen
for (let i = 0; i < f(i); i++) { // i < 2; i = i + 1; // alltid sant, är alltid en större än i
  console.log(i); // i + 1
}
