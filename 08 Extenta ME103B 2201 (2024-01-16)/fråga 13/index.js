/**
 * Koda en funktion som tar emot en parameter (min_units).
 * Funktionen ska returnera en array med alla böcker av vilka det har sålts fler än min_units
exemplar.
 */

function minUnitsSold(min_units) {
    let arrayOfSoldBooks = [];
    for (let i = 0; i < BOOKS.length; i++) {
        if (BOOKS[i].units_sold >= min_units) {
            arrayOfSoldBooks.push(BOOKS[i]);
        }
    }

    return arrayOfSoldBooks;
}