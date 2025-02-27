// Koda en sida som den som syns på videon.
// När användaren trycker på en tangent så ska
// det visas på sidan vilken tangent det var.

// CSS finns, den kan du använda.

document.body.addEventListener("keydown", function (eventObject) {
    console.log(input);
    document.querySelector("#show").textContent = eventObject.key; // Skriver ut vilken tangent som trycktes
});

document.body.addEventListener("keydown", function (eventObject) {
    eventObject.stopPropagation();
    document.querySelector("#show").textContent = eventObject.key;
});