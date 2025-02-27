// Funktionen newNumbers nedan tar två argument:
// - n (heltal)
// - fill (boolesk)
// och skapar n celler i griden #numbers.
// Om fill är true så kommer varje cell att innehåla en slumpmässig siffra mellan 1 och 99 
// Om fill är false så kommer alla celler att innehålla ett bindestreck "-"


function randomNumber(min, max) {
  // Returns a random number from min (inclusive) to max (exclusive)
  return Math.floor(min + (max - min) * Math.random());
}

function newNumbers(n, fill) {
  // Reference to the grid
  const numbersContainer = document.getElementById("numbers");

  // Empty the contents of the grid
  numbersContainer.innerHTML = "";

  // Fill the grid with cells
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    numbersContainer.appendChild(div);
    // Content of the cell?
    if (fill) {
      div.textContent = randomNumber(1, 100);
    } else {
      div.textContent = "-";
    }
  }
}


newNumbers(60, true);

// ÖVNINGEN

// 1) Se till att det skapas nya siffror när användaren klickar på knappen "Skapa nya siffror". Den ska skapa 60 siffror.
document.getElementById("new").addEventListener("click", function () { newNumbers(60, true) });
/*function F1() { // anonym funktion
  newNumbers(60, true);
}*/

// 2) Se till att gridden töms (bara visar bindestreck) när användaren klickar på knappen "Töm"
document.getElementById("empty").addEventListener("click", function () { newNumbers(60, false) });
// 3) Se till att knappen "Addera alla siffror" fungerar, summan ska skrivas i <span id="sum">
document.getElementById("doSum").addEventListener("click", function () {
  let allElements = document.querySelectorAll("#numbers div");
  console.log(allElements);
  let sum = 0;
  for (let element of allElements) {
    sum = sum + Number(element.textContent);
  }
  document.getElementById("sum").textContent = sum;
});

// 4) Se till att knappen "Högsta siffran" fungerar
document.getElementById("findMax").addEventListener("click", function () {
  max = -Infinity;
  let allElements = document.querySelectorAll("#numbers div");
  for (let element of allElements) {
    if (Number(element.textContent) > max) {
      max = Number(element.textContent);
    }
  }
  document.getElementById("max").textContent = max;
});
// 4) Se till att knappen "Lägsta siffran" fungerar
document.getElementById("findMin").addEventListener("click", function () {
  min = Infinity;
  let allElements = document.querySelectorAll("#numbers div");
  for (let element of allElements) {
    if (Number(element.textContent) < min) {
      min = Number(element.textContent);
    }
  }
  document.getElementById("min").textContent = min;
});






