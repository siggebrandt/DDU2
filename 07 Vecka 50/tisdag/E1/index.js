

const foo2 = (x) => x[1] == "W" ? 1 : 0;

/**
 * const foo2 = function (x) {
 *  let val = x[1];
 *  if (val == "W") {
 *      return 1;
 *  }
 * else {
 *      return 0;
 *  }
 * }
 */

let a = 42;
let b = foo2(a);
let c = foo2("WDU");
let d = foo2("WWW");

// Vad kommer att loggas på konsolen?
console.log(a); // 42
console.log(b); // variabel a, 42, loggar 0
console.log(c); // 0
console.log(d); // 1
console.log(foo2(foo2("WWW"))); // 1 i innersta, 0 loggas
