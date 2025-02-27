const inputDOM = document.querySelector("input");
const resultsDOM = document.querySelector("#results");
inputDOM.value = "";

function arrayFilter(array, string) {
  let arrayOfSuperheroes = [];

  for (let key in array) {
    if (array[key].realname.toLowerCase().includes(string.toLowerCase()) || array[key].name.toLowerCase().includes(string.toLowerCase())) {
      arrayOfSuperheroes.push(array[key]);
    }
  }
  return arrayOfSuperheroes;
}

function render(hero) {
  console.log(hero)
  resultsDOM.innerHTML = "";
  for (let key in hero) {
    const heroDiv = document.createElement("div");
    heroDiv.className = "hero";
    resultsDOM.appendChild(heroDiv);

    const heroDivText = document.createElement("div");
    heroDivText.textContent = `${hero[key].name} (${hero[key].realname})`;
    heroDivText.style.order = "2";
    heroDiv.appendChild(heroDivText);

    const heroDivColor = document.createElement("div");
    heroDivColor.className = "color";
    heroDivColor.style.backgroundColor = hero[key].favoriteColor;
    heroDivColor.style.order = "1";
    heroDiv.appendChild(heroDivColor);
  }
}

render(arrayFilter(superheroes, inputDOM.value));
inputDOM.addEventListener("keyup", function () {
  render(arrayFilter(superheroes, inputDOM.value));
});