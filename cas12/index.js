// fetching data & query params

// fetchajte sa ovog apija:https://api.quotable.io/quotes/random sa get methodom podatke
//i zatim ih conoslogujte. Koristi te promise i fetch api.

// consologujte authora i content iz qutoa kojeg dobijete sa apija

fetch("https://api.quotable.io/quotes/random")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data[0].author, data[0].content);
  });

// uradite sve sto u prethodnom zadatku ali korisiteci async await.
// takode koristite try catch

const fetchQuote = async () => {
  try {
    const result = await fetch("https://api.quotable.io/quotes/random");
    const data = await result.json();

    console.log(data);
    console.log(data[0].author, data[0].content);
  } catch (error) {
    console.log(error);
  }
};

fetchQuote();

// napisite asinhronu funkciju koja fetcha podatke sa apija:
// https://api.quotable.io/quotes
// nakon fetchanja prikazite podakte u konzoli

// napisitie funkciju u koju saljete podatke sa ovog apija
// ta funkcija vraca objekat gde je tekst qutoe najduzi.
// content property

// napisite funkciju koja vraca najkraci quote

const getLongestQuote = (data) => {
  let longestQuote;

  data.results.forEach((element, index) => {
    if (!longestQuote) {
      longestQuote = element;
    }

    if (longestQuote) {
      if (longestQuote.content.length < element.content.length) {
        longestQuote = element;
      }
    }
  });

  return longestQuote;
};

const getShortestQuote = (data) => {
  let shortestQuote;

  data.results.forEach((element, index) => {
    if (!shortestQuote) {
      shortestQuote = element;
    }

    if (shortestQuote) {
      if (shortestQuote.content.length > element.content.length) {
        shortestQuote = element;
      }
    }
  });

  return shortestQuote;
};

const fetchQuotes = async () => {
  try {
    const result = await fetch("https://api.quotable.io/quotes");
    const data = await result.json();

    console.log(data);
    console.log("longest quote", getLongestQuote(data));
    console.log("shortest quote", getShortestQuote(data));
  } catch (error) {
    console.log(error);
  }
};

fetchQuotes();

// napraviti fetch asinhronu funkciju koja koristi query parametar na sledecem apiju:
// https://api.quotable.io/quotes
// koristi query parametar author. I onda prikazuje na konzoli fechane quotove
