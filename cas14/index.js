// DOM manipulation

// napraviti dva inputa za brojeve i dugme koje kad se klikne izracuna se njihov
// zbir i prikaze u p elementu ispod ovih inputa

const calculate = (sign) => {
  const a = document.getElementById("num1");
  const b = document.getElementById("num2");
  const result = document.getElementById("result");
  let calculation;

  switch (sign) {
    case "+":
      calculation = +a.value + +b.value;
      break;
    case "-":
      calculation = +a.value - +b.value;
      break;
    case "/":
      calculation = +a.value / +b.value;
      break;
    case "*":
      calculation = +a.value * +b.value;
      break;
    default:
      calculation = "Not possible";
  }

  //   const sum = Number(a.value) + Number(b.value)

  result.textContent = calculation;
};

// Dodati jos 3 dubmeta za oduzimanje, deljenje i mnozenje

// Umesto da pozivate funckcije direktno u html napravite event listenere
const sumButton = document.getElementById("sum");
const difButton = document.getElementById("dif");
const mulButton = document.getElementById("mul");
const divButton = document.getElementById("div");

sumButton.addEventListener("click", (e) => {
  calculate("+");
});

difButton.addEventListener("click", (e) => {
  calculate("-");
});
mulButton.addEventListener("click", (e) => {
  calculate("*");
});
divButton.addEventListener("click", (e) => {
  calculate("/");
});

// napraviti input element i dodati na njega event listener za input event
// u callbacku za event listener prikazati na konzoli vrednost inputa

const input1 = document.querySelector("#test");

input1.addEventListener("input", (e) => {
  //   console.log(input1.value);
  console.log(e.target.value);
});

// napraviti skriptu koja pita korsinika sa prompt fukcijom da unsese svoje godine
// i onda odgovara na ekranu u nekom p elementu sa tim da li je on
// u penziji ili tinejdzer ili obicni covek

const userInput = prompt("Unesite vase godine");

const userResult = document.getElementById("godine");

if (+userInput < 18) {
  userResult.textContent = "Vi ste tinejdzer";
} else if (+userInput < 65) {
  userResult.textContent = "Vi ste normalan covek";
} else {
  userResult.textContent = "Vi ste penzioner";
}

// da ovaj kod pomerite u fukciju i dodate button za pokretanje ovog koda
