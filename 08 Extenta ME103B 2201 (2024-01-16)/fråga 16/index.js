/**
 * Koda en funktion som tar emot en parameter: language_name
 * Funktionen ska returnera en array med namnet (endast namnet) av alla länder där språket (värdet av language_name) talas.
 */

function languageCountries(language_name) {
    let arrayOfCountriesIDs;
    let arrayOfCountriesNames = [];


    for (i = 0; i < LANGUAGES.length; i++) {
        if (LANGUAGES[i].name.toLowerCase() == language_name.toLowerCase()) {
            arrayOfCountriesIDs = LANGUAGES[i].spoken_in_countries_ids;
        }
    }
    for (i = 0; i < COUNTRIES.length; i++) {
        for (j = 0; j < arrayOfCountriesIDs.length; j++) {
            if (COUNTRIES[i].id == arrayOfCountriesIDs[j]) {
                arrayOfCountriesNames.push(COUNTRIES[i].name);
            }
        }
    }
    if (arrayOfCountriesNames.length == 0) {
        return "No langauges found";
    }
    return arrayOfCountriesNames;
}