import cardRender from "../hbs/cardRender.hbs";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderMoviesSet } from './creadCard';

const form = document.querySelector('.search-form');
const seachBtn = document.querySelector('[name="search-btn"]');
const input = document.querySelector('[name="search"]');
const moviesSet = document.querySelector('.section-movies__set')


function fetchMovies(name) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=2cf91cf1fed5026ae9524dc97ad33068&query=${name}&language=en-US`)
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((error) => {
            return console.log(error);
    })
};

const movies = input.value.trim().toLowerCase();
console.log(movies);


function seachMovies(e) {
    e.preventDefault();

    const movies = input.value.trim().toLowerCase();
    console.log(movies)
    if (movies === '') {
      return
    }

    if (movies.length >= 1) {
        moviesSet.innerHTML = '';

      
        fetchMovies(movies)
            .then(renderMoviesSet)
            .catch(error => {
                
                Notify.failure('Oops, there is no country with that name')
            });
        
    } 


}



form.addEventListener("submit", seachMovies)
