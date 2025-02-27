// Kolla på videon.
// När användaren skriver en siffra och trycker på enter så läggs
// siffran till i #numbers.
function F1(eventObject) {
    console.log(eventObject)

    if (eventObject.key == "Enter") {
        const div = document.createElement("div");
        document.querySelector("#numbers").appendChild(div);
        div.textContent = eventObject.target.value;
    }
}

const inputDOM = document.querySelector("input");
inputDOM.addEventListener("keypress", F1);