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
    year: "1940",
  },
  {
    quote:
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    source: "Bill Keane",
    citation: "The Family Circus newspaper cartoon",
    year: "1994",
  },
  {
    quote:"You cant unring a doorbell",
    source: "Ancient Proverb",
  },
];

/***
 * `getRandomQuote` function
 ***/
let getRandomQuote = () => {
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
 ***/

function printQuote() {
  // randomQuote calls the getRandomQuote() function and prints to the page. Depending on the quote properties, it will edit the text to show the quote in proper format.
  const randomQuote = getRandomQuote(quotes)
  //Instead of if statement, I used JS ternary operators to add to and format the HTML string
  // if randomQuote has a 'citation' or 'year' property exists, it adds additional HTML and class names to the existing interpolation and a closed the statement with a '<p>' tag. 
  const htmlString = `
  <p class="quote">${randomQuote.quote}</p> 
  <p class="source">${randomQuote.source} 
  ${randomQuote.hasOwnProperty('citation') ? `<span class="citation">${randomQuote.citation}</span>` : ''  }
  ${randomQuote.hasOwnProperty('year') ? ` <span class="year">${randomQuote.year}</span>` : ''  }
  </p>
  `
  console.log(htmlString)

  // made a quoteBox variable to select the element with an ID of 'quote-box' and make it dynamic. Then, I used the variable to set the inner HTML to the contents of HTMLString
  let quoteBox = document.getElementById('quote-box')
  quoteBox.innerHTML = htmlString

}
printQuote()
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false)
