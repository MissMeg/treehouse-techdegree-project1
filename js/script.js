// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Array of video game quotes + tester quotes missing info to check function abilities.
const quotes = [
    {
        quote: "We impose order on the chaos of organic evolution. You exist because we allow it, and you will end because we demand it.",
        source: "Sovereign",
        citation: "Mass Effect",
        year: "2007",
        genre: "Action Role-Playing/Third-Person Shooter"
    },
    {
        quote: "There are no choices. Nothing but a straight line.",
        source: "Max Payne",
        citation: "Max Payne 2",
        year: "2003",
        genre: "Third-Person Shooter"
    },
    {
        quote: "If there is truly evil in this world, it lies within the heart of mankind.",
        source: "Edward D. Morrison"
    },
    {
        quote: "Now we can fight as warriors, hand to hand. It is the basis of all combat only a fool trusts his life to a weapon.",
        source: "Gray Fox",
        citation: "Metal Gear Solid"
    },
    {
        quote: "It is something that grows over time. A true friendship. A feeling in the heart that becomes even stronger over time.",
        source: "Sheik",
        citation: "The Legend of Zelda: Ocarina of Time",
        year: "1998"
    },
    {
        quote: "There’s no use crying over every mistake, you just keep on trying until you run out of cake.",
        source: "Glados",
        year: "2007",
        genre: "Puzzle-Platform Game"
    },
    {
        quote: "Every lie contains the truth, and every truth contains a lie.",
        source: "Shu",
        genre: "1998"
    },
    {
        quote: "I believe love is the only entity that doesn’t change over time.",
        source: "Albert",
        year: "2000"
    },
    {
        quote: "Experience has taught me that wishful thinking only leads to disappointment.",
        source: "The Prince",
        citation: "The Prince of Persia",
        genre: "Cinematic Platformer/Action-Adventure"
    }
    
];

const colors = ['blue', 'green', 'orange', 'yellow', 'black', 'grey', 'purple', 'pink', 'red'];

//Get a randomized quote each time the button is pushed and return the quote object.
function getRandomQuote () {
    let randoNumber = Math.floor((Math.random() * quotes.length));
    return quotes[randoNumber];
}

//Get a randomized color
function getRandomColor () {
    let randoNumber = Math.floor((Math.random() * colors.length));
    return colors[randoNumber];
}

//Print the random quote to the page.
function printQuote () {
    //assigning the new quote to a variable in order to access the object and print to the page
    let chosenQuote = getRandomQuote();
    //setting the start of the html for the quote
    let html = `<p class="quote">${chosenQuote.quote}</p>
                <p class="source"> ${chosenQuote.source}`;
    //created a variable for each additional property option to not repeat the code
    let citation = `<span class="citation">${chosenQuote.citation}</span>`;
    let year = `<span class="year">${chosenQuote.year}</span>`;
    let genre = `<span class="genre">${chosenQuote.genre}</span>`;
    let end = `</p>`;
    let randoColor = Math.floor((Math.random() * 255));
    // checking to see if the quote includes a citation
    if (chosenQuote.citation != undefined) {
        html += citation;
        //the quote does have a citation, now checking if it also has a year
        if (chosenQuote.year != undefined) {
            html += year;
            //the quote has a citation and a year - now checking if it also has a genre and ending the html quote snippet
            if (chosenQuote.genre != undefined) {
                html += genre;
                html += end;
            //the quote has a citation and year but not a genre, so ending the quote snippet
            } else {
                html += end;
            }
        //the quote has a citation but not a year - checking to see if it has a genre
        } else if (chosenQuote.genre != undefined) {
            html += genre;
            html += end;
        //the quote has a citation but no year or genre
        } else {
            html += end;
        }
    //the quote does not have a citation - checking for the year
    } else if (chosenQuote.year != undefined) {
        html += year;
        //the quote does not have a citation, but does have a year - checking if it has a genre    
        if (chosenQuote.genre != undefined) {
            html += genre;
            html += end;
        //the quote doe snot have a citation, but does have a year - it is also missing a genre
        } else {
            html += end;
        }
    //the quote does not have a citation or year - checking if it has a genre
    } else if (chosenQuote.genre != undefined) {
        html += genre;
        html += end;
    //the quote does not have a citation, year, or genre
    } else {
        html += end;
    }
    document.getElementById('quote-box').innerHTML = html;
    document.body.style.backgroundColor = getRandomColor();
}

setInterval(()=> {
    printQuote();
}, 30000);