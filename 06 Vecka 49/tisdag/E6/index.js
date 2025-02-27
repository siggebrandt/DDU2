// Koda en sida som den som syns på videon.
// När användaren clickar på knappen "green" eller trycker
// på tangenten "g" så skapas det en grön div inne i #divs.
// Detsamma för knappen "blue" och tangenten "b"; och "red" och "r".
// Du måste koda och sen använda funktionen createDiv, se nedan.

// CSS finns, den kan du använda.

/**
 * psuedo-kod:
 * addera eventListener till varje knapp
 * addera eventlistener för body med keypress
 * skapa CreateDiv som skapar en div för varje specifik färg
 */
function createDiv(color) {
    const div = document.createElement('div');
    div.style.background = color;
    document.getElementById('divs').appendChild(div);
};

array = ["green", "blue", "red"];
for (let color of array) {
    const button = document.createElement("button");
    document.querySelector("#controls").appendChild(button);
    button.textContent = `${color} (${color[0]})`;
    button.addEventListener("click", function () {
        createDiv(color);
    });

    document.body.addEventListener("keypress", function (eventObject) {
        if (eventObject.key === color[0]) {
            createDiv(color);
        }
    });
}