'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++  ){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

          personalMovieDB.movies[a] = b;
          
}

console.log(personalMovieDB);

// let num = 48;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++; 
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++) {
//     if (i ===6) {
//         // break;
//         continue;
//     }
//     console.log(i);
    
// }