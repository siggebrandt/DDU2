let colorDivs = document.querySelector("#colors");
let bigBox = document.querySelector("#big_box");

let arrayOfColors = ["yellow", "red", "orange"];

for (let color of arrayOfColors) {
    const div = document.createElement("div");
    colorDivs.append(div);
    div.textContent = color;

    div.addEventListener("click", function () {
        bigBox.style.backgroundColor = color;
    });
}

/** Min lösning
 * for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");

    div.textContent = arrayOfColors[i];

    colorDivs.appendChild(div)
}
 * for (let div of document.querySelectorAll("#colors div")) {
    div.addEventListener("click", function () {
        bigBox.style.backgroundColor = div.textContent;
    });
}
 */

document.querySelector("#big_box").style.width = "100%";
document.querySelector("#big_box").style.height = "50px";