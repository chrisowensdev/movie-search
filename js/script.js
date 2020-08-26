'use strict';

const searchResults = document.getElementById('searchResults');
const getSearchResults = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API.key}&language=en-US&query=${query}`)
        .then(res => res.json())
        .then(data => console.log(data));
}



const displayResults = (data) => {
    console.log(data)
    // data.results.map(item => {
    //     const result = document.createElement('li');
    //     result.text = item.title;
    //     searchResults.appendChild(result)
    // })
}
console.log(displayResults(getSearchResults('clerks')))