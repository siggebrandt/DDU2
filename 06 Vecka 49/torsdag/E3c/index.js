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

function atLeastTwoKings(mottagenHand) {
    let nKings = 0;
    for (let card of mottagenHand) {
        if (card.value == 13) {
            nKings++;
        }
    }
    return nKings >= 2;
}

let kortLek = getDeck();
const result = getCards(5, kortLek);
console.log(result);

//-------

function atLeastTwoPairs(mottagenHand, which) {
    let nPairs = 0;

    for (let card of mottagenHand.hand) {
        if (card.value == which) {
            nPairs++;
            console.log(card);
        }
    }
    return nPairs >= 2;
}

console.log(atLeastTwoPairs(result, 4));