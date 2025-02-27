function getDeck() {
    deck = []
    let arrayOfColors = ["clubs", "diamonds", "hearts", "spades"];

    for (let color of arrayOfColors) {
        for (let i = 1; i <= 13; i++) {
            deck.push({
                color: color,
                value: i,
            })
        }
    }
    return deck;

}

console.log(getDeck());