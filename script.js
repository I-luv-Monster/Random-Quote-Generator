// Array to store all quotes - each quote is an object with text and author
let quotes = [
    {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {text: "Man has gone out to explore other worlds and other civilizations without having explored his own labyrinth of dark passages and secret chambers, and without finding what lies behind doorways that he himself has sealed.", author: "Stanisław Lem, Solaris."},
    {text: "For mankind to achieve greatness they shell Unify as One.", author: "Unknown"},
    {text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"}
];

// Function that picks and displays a random quote from the array
function displayRandomQuote() {
    // Generate a random number between 0 and the number of quotes
    let randomNumber = Math.floor(Math.random() * quotes.length);
    
    // Get the quote object at that random position in the array
    let selectedQuote = quotes[randomNumber];
    
    // Find the HTML element where the quote will be displayed
    let quoteElement = document.getElementById("quote-text");
    
    // Update the element's text to show the quote and author
    quoteElement.innerText = '"' + selectedQuote.text + '" - ' + selectedQuote.author;
    
    // Create a new button element for deleting the quote
    let deleteBtn = document.createElement("button");
    
    // Set the text that appears on the delete button
    deleteBtn.innerText = "Delete This Quote";
    
    // Style the delete button - add spacing above it
    deleteBtn.style.marginTop = "15px";
    
    // Style the delete button - add padding inside it
    deleteBtn.style.padding = "8px 15px";
    
    // Style the delete button - make it red
    deleteBtn.style.backgroundColor = "#e74c3c";
    
    // Style the delete button - make text white
    deleteBtn.style.color = "white";
    
    // Style the delete button - remove default border
    deleteBtn.style.border = "none";
    
    // Style the delete button - round the corners
    deleteBtn.style.borderRadius = "5px";
    
    // Style the delete button - show pointer cursor on hover
    deleteBtn.style.cursor = "pointer";
    
    // Add a click event to the delete button that calls deleteQuote with the quote's position
    deleteBtn.addEventListener("click", function() {
        deleteQuote(randomNumber);
    });
    
    // Find the quote display container on the page
    let quoteDisplay = document.querySelector(".quote-display");
    
    // Look for any existing delete button from a previous quote
    let oldBtn = document.querySelector(".quote-display button");
    
    // If an old delete button exists, remove it from the page
    if (oldBtn) {
        oldBtn.remove();
    }
    
    // Add the new delete button to the quote display area
    quoteDisplay.appendChild(deleteBtn);
}

// Function that removes a quote from the array and updates storage
function deleteQuote(index) {
    // Remove 1 quote from the array at the given index position
    quotes.splice(index, 1);
    
    // Convert the updated quotes array to text and save it to local storage
    localStorage.setItem("savedQuotes", JSON.stringify(quotes));
    
    // Change the quote display to show a deletion confirmation message
    document.getElementById("quote-text").innerText = "Quote deleted! Click to get another quote.";
    
    // Find the delete button on the page
    let oldBtn = document.querySelector(".quote-display button");
    
    // If the delete button exists, remove it since there's no quote to delete anymore
    if (oldBtn) {
        oldBtn.remove();
    }
}

// Function that adds a user-submitted quote to the collection
function submitUserQuote() {
    // Get the text the user typed in the name input field
    let userName = document.getElementById("user-name-input").value;
    
    // Get the text the user typed in the quote input field
    let userQuote = document.getElementById("user-quote-input").value;
    
    // Check if the user actually typed a quote (not just empty spaces)
    if (userQuote.trim() !== "") {
        // Create a new quote object with the user's input
        // If no name was entered, use "Anonymous" as the author
        let newQuote = {
            text: userQuote,
            author: userName || "Anonymous"
        };
        
        // Add the new quote object to the end of the quotes array
        quotes.push(newQuote);
        
        // Convert the updated quotes array to text and save it permanently
        localStorage.setItem("savedQuotes", JSON.stringify(quotes));
        
        // Clear the name input field so it's empty for next time
        document.getElementById("user-name-input").value = "";
        
        // Clear the quote input field so it's empty for next time
        document.getElementById("user-quote-input").value = "";
        
        // Show a popup message confirming the quote was saved
        alert("Quote saved permanently!");
    } else {
        // If the quote field was empty, show an error message
        alert("Please enter a quote!");
    }
}

// Function that loads previously saved quotes from local storage when the page opens
function loadSavedQuotes() {
    // Try to get saved quotes from local storage (returns text or null)
    let savedQuotes = localStorage.getItem("savedQuotes");
    
    // If saved quotes exist in storage
    if (savedQuotes) {
        // Convert the text back into an array and replace the current quotes array
        quotes = JSON.parse(savedQuotes);
    }
}

// Call the function to load any saved quotes when the page first loads
loadSavedQuotes();

// When the "Get New Quote" button is clicked, run the displayRandomQuote function
document.getElementById("new-quote-btn").addEventListener("click", displayRandomQuote);

// When the "Submit Quote" button is clicked, run the submitUserQuote function
document.getElementById("submit-quote-btn").addEventListener("click", submitUserQuote);