
const foo = x => x.push(42);

const a = [];
const b = a;
foo(a);
foo(b);

console.log(a.length);
console.log(b.length);
console.log(a[1]);