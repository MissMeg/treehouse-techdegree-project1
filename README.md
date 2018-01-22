  _______    _______   _______     _________    ____________    ____________    _____________        ______
 |       |  |       | |       |        |       |               |            |         |             /      |
 |       |  |       | |       |        |       |               |            |         |            /       |
 |_______|  |_______| |       |        |       |               |                      |                    |
 |          | \       |       |        |       |---------      |                      |                    |
 |          |  \      |       |        |       |               |                      |                    |
 |          |   \     |       |        |       |               |            |         |                    |
 |          |    \    |_______|  |_____|       |____________   |____________|         |             _______|_______    


--------------------------------------------------------------------------------------------------------------------

## Project by: Megan Roberts
## Tech Dregree Track: Fullstack JavaScript
## Project Title: Random Quote Generator
## Project Requirements:
```
    1) Create an array of JavaScript objects to hold the data for your quotes. Name the array quotes. The quotes array should be accessible in the global scope.
    2) Each quote object in the quotes array should have the following properties:
        a. A quote property which contains a string: the text of the quote that will be displayed on the page.
        b. A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb.”
            - An optional citation property which contains a string identifying where the quote comes from, like a speech or publication. For example, "Famous Anonymous Jokes." If there is no known publication, do not include this property on the object.
            - An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
    3) Create a function named getRandomQuote which:
        a. selects a random quote object from the quotes array
        b. returns the randomly selected quote object
    4) Create a function named printQuote which follows these rules:
        a. printQuote calls the getRandomQuote function and stores the returned quote object in a variable
        b. printQuote constructs a string containing the different properties of the quote object using the following HTML template:
            <!--<p class="quote"> [quote here] </p>-->
            <!--<p class="source"> [source here]-->
            <!--  <span class="citation"> [citation here] </span>-->
            <!--  <span class="year"> [year here] </span>-->
            <!--</p>-->
        c. printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
        d. printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
    5) Add comments to your code.
Exceeds Expectations Requirements:
    1) Add more properties to the quote object. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
    2) When the quote changes, randomly change the background color of the page.
    3) Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the “Additional Resources” section).
```
## Project Description:
I will be completing all requirements including the exceeding expectations requirements with my project submission. The random quote generator that I am creating will include popular video game quotes. The "author" of the quote will be the character that spoke the quote in the game, the citation property will be the name of the game, and the year property will be the release date for the game.
For the exceeds expectations requirement, I will include the game's genre(s). 
*Since I will have a "citation" and "year" for all of my quotes, I will add a few quotes with missing info to prove 4.c works for the project requirements. 