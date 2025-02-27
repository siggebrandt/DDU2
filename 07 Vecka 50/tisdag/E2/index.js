

const foo = (x = 42) => x[1] == "W" ? 1 : 0;

let a = foo();
let b = foo(a);
let c = foo("WDU") ? "jimi" : "janis";
let d = foo("WWW") ? "nina": "peter";

// Vad kommer att loggas på konsolen?
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(foo(foo("WWW")));
console.log(a && b);
console.log(c || d ? "joni" : "carole");