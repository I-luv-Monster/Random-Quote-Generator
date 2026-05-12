// Array to store all quotes - each quote is an object with text and author
let quotes = [
    {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {text: "Man has gone out to explore other worlds and other civilizations without having explored his own labyrinth of dark passages and secret chambers, and without finding what lies behind doorways that he himself has sealed.", author: "Stanisław Lem, Solaris."},
    {text: "For mankind to achieve greatness they shell Unify as One.", author: "Shadow"},
    {text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"}
];

// Function that picks and displays a random quote from the array
function displayRandomQuote() {
    // Generate a random number between 0 and the number of quotes
    let randomNumber = Math.floor(Math.random() * quotes.length);
    
    // Get the quote object at that random position in the array
    let selectedQuote = quotes[randomNumber];
    
    // Find the quote display element and update its text to show the quote and author
    document.getElementById("quote-text").innerText = '"' + selectedQuote.text + '" - ' + selectedQuote.author;
}

// Function that adds a user-submitted quote to the collection
function submitUserQuote() {
    // Get the text the user typed in the name input field
    let userName = document.getElementById("user-name-input").value;
    
    // Get the text the user typed in the quote input field
    let userQuote = document.getElementById("user-quote-input").value;
    
    // Check if the user actually typed a quote (not just empty spaces)
    if (userQuote.trim() !== "") {
        // Add the new quote object to the end of the quotes array (if no name, use "Anonymous")
        quotes.push({text: userQuote, author: userName || "Anonymous"});
        
        // Convert the updated quotes array to text and save it permanently to local storage
        localStorage.setItem("savedQuotes", JSON.stringify(quotes));
        
        // Clear both input fields so they're empty for next time
        document.getElementById("user-name-input").value = "";
        document.getElementById("user-quote-input").value = "";
        
        // Show a popup message confirming the quote was saved
        alert("Quote saved permanently!");
    } else {
        // If the quote field was empty, show an error message
        alert("Please enter a quote!");
    }
}

// Try to get saved quotes from local storage (returns text or null)
let savedQuotes = localStorage.getItem("savedQuotes");

// If saved quotes exist in storage, convert the text back into an array and replace the current quotes
if (savedQuotes) {
    quotes = JSON.parse(savedQuotes);
}

// When the "Get New Quote" button is clicked, run the displayRandomQuote function
document.getElementById("new-quote-btn").addEventListener("click", displayRandomQuote);

// When the "Submit Quote" button is clicked, run the submitUserQuote function
document.getElementById("submit-quote-btn").addEventListener("click", submitUserQuote);