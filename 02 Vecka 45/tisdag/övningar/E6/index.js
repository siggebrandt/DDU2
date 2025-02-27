let a1 = ["Jimi", "Janis"];
let a2 = ["Tina", "Peter"];
let o_format1 = { firstName: "Nina", lastName: "Simone", born: "1 May 2000" };
let o_format2 = {
  name: {
    first: "Bruce",
    last: "Springsteen",
  },
  born: {
    year: 2000,
    month: "March",
    day: 23,
  },
};

let names = [
  a1[0],
  a1[1],
  o_format1.firstName,
  o_format2.name.first,
  a2[0],
  a2[1],
];

// Skapa och skriv ut en array som har dessa element och i denna ordning:
// ["Jimi", "Janis", "Nina", "Bruce", "Tina", "Peter"]
// Använd endast datan som finns ovan

// Ta bort alla pojknamn från arrayen. Skriv ut det första elementet i arrayen
names.splice(0, 1); //
names.splice(3, 1); // Detta blir fel för index nummer ändras
names.splice(5, 1); //

names.splice(5, 1);
names.splice(3, 1);
names.splice(0, 1);
names.splice(3, 3, "Tina");
