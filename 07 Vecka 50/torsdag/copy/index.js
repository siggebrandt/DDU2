/**
 * koda funktion som skriver ut alla spelen som är multiplayer
 * funktionen har inte tillgång till konstanten "games", därför skickar vi med den som argument
 */

const games = [
    { title: "FIFA", multplayer: true, price: 320 },
    { title: "Solo", multiplayer: false, price: 189 },
    { title: "Minecraft", multplayer: false, price: 200 },
    //etc.. det är 1000 spel
]

function findMultiplayer(arrayOfGames) {
    let arrayOfMultiplayerGames = [];

    for (const game of arrayOfGames) {
        if (game.multiplayer == true) {
            arrayOfMultiplayerGames.push(game);
        }
    }
    return arrayOfMultiplayerGames;
}