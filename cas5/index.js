// array functions, es6
// map, filter

// ES6 or ECMAscript
// let, const, arrow function, array methods: map, filter, reduce...

const arr = [1, 2, 3, 4, 5, 6];

const arr2 = arr.map((value, index, array) => {
  console.log(value, index, array);
  return `This is number ${value}, with index ${index}`;
});

console.log(arr2);

// da napravite novi array sa elementima niza arr: arr element * 2

const arr3 = arr.map((value) => {
  return value * 2;
});

// da napravite novi niz koji iz niza arr sklanja svaki paran broj
// i menja ga sa undifend

const arr4 = arr.map((value) => {
  if (value % 2 == 0) {
    return undefined;
    array;
  } else {
    return value;
  }
});

console.log(arr4);

// novi niz koji ima kvadrat svakog neparnog broja iz niza arr

const arr5 = arr.map((value) => {
  if (value % 2 != 0) {
    return value * value;
  } else {
    return value;
  }
});

console.log(arr5);

const arr6 = "This is an created from a string".split(" ");

// napraviti novi niz koji sve stringove iz nica arr6 pretvara u uppercase

const arr7 = arr6.map((value) => value.toUpperCase());

console.log(arr7);

const arr8 = arr.filter((value) => {
  //   if (value % 2 == 0) {
  //     return false;
  //   }

  //   return true;

  return value % 2 !== 0;
});

// skloniti iz niza arr6 sve elemente koji imaju slovo a

const arr9 = arr6.filter((value) => {
  return !value.includes("a");
});

console.log(arr9);

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
];

// napravite niz samo imena

const userNames = mockData.map((value) => {
  return value.name;
});

// napravite niz koji ima ime i prezime u stringu

const userNamesAndSurnames = mockData.map((value) => {
  return value.name + " " + value.surname;
});

console.log(userNamesAndSurnames);

// napraviti niz svih korisnika koji su stariji od 24

const olderThen24 = mockData.filter((value) => {
  return value.age > 24;
});

// niz svih korsinika cije prvo slovo imena je samoglasnik a,e,i,o,u

const newArray = mockData.filter((value) => {
  //   switch (value.name[0].toLowerCase()) {
  //     case "a":
  //     case "e":
  //     case "i":
  //     case "o":
  //     case "u":
  //       return true;
  //       break;
  //     default:
  //       return false;
  //   }

  switch (["a", "e", "i", "o", "u"].includes(value.name[0].toLowerCase())) {
    case true:
      return true;
    default:
      return false;
  }
});

console.log(newArray);

// napravati search functionality gde na osnovu variable search
// filtriramo array po imenu

const search = "A";

const found = mockData.filter((value) => {});
