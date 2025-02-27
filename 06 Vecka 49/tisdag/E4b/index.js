// Det finns nu ett input-element bredvid knappen "Skapa nya siffror".

// Del A)
// Användaren ska kunna skriva en siffra där och, när hen klickar på knappen "Skapa nya siffror"
// så ska det skapas lika många siffror som det står på input fältet.

// Del B)
// Det ska också gå att trycka Enter i input fältet och då ska det vara som att 
// man klickade på knappen.

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


document.getElementById("new").addEventListener("click", function () {
  let n = document.querySelector("#nNumbers").value;
  newNumbers(n, true);
});

document.querySelector("#nNumbers").addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    let n = document.querySelector("#nNumbers").value;
    newNumbers(n, true);
  }
});
