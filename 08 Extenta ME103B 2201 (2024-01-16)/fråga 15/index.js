/**
 * Koda en funktion som tar emot en parameter: author_name
 * Funktionen ska returnera antalet böcker som författaren har skrivit. Funktionen ska alltså returnera ett tal.
 */

function authorsBooks(author_name) {
    let author_id;
    let numberOfBooks = 0;
    for (i = 0; i < AUTHORS.length; i++) {
        if (AUTHORS[i].name == author_name) {
            author_id = AUTHORS[i].id;
        }
    }

    for (i = 0; i < BOOKS.length; i++) {
        if (BOOKS[i].author_id == author_id) {
            numberOfBooks++;
        }
    }

    if (numberOfBooks == 0) {
        return "Author not found";
    }
    return numberOfBooks;
}