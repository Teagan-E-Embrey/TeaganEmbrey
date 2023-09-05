/* script.js */

// declare variables
const articles = document.querySelector('#articles');
const api_key = 'uCmSrrgfCKMqqe9eXdgSEzp8JkCkfWjn';
let button_id = 'home';
let url = '';
// create arrow function to fetch data from api and display articles in bootstrap cards
const getArticles = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // create loop to iterate through data and display articles
    for (let i = 0; i < data.results.length; i++) {
        // create bootstrap card
        const card = document.createElement('div');
        card.classList.add('col-3');
        card.classList.add('card');
        card.classList.add('m-3');
        card.classList.add('shadow-sm');
        // create card body
        const card_body = document.createElement('div');
        card_body.classList.add('card-body');
        // create card title
        const card_title = document.createElement('h3');
        card_title.classList.add('card-title');
        card_title.innerHTML = data.results[i].title;
        // create card image
        const card_image = document.createElement('img');
        card_image.classList.add('card-img-top');
        card_image.src = data.results[i].multimedia[0].url;
        card_image.alt = data.results[i].multimedia[0].caption;
        // create card text
        const card_text = document.createElement('p');
        card_text.classList.add('card-text');
        card_text.innerHTML = data.results[i].abstract;
        // create card link
        const card_link = document.createElement('a');
        card_link.classList.add('btn');
        card_link.classList.add('stretched-link');
        card_link.href = data.results[i].url;
        card_link.innerHTML = 'Read More';
        // append card title, card text, and card link to card body
        card_body.appendChild(card_title);
        card_body.appendChild(card_image);
        card_body.appendChild(card_text);
        card_body.appendChild(card_link);
        // append card body to card
        card.appendChild(card_body);
        // append card to articles
        articles.appendChild(card);
    }
}

// call getArticles function default to home after page loads
window.onload = () => {
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`;
    getArticles();
}

// add event listener to buttons
document.querySelector('#home').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'home'; // set button id to home
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to home
    getArticles();
});

document.querySelector('#arts').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'arts'; // set button id to arts
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to arts
    getArticles();
});

document.querySelector('#business').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'business'; // set button id to business
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to business
    getArticles();
});

document.querySelector('#dining').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'dining'; // set button id to dining
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to dining
    getArticles();
});

document.querySelector('#fashion').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'fashion'; // set button id to fashion
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to fashion
    getArticles();
});

document.querySelector('#health').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'health';  // set button id to health
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to health
    getArticles();
});

document.querySelector('#opinion').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'opinion'; // set button id to opinion
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to opinion
    getArticles();
});

document.querySelector('#politics').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'politics'; // set button id to politics
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to politics
    getArticles();
});

document.querySelector('#realestate').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'realestate'; // set button id to realestate
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to realestate
    getArticles();
});

document.querySelector('#science').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'science'; // set button id to science
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to science
    getArticles();
});

document.querySelector('#sports').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'sports'; // set button id to sports
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to sports
    getArticles();
});

document.querySelector('#technology').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'technology'; // set button id to technology
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to technology
    getArticles();
});

document.querySelector('#world').addEventListener('click', () => {
    // clear articles
    articles.innerHTML = '';
    button_id = 'world'; // set button id to world
    url = `https://api.nytimes.com/svc/topstories/v2/${button_id}.json?api-key=${api_key}`; // set url to world
    getArticles();
});

