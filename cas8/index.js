// class
// class synthetic sugar syntax, es6
// prototype class syntax
// OOP and OOP 4 pilar: inheritance, encapsulation, abstraction, polymorphism

// class

class Auto {
  //   type;
  //   name;
  //   yearOfManufacture;
  //   price;

  constructor(type, name, yearOfManufacture, price) {
    this.type = type;
    this.name = name;
    this.yearOfManufacture = yearOfManufacture;
    this.price = price;
  }

  getPrice() {
    return `The price is ${this.price} euros`;
  }

  priceInCents() {
    return `The price is ${this.price * 100} cents`;
  }

  calculatePDV() {
    return 0.2 * this.price;
  }
}

const a1 = new Auto("BMW", "C1", 2012, 35000);
const a2 = new Auto("Mercedes", "nest", 2022, 25000);
const a3 = new Auto("Audi", "A1", 2014, 86000);

const a4 = new Auto();
console.log(a4.name);

console.log(a1.name);

// console.log(a1.calculatePDV());
// console.log(a2.calculatePDV());

// prototype class

function Auto2(name, price) {
  this.name = name;
  this.price = price;
}

Auto2.prototype.getPrice = function () {
  return this.price;
};

const b1 = new Auto2("BMW", 12000);
console.log(b1.getPrice());

console.log(b1);

// custom array method

Array.prototype.myMap = function (callback) {
  const result = [];
  this.forEach((value, index, array) => {
    result.push(callback(value, index, array));
  });

  return result;
};

const arr = [1, 2, 3, 4].myMap((value) => {
  return value * 2;
});

console.log(arr);

// inheritance

class Mamel {
  name;
}

class Human extends Mamel {}

console.log(new Mamel(), new Human());

// implement myFilter on Array prototype
Array.prototype.myFilter = function (callback) {
  const result = [];
  this.forEach((value, index, array) => {
    if (callback(value, index, array)) {
      result.push(value);
    }
  });

  return result;
};

const arr1 = [1, 2, 3, 4].myFilter((n) => n % 2 == 0);
console.log(arr1);

// implement myReduce on array Prototype
Array.prototype.myReduce = function (callback, initValue) {
  let result = initValue ? initValue : this[0];

  this.forEach((value, index, array) => {
    if (!initValue && index === 0) {
      return;
    }

    result = callback(result, value, index, array);
  });

  return result;
};

const summ = [1, 2, 3].myReduce((res, value) => res + value, 0);

console.log(summ);
