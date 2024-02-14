// es6 + array methods
// reduce, forEach

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [];

arr.forEach((element, index) => {
  arr2.push({ element: element, index: index });
});

console.log(arr2);

// koristeci foreach consolo logujete sve elementa niza arr

arr.forEach((element) => {
  console.log(element);
});

// koristeci foreach da obiriste sve elemente niza arr

// //ne radi
// arr.forEach((element, index, array) => {
//   console.log(element, index, array);
//   arr.shift();
// });

// arr.forEach((element, index, array) => {
//   console.log(element, index, array);
//   arr.splice(0);
// });

// reduce

const sum = arr.reduce((result, value, index, array) => {
  return result + value;
});

console.log(sum);

// da ubacite sve elemente niza arr u bojekat sa key-om indexom tog elementa

const objFromArr = arr.reduce((result, value, index) => {
  console.log(result, value);

  result[index] = value;
  return result;
}, {});

console.log(objFromArr);

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

// treba da dobijete imena u nizu svih korisnika koji su stariji od  24

const userArray = mockData.filter((item) => item.age > 24);

const userArray2 = userArray.map((item) => item.name);

const userArray3 = mockData
  .filter((item) => item.age > 24)
  .map((item) => item.name);

console.log(userArray2);

const userArray4 = mockData.reduce((result, value) => {
  if (value.age > 24) {
    result.push(value.name);
  }

  return result;
}, []);

console.log(userArray4);

// naci adresu korsinika koji je iz Townsville

const userAddress = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result = value.address;
  }
  return result;
}, "");

console.log(userAddress);

// naci niz adresa svih korisnika iz Townsville

const userAddresses = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result.push(value.address);
  }
  return result;
}, []);

console.log(userAddresses);
