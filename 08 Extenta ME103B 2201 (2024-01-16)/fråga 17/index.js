/**
 * Koda en funktion som tar emot två parametrar: language_name_1, language_name_2
 * Funktionen ska räkna hur många exemplar som har sålts av alla böcker skrivna i vardera språk.
 * Funktionen ska alltid returnera en sträng:
 * 1. Strängen "Same same" om det har sålts lika många exemplar av böcker skrivna i språket language_name_1 som i språket language_name_2.
 * 2. language_name_1 (alltså namnet på språket) om det har sålts fler exemplar av böckerna skrivna i det språket.
 * 3. language_name_2 (alltså namnet på språket) om det har sålts fler exemplar av böckerna skrivna i det språket.


 * Exempel (utgå från att funktionen får namnet get_largest_language:
 * Uttrycket get_largest_language("Spanish", "English") ska returnera:
 * 1. "Same same" om det har sålts lika många ex av böcker skrivna på engelska som på spanska.
 * 2. "Spanish" om det har sålts fler ex av böcker skrivna på spanska
 * 3. "English" om det har sålts fler ex av böcker skrivna på engelska
 */

function get_largest_language(language_name_1, language_name_2) {

    function getLanguageByName(language_name) {
        for (let language of LANGUAGES) {
            if (language.name === language_name) {
                return language.id;
            }
        }
    }

    let language1_sold = 0;
    let language2_sold = 0;



}