/**
 * Fråga 1
  Koda en funktion getByName(string) som returnerar en array av skor vars namn innehåller string.
 */
function getByName(shoeString) {
    const shoesByName = [];

    for (const shoe of SHOES) {
        if (shoe.name.includes(shoeString)) {
            shoesByName.push(shoe);
        }
    }
    return shoesByName;
}

/**
 * Fråga 2
  Koda en funktion getShoes(kind, country) som returnerar en array av skor som är av typen kind (slippers, boots eller sneakers) och från landet country.
 */
function getShoes(kind, country) {
    let kindID = 0;

    for (const shoeKind of KINDS) {
        if (shoeKind.name === kind) {
            kindID = shoeKind.id;
            // få tag i IDt för kind
        }
    }

    let countryID = 0;
    for (const shoeCountry of COUNTRIES) {
        if (shoeCountry.name === country) {
            countryID = shoeCountry.id;
            // få tag i IDt för country
        }
    }

    shoesByKindAndCountry = [];
    for (let shoe of SHOES) {
        if (shoe.kind_id == kindID && shoe.country_id == countryID) {
            shoesByKindAndCountry.push(shoe);
            // alla skor som matchar både kindID & countryID pushas
        }
    }

    return shoesByKindAndCountry;
};

/**
 * Fråga 3
Koda en funktion getMostExpensiveByKind(kind) som returnerar en sko, nämligen den som är dyrast av typen kind.
 */
function getMostExpensiveByKinds(kind) {
    let kindID = 0;

    for (const shoeKind of KINDS) {
        if (shoeKind.name === kind) {
            kindID = shoeKind.id;
            // få tag i IDt för kind
        }
    }

    let mostExpensivePrice = 0;
    let mostExpensiveShoe = null;

    for (const shoe of SHOES) {
        if (shoe.kind_id == kindID && shoe.price > mostExpensivePrice) {
            mostExpensivePrice = shoe.price; // Uppdaterar priset
            mostExpensiveShoe = shoe; // uppdaterar skon
        }
    }

    return mostExpensiveShoe;
}
console.log(getMostExpensiveByKinds("Boots"));

/**
 * Fråga 4
  Koda en funktion getMostExpensiveAllKinds() som returnerar ett objekt med strukturen:
  {
    Slippers: sko-objekt,
    Boots: sko-objekt,
    Sneakers: sko-objekt
  }
  där varje egenskap har som värde skon som är dyrast av den typen.
 */
function getMostExpensiveAllKinds() {
    let mostExpensiveShoeKind = {
        Slippers: getMostExpensiveByKinds("Slippers"),
        Boots: getMostExpensiveByKinds("Boots"),
        Sneakers: getMostExpensiveByKinds("Sneakers")
    };
    return mostExpensiveShoeKind;


    /*
    /*for (const shoeKind of KINDS) {
        if (shoeKind.name === kind) {
            kindID = shoeKind.id;
            // få tag i IDt för kind
        }
    }


    let kindOfShoes = KINDS;

    for (let key in kindOfShoes) {
        let mostExpensivePrice = 0;
        let mostExpensiveShoe = null;
        for (const shoe of SHOES) {
            if (shoe.price > mostExpensivePrice) {
                mostExpensivePrice = shoe.price; // Uppdaterar priset
                mostExpensiveShoe = shoe; // uppdaterar skon
            }
        }

        return mostExpensiveShoe;
    }

*/
}
console.log(getMostExpensiveAllKinds())



/**
 * Fråga 5
Tänk dig att du har X kronor att spendera och att du vill köpa två par skor.
Du vill att så lite pengar som möjligt blir över och bryr dig inte så mycket om skorna.
Koda en funktion _getTwoPairs(X) som returnerar en array av objekt, där varje objekt har strukturen:
{
  shoe1: sko-objekt,
  shoe2: sko-objekt,
}
Skorna i varje objekt ska vara olika och tillsammans kosta exakt X. Om det inte finns två par av skor som tillsammans kostar X ska funktionen returnera false.
 */

/**
 * Påbyggnad
    Koda en funktion getTwoPairs(X) som använder _getTwoPairs för att hitta två olika par skor som tillsammans kostar exakt X.
    Om det inte finns två par skor som tillsammans kostar X ska funktionen leta efter två par skor som kostar X - 1.  
    Om det inte finns två par skor som tillsammans kostar X ska funktionen leta efter två par skor som kostar X - 2.  
    osv tills den hittar åtminstone två olika par skor som kostar så nära X som möjligt, men alltid mindre än X.
 */