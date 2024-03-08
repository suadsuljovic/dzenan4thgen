// fetching and DOM manipulation practice

const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

fetchQuote().then((data) => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `<div class="card">
  <p class="author">Author: <span id="authorText">${data.author}</span></p>
  <p class="content" id="contentText">${data.content}</p>
</div>`;
});

// imate div sa id content2. U njega treba da prikazete sve citate
// koje dobijete sa apija: https://api.quotable.io/quotes?page=1
const fetchQuotes = async () => {
  try {
    const response = await fetch("https://api.quotable.io/quotes?page=1");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

fetchQuotes().then((data) => {
  const contentDiv = document.getElementById("content2");
  //   let quotes = "";

  //   data.forEach((quote) => {
  //     quotes += `<div class="card">
  //     <p class="author">Author: <span id="authorText">${quote.author}</span></p>
  //     <p class="content" id="contentText">${quote.content}</p>
  //   </div>`;
  //   });

  //   contentDiv.innerHTML = quotes;

  const quotes = data
    .map((quote) => {
      return `<div class="card">
            <p class="author">Author: <span id="authorText">${quote.author}</span></p>
            <p class="content" id="contentText">${quote.content}</p>
           </div>`;
    })
    .join("");

  contentDiv.innerHTML = quotes;
});

// napravicete content div 3; gde ce te prikazati sve quotove sa sledeceg
// api poziva: https://api.quotable.io/search/quotes?query=technology

const fetchQuotes3 = async () => {
  try {
    const input = document.getElementById("search");
    const response = await fetch(
      `https://api.quotable.io/search/quotes?query=${input.value}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const showQuotes = (data) => {
  const contentDiv = document.getElementById("content3");

  const quotes = data
    .map((quote) => {
      return `<div class="card">
              <p class="author">Author: <span id="authorText">${quote.author}</span></p>
              <p class="content" id="contentText">${quote.content}</p>
             </div>`;
    })
    .join("");

  contentDiv.innerHTML = quotes;
};

const searchButton = document.getElementById("searchClick");

searchButton.addEventListener("click", () => {
  fetchQuotes3().then(showQuotes);
});

// napravite da se search pokrece na klik enter dugmeta na tastaturi
