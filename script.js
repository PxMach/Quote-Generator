const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://zenquotes.io/api/random";

async function getquote(url) {
   const response = await fetch(url);
   const data = await response.json();
   console.log(data);
   quote.innerHTML = data.content;
   author.innerHTML = data.author;
}

function tweet() {
   window.open(
      "https://twitter.com/intent/tweet?text=" +
         quote.innerHTML +
         "---- by " +
         author.innerHTML,
      "Tweet window",
      "width=600",
      "heigth=300"
   );
}

getquote(api_url);
