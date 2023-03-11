const URL = 'https://api.breakingbadquotes.xyz/v1/quotes';
const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quoteAuthor');

fetch(URL)
    .then((res) => res.json())
    .then((res) => {
        quote.textContent = res[0].quote;
        quoteAuthor.textContent = res[0].author;
    });