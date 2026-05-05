let quotes = [
    {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    // Add 4-5 more quotes here
    {text: "Man has gone out to explore other worlds and other civilizations without having explored his own labyrinth of dark passages and secret chambers, and without finding what lies behind doorways that he himself has sealed.", author: "Stanisław Lem, Solaris."},
    {text: "For mankind to achieve greatness they shell Unify as One.", author: "Unknown"},
    {text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"}

];

function displayRandomQuote() {
    // Make the button work when clicked
document.getElementById("new-quote-btn").addEventListener("click", displayRandomQuote);

    // Your code will go here to:

    // 1. Pick a random number

    // 2. Get a quote from the array

    // 3. Display it on the page
    function displayRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomNumber];
    let quoteElement = document.getElementById("quote-text");
    quoteElement.innerText = '"' + selectedQuote.text + '" - ' + selectedQuote.author;
}

}

function submitUserQuote() {
    let userName = document.getElementById("user-name-input").value;
    let userQuote = document.getElementById("user-quote-input").value;
    
    // Check if the quote field has text
    if (userQuote.trim() !== "") {
        // Create a new quote object
        let newQuote = {
            text: userQuote,
            author: userName || "Anonymous"
        };
        
        // Add it to the quotes array
        quotes.push(newQuote);
        
        // Clear the input fields
        document.getElementById("user-name-input").value = "";
        document.getElementById("user-quote-input").value = "";
        
        alert("Quote added successfully!");
    } else {
        alert("Please enter a quote!");
    }
}

// Step 3 & 5: Event listeners (put these at the end)
document.getElementById("new-quote-btn").addEventListener("click", displayRandomQuote);
document.getElementById("submit-quote-btn").addEventListener("click", submitUserQuote);