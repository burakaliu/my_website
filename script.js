
document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const quote = document.getElementById("quote");
    const button = document.getElementById("quote-button");
    const cite = document.getElementById("quote-cite");
    const footer = document.getElementById("quote-author");
  
    async function updateQuote() {
      // Fetch a random quote from the Quotable API
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        // Update DOM elements
        quote.textContent = data.content;
        //cite.textContent = data.author;
        footer.textContent = ("- " + data.author);
      } else {
        quote.textContent = "An error occured";
        console.log(data);
      }
    }
  
    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);
  
    // call updateQuote once when page loads
    updateQuote();
  });
  