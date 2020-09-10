'use strict';

// const str = 'adiDas nike';
// const arr = 'hello reebook';

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf('ke'));
// console.log(arr.slice(6));
// console.log(arr.substr(6, 7));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// let num = 230;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
//     console.log(num);
// }

// showFirstMessage('hello world');
// console.log(num);


// let numberOfFilms;
 
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true
// };



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++  ){
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//               if (a != null && b != null && a != '' && b != '' && a.length < 50){
//                   personalMovieDB.movies[a] = b; 
//                   console.log('Добавляем в БД');
//               } else {
//                   console.log('Ошибка введите данные');
//                   i--;
//               }    
              
//     }
// }

// // rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Мало смотрел кино');
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
//         console.log('Нормально смотрел кино');   
//     } else if (personalMovieDB.count >= 30)  {
//         console.log('Много смотрел кино');
//     } else {
//         console.log('Что-то не так');
//     }
// }

// // detectPersonalLevel ();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();

// showMyDB(personalMovieDB.privat);
// console.log(personalMovieDB);

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

//  const options = {
//     name: 'test',
//     width: 1024,
//     heigth: 720,
//     colors: {
//         border: 'red',
//         bg: 'green'
//     },
//     keep: {
//         loopKit: 8000,
//     },
//     httpUrl: 'ya.ru',

//     makeTest: function() {
//         console.log('Test');
//     }
    
//  };

//  options.makeTest();
//  console.log(Object.keys(options).length);

//  let counter = 0;

//  for (let key in options) {
//      if (typeof(options[key]) === 'object') {
//          for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);   
           
//          }
//      } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]} `);
//         counter++;
//      }
//  }
//  console.log(counter);