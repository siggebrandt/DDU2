/**
 * a authorName (sträng, namnet på en författare. Utgå från att alla namn är unika).
 * Funktionen ska returnera en array med titlarna (strängar) på alla böcker som är skrivna avförfattaren med det angivna namnet.
 * Funktionen ska returnera strängen "Author Not Found" om författarnamnet inte finns i databasen.
 * Som kommentaren i koden antyder så är alla arrayer i databasen globala variabler.
 * 
 */

function getBooksByAuthor(authorName) {
    let authorId = "";
    for (i = 0; i < AUTHORS.length; i++) {
        if (authorName == AUTHORS[i].name) {
            authorId = AUTHORS[i].id;
        }
    }
}