const c1 = "WDU";
const c2 = "är";
const c3 = "bäst";
const c4 = " ";

// Använd konstanterna för att skriva på webbsidan (i p-elementet)
// WDU är bäst
// (notera mellanslagen)

document.querySelector("p").textContent = c1 + c4 + c2 + c4 + c3;
