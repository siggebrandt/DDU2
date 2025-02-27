// Vad kommer att loggas på konsolen

for (let i = 10; i > 0; i--) {
  if (i == 6) {
    continue;
  }
  if (i == 3) {
    break;
  }
  console.log(i); // 10 - 7 (6 skippas) 5-4 (inte 3, hela loopen avslutas på 3)
}

for (let i = 23; i > 21; i--) {
  if (i == 3) {
    break;
  }
  if (i == 6) {
    continue;
  }
  console.log(i); // 23, 22
}

// finns ingen console.log
