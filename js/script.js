'use strict';

const displaySection = document.querySelector('.display-section');




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
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API.key}&language=en-US&query=${query}`;
    get(url)
        .then(res => {
            res.results.forEach(item => {
                const imageDiv = document.createElement('div');
                imageDiv.classList.add('image-div');
                const image = document.createElement('img');
                let posterPathUrl;
                if (item.poster_path) {
                    image.setAttribute('src', `http://image.tmdb.org/t/p/w185${item.poster_path}`);
                }
                imageDiv.appendChild(image);
                displaySection.appendChild(imageDiv);




                //console.log(item.title, item.release_date);
            });
        })
}


getSearchResults('clerks');