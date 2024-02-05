// arrays
// creating arrays, accessing data in arrays, matrix
// iterating arrays, arrays and objects

// creating arrays
const niz = [];
const niz2 = [1, 2, 3, 4, 5, 6];
const niz3 = [1, false, null, undefined, "", {}];

// accessing data in array
console.log(niz2[1]);
console.log(niz2[niz2.length - 1]);

niz2.push("ovo je string");
niz2.pop();

niz2.unshift("ovo je pocetak");
niz2.shift();

niz2.splice(2, 1);
niz2.splice(2, niz2.length - 2);

console.log(niz2);

// iterating arrays
for (let i = 0; i < niz2.length; i++) {
  const element = niz2[i];
  console.log(element);
}

// varati true ako niz ima string kao element, u drugom slucaju false
function isStringInArray(niz) {
  for (let i = 0; i < niz.length; i++) {
    if (typeof niz[i] === "string") {
      return true;
    }
  }

  return false;
}

console.log(isStringInArray(niz2));
console.log(isStringInArray(niz3));

function isUndefinedInArray(niz) {
  for (let i = 0; i < niz.length; i++) {
    if (typeof niz[i] === "undefined") {
      return true;
    }
  }

  return false;
}

console.log(isUndefinedInArray(niz3));

//matrix

const mulitNiz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(mulitNiz[1][1]);
console.log(mulitNiz[0][0]);
console.log(mulitNiz[1][1]);

for (let i = 0; i < mulitNiz.length; i++) {
  for (let j = 0; j < mulitNiz[i].length; j++) {
    console.log(mulitNiz[i][j]);
  }
}

// ako ima bar jedan string vrati true, otherwise false
function isStringInMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (typeof matrix[i][j] === "string") {
        return true;
      }
    }
  }

  return false;
}

console.log(isStringInMatrix(mulitNiz));

const users = [
  { name: "Suad", surname: "Suljovic" },
  { name: "Vahid", surname: "Konicanic" },
  { name: "Saladin", surname: "Hodzic" },
];

console.log(users[0].name);
console.log(users[2].surname);

function findInArray(niz, property, valueOfProperty) {
  for (let i = 0; i < niz.length; i++) {
    if (
      niz[i].hasOwnProperty(property) &&
      niz[i][property] === valueOfProperty
    ) {
      return niz[i];
    }
  }

  return false;
}
console.log(users[0]["s"]);
console.log(findInArray(users, "s", undefined));
