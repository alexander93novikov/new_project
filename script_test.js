'use strict';

const numberOFFilms = +prompt("Сколько фильмов вы уже посморели", "");


const personalMovieDB = {
    count: numberOFFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из просмотренных фильмов?", ""), 
      b = prompt("На сколкьо оцените его?", ""),
      c = prompt("Один из просмотренных фильмов?", ""),
      d = prompt("На сколько оцениете его?", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);