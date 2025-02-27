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

//console.log(getDeck());

function randomIndex(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
}

function getCards(nCards, inDeck) {
    let hand = [];
    let leftOfCards = [];
    for (let i = 0; i < nCards; i++) {
        const index = randomIndex(inDeck);
        hand.push(inDeck[index]);
        inDeck.splice(index, 1); // tar bort kortet som lades till i inDeck
    }
    return {
        hand: hand,
        outdeck: inDeck,
    };
}

let kortLek = getDeck();
const result = getCards(5, kortLek);
console.log(result);