// event loop
// call stack, task queue, web apis

// blocking functions
// alert("hello");
// prompt("Select a value");

// console.log("first");

// setTimeout(() => {
//   console.log("text in set Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("text in Promise");
// });

// first
// text in Promise
// text in set Timeout

const myPromise = new Promise((resolve, reject) => {
  console.log("before resolve");
  resolve("This text");
  console.log("after resolve");
});

myPromise.then((result) => {
  console.log(result);
});

console.log("My name is");

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("this works");

// My name is
// this works
// before resolve
// after resolve
// This text
// timeout
