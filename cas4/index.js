// function initialization, hoisting,  arrow function, callbacks

//hoisting and function initialization and arrow function
testFn();
// testFn2();
// testFn3();
// test();

function testFn(params) {
  console.log("first");
}

var testFn2 = () => true;

var testFn3 = function test(params) {
  console.log("first");
};

console.log(b);

let a = 10;
var b = 20;

//callback

const arr1 = [1, 2, 3, 4, 5, 6];

const sum = (a, b) => a + b;
const dif = (a, b) => a - b;
const pro = (a, b) => a * b;
const div = (a, b) => a / b;

const executeFnOnArray = (arr, initValue, fn) => {
  let result = initValue;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result = fn(result, element);
  }

  return result;
};

console.log(executeFnOnArray(arr1, 0, sum));
console.log(executeFnOnArray(arr1, 0, dif));
console.log(executeFnOnArray(arr1, 1, pro));
console.log(executeFnOnArray(arr1, 1, div));

const printThanks = (text) => {
  console.log(text);
  console.log("Thank you for using my services. Suad");
};

const angryGreet = (text) => {
  console.log(text);
  console.log("Don't ever come again! Suad");
};

// napraviti funkciju koja ceo string pretvara u velika slova
// takode prima i drugi prop fukciju iznad printThanks koja poziva sa rezultatom ove funkcije

const makeUpperCase = (text, fn) => {
  const result = text.toUpperCase();
  fn(result);
};

makeUpperCase("Ovo je bas lep dan", printThanks);
makeUpperCase("Ovo je bas lep dan", angryGreet);

// setTimeout(() => {
//   console.log("This happends after 5s");
// }, 5000);

const toUpperCase = (text) => text.toUpperCase();
const toLowerCase = (text) => text.toLowerCase();
const replaceAllSpaces = (text) => text.replaceAll(" ", "-");
const addYtoEveryWord = (text) => {
  const result = text.trim().replaceAll(" ", "y ");
  return `${result}y`;
};

const addYtoEveryWord2 = (text) => {
  let result = text.split(" ");
  const newResult = [];

  for (let i = 0; i < result.length; i++) {
    const element = result[i];
    if (element.length > 0) {
      newResult.push(`${element.trim()}y`);
    }
  }

  return newResult.join(" ");
};

const executeStringCommand = (text, command) => {
  const result = command(text);
  console.log(result);
};

executeStringCommand("Ovo je moj text", toUpperCase);
executeStringCommand("Ovo je moj text", toLowerCase);
executeStringCommand("Ovo je moj text", replaceAllSpaces);
executeStringCommand("Ovo je moj   text    ", addYtoEveryWord);
executeStringCommand("Ovo je moj   text    ", addYtoEveryWord2);
