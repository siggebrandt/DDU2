/**
 * Koda en funktion som tar emot en parameter: author_name.
 * Funktionen ska returnerna:
 *  Om det finns en författare med det namnet (värdet av author_name) så ska funktionen returnera namnet (endast namnet, en sträng) av landet som författaren kommer från.
 * Om det INTE finns en författare med det namnet så ska funktionen returnera strängen "Author not found". 
 */

function getAuthorCountry(author_name) {
    let authorFound = false;
    let countryId;
    for (i = 0; i < AUTHORS.length; i++) {
        if (AUTHORS[i].name == author_name) {
            countryId = AUTHORS[i].country_of_origin_id;
            authorFound = true;
        }
    }
    if (authorFound == false) {
        return "Author not found";
    }
    for (i = 0; i < COUNTRIES.length; i++) {
        if (COUNTRIES[i].id == countryId) {
            return COUNTRIES[i].name;
        }
    }
}
