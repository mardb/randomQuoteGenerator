/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

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
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    source: "Albert Einstein",
    citation: "LIFE MAGAZINE",
    year: "1955",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    source: "Wayne Gretzky",
    citation: "AARP Taxes 69: 717",
    year: "1969",
  },
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    source: "Gilbert Fowler",
    citation: "",
    year: "1940",
  },
  {
    quote:
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    source: "Bill Keane",
    citation: "The Family Circus newspaper cartoon",
    year: "1994",
  },
];

/***
 * `getRandomQuote` function
 ***/
let getRandomQuote = () => {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  let randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  // 2. Use the random number variable and bracket notation
  // to grab a random object from the `quotes` array, and
  // store it in a variable
  let randomQuotes = quotes[randomNumber];
  // 3. Return the variable storing the random quote object
  return randomQuotes;
};
console.log(getRandomQuote());
/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);

//test
// console.log(quotes);
console.log("im alive and breathing!");
