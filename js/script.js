'use strict';

const displaySection = document.querySelector('.display-section');
const searchButton = document.getElementById('search');
const searchInput = document.getElementById('searchInput');


searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    displaySection.classList.add('show');
    getSearchResults(searchInput.value);
})



const get = (url) => {
    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        })
}

const getSearchResults = (query) => {
    displaySection.innerHTML = "";
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API.key}&language=en-US&query=${query}`;
    get(url)
        .then(res => {
            res.results.forEach(item => {
                const movieResult = document.createElement('div');
                movieResult.classList.add('movie-result');

                const imageDiv = document.createElement('div');
                imageDiv.classList.add('image-div');

                const contentDiv = document.createElement('div');
                contentDiv.classList.add('result-content');

                const movieTitle = document.createElement('h2');
                movieTitle.innerText = item.title;

                const releaseDate = document.createElement('p');
                releaseDate.innerText = `Release Date: ${item.release_date}`;

                const image = document.createElement('img');
                let posterPathUrl;
                if (item.poster_path) {
                    image.setAttribute('src', `http://image.tmdb.org/t/p/w185${item.poster_path}`);
                }

                const rating = document.createElement('div');
                rating.classList.add('rating');
                rating.innerHTML = ratingDisplay(item.vote_average);

                const overview = document.createElement('p');
                overview.classList.add('overview');
                overview.innerText = item.overview;


                imageDiv.appendChild(image);
                movieResult.appendChild(imageDiv);
                movieResult.appendChild(contentDiv);
                displaySection.appendChild(movieResult);
                contentDiv.appendChild(movieTitle);
                contentDiv.appendChild(releaseDate);
                contentDiv.appendChild(rating);
                contentDiv.appendChild(overview);






                console.log(item);
            });
        })
}



const ratingDisplay = (rating) => {
    const star = '<i class="fas fa-star"></i>';
    const halfStar = '<i class="fas fa-star-half-alt"></i>';
    const emptyStar = '<i class="far fa-star"></i>';
    console.log(rating);
    switch (true) {
        case rating === 10:
            return star.repeat(5);
        case rating < 10 && rating > 8:
            return star.repeat(4) + halfStar;
        case rating === 8:
            return star.repeat(4) + emptyStar;
        case rating < 8 && rating > 6:
            return star.repeat(3) + halfStar + emptyStar;
        case rating === 6:
            return star.repeat(3) + emptyStar.repeat(2);
        case rating < 6 && rating > 4:
            return star.repeat(2) + halfStar + emptyStar.repeat(2);
        case rating === 4:
            return star.repeat(2) + emptyStar.repeat(3);
        case rating < 4 && rating > 2:
            return star + halfStar + emptyStar.repeat(3);
        case rating === 2:
            return star + emptyStar.repeat(4);
        case rating < 2 && rating > 0:
            return halfStar + emptyStar.repeat(4);
        default:
            return 'No Rating';


    }
}
