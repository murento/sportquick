const images = [  'https://example.com/image1.jpg',  'https://example.com/image2.jpg',  'https://example.com/image3.jpg'];

const slideshow = document.querySelector('.slideshow');
const img = slideshow.querySelector('img');
let i = 0;

function changeImage() {
  i++;
  if (i >= images.length) {
    i = 0;
  }
  img.src = images[i];
  img.style.opacity = 1;
  setTimeout(() => {
    img.style.opacity = 0;
  }, 5000);
  setTimeout(changeImage, 6000);
}

changeImage();

const token = "73eeb2564c894fd88916f0e6b382e8b5";
const options = {
  headers: {
    "X-Auth-Token": token
  }
};


const API_URL = 'https://api.football-data.org/v2/news';
const API_TOKEN = '73eeb2564c894fd88916f0e6b382e8b5';

// Fetch the latest football news from the API endpoint
fetch(API_URL, {
  headers: { 'X-Auth-Token': API_TOKEN }
})
.then(response => response.json())
.then(data => {
  // Display the news headlines and summaries in a list
  const newsList = document.getElementById('news-list');
  data.articles.forEach(article => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    h3.textContent = article.title;
    const p = document.createElement('p');
    p.textContent = article.description;
    li.appendChild(h3);
    li.appendChild(p);
    newsList.appendChild(li);
  });
})
.catch(error => console.error(error));


fetch('https://api.football-data.org/v2/news', options)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  })
  .then(jsonResponse => {
    console.log(jsonResponse); // log the JSON response to the console
    // process the JSON response and update your website accordingly
  }
  );


  const headers = {
    'X-Auth-Token': '73eeb2564c894fd88916f0e6b382e8b5'
  };
  
  fetch('https://api.football-data.org/v2/competitions/CL/matches', { headers })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  
