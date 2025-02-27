/*
Koda en sida som den du ser på bilden.
Du måste använda koden som redan finns på plats.
HTML- och CSS-filerna får inte ändras.
*/


const names = [
  "Alina", "Anahita", "Anna", "Anoli", "Artin", "Asir", "Elias", "Elin", "Ellen", "Emira", "Felicia", "Gustaf", "Henrik", "Jennifer", "Jonah", "Josefin", "Judy", "Katarina", "Klara", "Leith", "Linus", "Maja", "Markus", "Medina", "Michelle", "Moa", "Monique", "Neo", "Omaimaa", "Oscar", "Peggy", "Philip", "Rawad", "Rebecca", "Robin", "Sala", "Sara", "Sebastian", "Sigge", "Simon", "Theodor", "Tiffany", "Tilde", "Yehor", "Zahra", "Zoie"
];

const Main = document.querySelector("main");

function separatedLetters(name) {
  const nameDiv = document.createElement("div");
  nameDiv.className = "name";
  for (let i = 0; i < name.length; i++) {
    const letter = document.createElement("div");
    nameDiv.appendChild(letter);
    letter.textContent = name[i];
  }
  return nameDiv;
}


for (let name of names) {
  Main.append(separatedLetters(name));
}
