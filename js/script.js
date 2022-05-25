/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/
let quotes = [
  {
    quote:
      "  Life is what happens to you while you’re busy making other plans.",
    source: " Allen Saunders",
    citation: "Readers Digest",
    year: "1957",
    tags:['life', ' lifestyle', ' mindfulness']
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    source: "Albert Einstein",
    citation: "LIFE MAGAZINE",
    year: "1955",
    tags: ["business", " life", " maturity"],
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    source: "Wayne Gretzky",
    citation: "AARP Taxes 69: 717",
    year: "1969",
    tags: ["business", " life", " sports"],
  },
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    source: "Gilbert Fowler",
    year: "1940",
    tags: ["business", " life", " gratitude"],
  },
  {
    quote:
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    source: "Bill Keane",
    citation: "The Family Circus newspaper cartoon",
    year: "1994",
    tags: ["life", " gratitude"],
  },
  {
    quote: "You cant unring a doorbell",
    source: "Ancient Proverb",
    tags: ["business", " life", " opportunity"],
  },
];


let body = document.getElementById("body");
let loadBtn = document.getElementById("load-quote");
/***
 * getRandomQuote()
 * generates a random number between zero and the last index in the `quotes` array
 * @return {object} a random object from the quotes array.
 ***/
const getRandomQuote = () => {
  // generates a random number between zero and the last index in the `quotes` array
  let randomNumber = Math.floor(Math.random() * quotes.length);
  // grabs a random object from the `quotes` array
  let randomQuotes = quotes[randomNumber];
  // Return a random quote object
  return randomQuotes;
};
getRandomQuote();
/***
 * `printQuote` function
 *
 ***/
// randomQuote calls the getRandomQuote() function and prints to the page. Depending on the quote properties, it will edit the text to show the quote in proper format.
const printQuote = () => {
  const randomQuote = getRandomQuote();

  //Instead of if statement, I used JS ternary operators to add to and format the HTML string
  //if randomQuote has a 'citation' or 'year' property exists, it adds additional HTML and class names to the existing interpolation and a closed the statement with a '<p>' tag.
  const htmlString = `
  <p class="quote">${randomQuote.quote}</p> 
  <p class="source">${randomQuote.source} 
  ${
    randomQuote.hasOwnProperty("citation")
      ? `<span class="citation">${randomQuote.citation}</span>`
      : ""
  }
  ${
    randomQuote.hasOwnProperty("year")
      ? ` <span class="year">${randomQuote.year}</span>`
      : ""
  }
  ${
    randomQuote.hasOwnProperty("tags")
      ? ` <span class="year">${randomQuote.tags}</span>`
      : ""
  }
  </p>
  `;
  // quoteBox variable selects the element with an ID of 'quote-box' and make it dynamic. Then, I used the variable to set the inner HTML to the contents of HTMLString
  let quoteBox = document.getElementById("quote-box");
  quoteBox.innerHTML = htmlString;
};
printQuote();

/***
 * `randomColor()` function
 ***/
 //returns a random number between 0 and 256 and assigns it to r, g, and b. Then the values are assigned to color variable and returned to create an rgb() format.

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
};
randomColor();
//randomColor() is applied as a background when users clicks the "Show Another Button" button
loadBtn.addEventListener("click", () => {
body.style.background = randomColor();
});

/***
 * `interval()` function
 ***/
//interval() calls the printQuote()  function and to display a different quote and assigns a random color to the screen every 10 seconds

const interval = () => {
  return setInterval(() => {
    printQuote()
      body.style.background = randomColor();
  }, 10000);
}
// reset function allows the interval timer to reset when the "Show Another Button" button is clicked. The 10 seconds start over anytime the button is clicked. 
const reset = () => {
  clearInterval(int);
  int = interval()
}
let int = interval();

loadBtn.addEventListener("click", reset);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
