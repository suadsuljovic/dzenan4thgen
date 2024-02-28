// async await es6
// try catch, http,

// async
const asyncFn = async () => {
  const rand = Math.random();

  if (rand > 0.5) {
    console.log("we are in resolve");
    return "resolve";
  } else {
    console.log("we are in reject");
    throw new Error("This is error text");
  }
};

asyncFn()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

const fetchUser = async () => {
  try {
    const result = await fetch("https://randomuser.me/api/");
    const data = await result.json();
    // throw new Error("this message");
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

fetchUser()
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("catch was called");
  });

// http
// internet, iso model, tcp and udp
// http methods
// GET, POST, PUT, DELETE
// GET se korisit za uzimanje podataka, nema body, podatke saljete u urlu
// POST se koristi za slanje podataka, ima body, podatke saljete u bodiju
// PUT se koristi za slanje podataka, ima body, podatke saljete u bodiju
// DELETE se koristi za birasnje podataka

const fetchQuote = async () => {
  try {
    const result = await fetch("https://api.quotable.io/quotes/random");
    const data = await result.json();
    // throw new Error("this message");
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    // throw error;
  }
};

fetchQuote();

// http status codes
// 100 informacioni kodovi
// 200 success kodovi
// 300 redirect kodovif
// 400 client errors
// 500 server errors
