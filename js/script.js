// Random Quote Generator Function

function generateQuote() {
    const quotes = [
        {
            quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
            author: "Michael Scott"
        },
        {
            quote: "I am fast. To give you a reference point, I'm somewhere between a snake and a mongoose. And a panther.",
            author: "Dwight Schrute"
        },
        {
            quote: "I just want to lie on the beach and eat hot dogs. Thats all Ive ever wanted.",
            author: "Kevin Malone"
        }
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);

document.getElementById("quotation").innerHTML = quotes
[arrayIndex].quote;
document.getElementById("author").innerHTML = quotes
[arrayIndex].author;

}

window.onload = function () {
    generateQuote();
  document.getElementById("generate").addEventListener('click', generateQuote);
}