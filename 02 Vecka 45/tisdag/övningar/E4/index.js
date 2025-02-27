/*

Skapa en array:
    Börja med att skapa en array som heter shoppingList som innehåller följande varor: "mjölk", "bröd", "ägg", "smör".
    Vi rekommenderar att du alltid använder dig av engelska namn för variabler etc.
    Om du vill använda svenska så går det bra, men du får inte använda å ä ö i namn av konstanter eller variabler.

Lägg till varor i arrayen:
    Lägg till "ost" och "frukt" i slutet av arrayen.

Ta bort en vara från arrayen:
    Ta bort "bröd" från arrayen.

Kom åt och skriv ut (logga på konsolen) varor:
    Skriv ut den första varan i arrayen.
    Skriv ut den sista varan i arrayen.
    Skriv ut strängen "ägg" från arrayen.

Hitta längden på arrayen:
    Skriv ut antalet varor i arrayen.
    
*/

let shoppingList = ["milk", "bread", "egg", "butter"];
shoppingList.push("cheese");
shoppingList.push("fruit");
shoppingList.splice(1, 1);

console.log(shoppingList[0]);
console.log(shoppingList[shoppingList.length - 1]);
console.log(shoppingList[1]); //(shoppingList[shoppingList.indexOf("egg")]);
console.log(shoppingList.length);
