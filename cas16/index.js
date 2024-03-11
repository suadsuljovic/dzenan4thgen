// modules and npm
import fetch from "node-fetch";

console.log("I was here");

const fetchQuotes = async () => {
  try {
    const response = await fetch("https://api.quotable.io/quotes?page=1");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

fetchQuotes().then((result) => console.log(result));
