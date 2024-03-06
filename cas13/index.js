// DOM & BOM
// DOM, accessing, creating, deleting html elements
// BOM, events, listeners

// Document Object Model
console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.contentType);
console.log(document.children[0]);

console.log(document);

// accessing html elements in document
// svaki html element postoji kao objekat u javascripti
const p = document.getElementById("testId");
const inputs = document.getElementsByClassName("testClass");
console.log(p, inputs[0]);
const testInput = inputs[0];

// p.textContent = "This was changed";
testInput.value = "This was inputed in JS";
testInput.type = "number";

const p2 = document.querySelector("p");

console.log(p2);

const p3 = document.querySelector("p[id=testId2]");
console.log(p3);

const p4 = document.querySelector("p[data-custom=myValue]");
console.log(p4);

const allP = document.querySelectorAll("p");
console.log(allP);

allP.forEach((item) => {
  console.log(item.innerText);
});

// creating html elments
console.log(document.body.innerHTML);
// document.body.innerHTML =
//   document.body.innerHTML + "<p>I was created in js</p>";

console.log(p.innerHTML);
p.innerHTML = "This was changed at the end";

const newElement = document.createElement("a");
newElement.href = "https://www.google.com";
newElement.textContent = "This is link to google";
newElement.innerHTML = "changed 2";
newElement.innerText = "changed 3";

document.body.appendChild(newElement);

// delete elements

document.body.removeChild(newElement);

// document.body.innerHTML = "";

// p.parentElement.removeChild(p);

// BOM- browser object model

console.log(window);

console.log(window.history);
console.log(window.location);

var myCustom = "this should exist on window";

console.log(window.myCustom);

// events

p.addEventListener("mouseenter", (e) => {
  e.target.style.color = "blue";
});

p.addEventListener("mouseleave", (e) => {
  e.target.style.color = "black";
});
