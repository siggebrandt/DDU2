let plus = document.getElementById("plus");
let yellowContainer = document.getElementById("yellowContainer");
let minus = document.getElementById("minus");

yellowContainer.style.width = "15px";
let yellowWidth = 15;

plus.addEventListener("click", function () {
    yellowWidth += 10;
    yellowContainer.style.width = `${yellowWidth}px`;
});

minus.addEventListener("click", function () {
    yellowWidth -= 10;
    yellowContainer.style.width = `${yellowWidth}px`;
});