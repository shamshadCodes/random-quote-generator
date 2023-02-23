const endpoint = "https://api.quotable.io/random";

function getQuote() {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const quoteText = data.content;
      const quoteAuthor = data.author || "Unknown";
      document.getElementById("text").textContent = quoteText;
      document.getElementById("author").textContent = `- ${quoteAuthor}`;
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}&hashtags=quotes`;
      document.getElementById("tweet-quote").href = tweetUrl;
    })
    .catch(error => {
      console.error(error);
    });
}

document.getElementById("new-quote").addEventListener("click", getQuote);

getQuote();
