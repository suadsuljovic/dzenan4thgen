// closure and practice

// callback
function fn21(callback) {
  return callback();
}

// closure
function fn1(a) {
  return function fn2(b) {
    return a + b;
  };
}

const a = fn1(20);
const b = fn1(10);
const sum = a(20); // 40
const sumb = b(20); // 30
const sum1 = a(10); // 30
const sum1b = b(10); // 20
const sum2 = a(1); // 21
const sum2b = b(1); // 11

console.log(sum, sum1, sum2);
console.log(sumb, sum1b, sum2b);

function fn(a) {
  return function fn2(b) {
    return function fn3(c) {
      return a + b + c;
    };
  };
}

// Currying
const result = fn1(20)(10);

console.log(result);

function fn2(a) {
  return {
    test: a,
  };
}
const abc = fn2(10);
const value1 = abc.test;

const value = fn2(10).test;

const result1 = fn(10)(20)(30);

console.log(result1);

// examples

function memorize() {
  const memory = {};

  return function (a) {
    console.log(memory);

    if (memory[a]) {
      console.log("It already exist");
    } else {
      console.log("Thanks for new samples");
      memory[a] = true;
    }
  };
}

const memory = memorize();
const memory2 = memorize();
memory(10); // new sample
memory(10); // already exist
memory("Suad"); // new sample
memory("next"); // new sample
memory("Suad"); // already exist

memory2(10); // new sample

// SIMPLE JS
// primitives ✅
// complex types ✅
// const let ✅
// operators ✅
// logical operators ✅
// conditionals ✅
// functions ✅
// loops ✅
// objects ✅
// arrays ✅
// array methods, es6 ✅
// classes ✅

// MEDIUM JS
// DOM & BOM ✅
// DOM manipulation ✅
// events ✅
// hoisting ✅
// callbacks ✅

//ADVANCED JS
// event loop ✅
// promises ✅
// closure ✅
// async await, es6 ✅

// package.json ✅
// modules and es6 ✅
