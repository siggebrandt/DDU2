let inputField = document.querySelector("input");
let bigLetters = document.querySelector("#big_letters");

inputField.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        bigLetters.textContent = inputField.value.toUpperCase();
    }
});
