/*

En dansk hackargrupp, känd som "WDU - Wild Data Underwerk", har släppt info om deras egna inköp under hela 2023. De har gått loss och handlat 10000 ggr under året. Dessa kvitton inkluderar information om person, affär, pris, datum (dag och tid, alltid 2023) och stad.

WDU söker nu folk som vill ansluta sig till dem, och har ställt några frågor ang datan. Om man lyckas svara på dem korrekt så kan man komma på intervju...


Frågorna som de vill ha svar på:

- Vilka är de två mest populära städer för inköp?
- Köper hackarna mest på fm eller på em?
- Finns det någon hacker som har lyckats köpa två ggr på samma affär (inkl stad) på samma dag? Vem? Vilken affär och vilken stad? Har hen lyckats med detta fler än en gång?
- Vad är det högsta som har spenderats på en affär under en månad, och vid vilken affär (inkl stad) skedde det?
- Vilken kedja av affärer är minst populär bland hackarna?


*/
let arrayOfAllReceiptsInCities = [];

for (i = 0; i < receipts.length; i++) {
    arrayOfAllReceiptsInCities.push(receipts[i].cityID);
    
}
console.log(arrayOfAllReceiptsInCities);