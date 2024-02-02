// Objects
// creating objects, accessing values in objects, using all types as values,
// cloning objects, transforming objects into arrays

// creating objects
var obj = { name: 10 };
const obj1 = new Object();

const obj2 = {
  key1: "This is a value 1",
  key2: false,
  key3: 12,
  key4: undefined,
  key5: null,
  key6: function name(params) {
    console.log("funckija je pozvana");
  },
  1234: "",
};

// accessing values in objects
// console.log(obj2);
// console.log(obj2.key1);
// console.log(obj2.key6);

// obj2.key1 = "This is changed";

// console.log(obj2);

// "a".toLowerCase();
// obj2.key6();

// // passing by value, passing by reference
// function sum(a, b, o) {
//   a = 20;
//   b = 30;
//   o.name = 20;
//   console.log(a, b, o);
// }

// const x = 2;
// const y = 3;

// sum(x, y, obj);
// console.log(x, y, obj);

// deleting keys

// obj2.key1 = "";
// console.log(obj2);

// delete obj2.key1;
// console.log(obj2);

// cloning objects
// const obj2Clone = { ...obj2 };
// console.log(obj2, obj2Clone);
// delete obj2Clone.key1;
// console.log(obj2, obj2Clone);

// const obj2Clone2 = structuredClone(obj2);
// console.log(obj2, obj2Clone2);

// transforming objects into arrays
const obj2ArrayKeys = Object.keys(obj2);
const obj2ArrayValues = Object.values(obj2);

console.log(obj2ArrayKeys, obj2ArrayValues);

// extra accessing values in objects
obj2["key1"];
const abc = "key1";

obj2[abc];
