// array methods and es6
// sort
// some,every, find, findIndex, join, concat,

//sort

const arr = ["a", "b", "c", "f", "h", "m", "z", "u"];
const arr2 = [2, 3, 7, 6, 22, 8, 9];

// arr2.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }

//   if (b > a) {
//     return -1;
//   }

//   return 0;
// });

arr2.sort((a, b) => b - a);

console.log(arr2);

const mockData = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
    address: "123 Main St, Cityville",
  },
  {
    name: "Alice",
    surname: "Smith",
    age: 30,
    address: "456 Oak St, Townsville",
  },
  {
    name: "Bob",
    surname: "Johnson",
    age: 22,
    address: "789 Pine St, Villagetown",
  },
  {
    name: "Eva",
    surname: "Brown",
    age: 28,
    address: "101 Elm St, Hamletsville",
  },
  {
    name: "Enver",
    surname: "Kostic",
    age: 45,
    address: "45 Oak St, Townsville",
  },
];

mockData.sort((a, b) => a.age - b.age);

console.log(mockData);

mockData.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }

  if (b.name > a.name) {
    return -1;
  }

  return 0;
});

console.log(mockData);

// sort the following array
const arr3 = [1, 69, 3, 42, 5, 777, "a", "b", "1a"];

const arr31 = arr3
  .filter((item) => {
    if (typeof item === "number") {
      return true;
    }
    return false;
  })
  .sort((a, b) => a - b);

const arr32 = arr3
  .filter((item) => {
    if (typeof item === "string") {
      return true;
    }
    return false;
  })
  .sort();

// concat
const arr33 = arr31.concat(arr32);

console.log(arr33);

// array.join, string.split

const str = "Ovo je neki string";

const arr5 = str.split(" ");

const str2 = arr5.join("_");

console.log(str2);

// napravite funkciju koja uzima neku recenicu i pravi od nje kebab case

function makeKebabCase(string) {
  const arr5 = string.split(" ");

  return arr5.join("-");
}

console.log(makeKebabCase("Hocu ovo da bude kebab case."));

// find, findIndex

const arr6 = [1, 2, 3, 4, 5, 6];

const found = arr6.find((value) => {
  if (value === 3) return true;
});

console.log(found);

const found2 = arr6.findIndex((value) => {
  if (value === 3) return true;
});

console.log(found2);

// nadite objekat u kome je ime jednako Enver

const found3 = mockData.find((item) => {
  if (item.name === "Enver") return true;
});

console.log(found3);

// naci index objekta mock data cije je prezime Smith

const found4 = mockData.findIndex((item) => {
  if (item.surname === "Smith") return true;
});

console.log(found4);

//every, some

const arr7 = [1, 3, 5, 7, 9, 2];

const check = arr7.every((value) => {
  if (value % 2 === 0) {
    return false;
  }

  return true;
});

console.log(check);

const check2 = arr7.some((value) => {
  if (value % 2 === 0) {
    return true;
  }

  return false;
});

console.log(check2);

const arr8 = ["1", 2, 3, 5, "6"];

// proverite da li niz arr8 ima bar jedan element koji je string

const check3 = arr8.some((value) => {
  if (typeof value === "string") {
    return true;
  }

  return false;
});

console.log(check3);

// proverite da li niz arr8 ima samo borojeve

const check4 = arr8.every((value) => {
  if (typeof value === "number") {
    return true;
  }

  return false;
});

console.log(check4);

// proveriti da li bar jedan korisnik iz mockdata je stariji od 40 godina

const check5 = mockData.some((item) => {
  if (item.age > 40) {
    return true;
  }

  return false;
});

console.log(check5);
