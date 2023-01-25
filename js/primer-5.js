//  пошук значкння через змінну
// const playlist = {
//     name: 'мій лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// console.log(playlist);


// const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);
// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

// <input name = 'color' value ='tomato' >
// треба щоб ключ був 'color'
// значення було   'tomato'

// const inputName = 'color';
// const inputValue = 'tomato';
// const colorPickerData = {
//     inputName: inputValue,
//     // дивись різницю
//     [inputName]: inputValue,
// };

// console.log(colorPickerData);


// // додавання в об'єкт
// const playlist = {
//     name: 'мій лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }
// playlist.age = 5;
// // перевизначеня значення ключа
// playlist.rating = 10;

// console.log(playlist);

// // масиви і об'єки не рівні

// console.log([] === []);
// console.log({} === {});

// const a = { x: 1, y: 2, };
// const b = a;
// console.log(a === b);

// a.c = 100;
// // можливо міняти значення через b
// a.hello = 150;
// b.hello = 200;
// console.log(a);
// console.log(b);

//  великий секрет . масив це теж об'єкт

// const a = [1, 2, 3];
// a.hello = 'tomato';
// console.log(a);


// //  функція теж об'єкт

// const fn = function () {
//     console.log('hello');
// }

// fn.hello = 'tomato';

// console.log(fn);
// console.dir(fn);
// console.dir(fn.hello);

// const a = [1, 2, 3];
// a.push(4);
// console.log(a);


//  додавання в обєкт функціі Як було.
// const playlist = {
//     name: 'мій лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     getName: function (a) {
//         console.log('це функція:', a);
//     },
// };

// console.log(playlist);
// playlist.getName(5);

// Стало  і зветься метод об'єкта
// const playlist = {
//     name: 'мій лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     getName (a) {
//         console.log('це функція:', a);
//     },
// };

// console.log(playlist);
// playlist.getName(5);

//   зміна імені

// const playlist = {
//     name: 'мій лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     changeName(newName) {
//         // усі ключі ізначення від playlist лежать в this
//         console.log('this в середині changeName:', this);
        
//         this.name = newName;

//     },
// };


// playlist.changeName('Новa назва');
// console.log(playlist);




// // додавання трека
// //  цей метод поганий
// // не треба зберігати кількість треків в
// // самому плейлисті

// const playlist = {
//     name: 'мій лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     changeName(newName) {
//         // усі ключі ізначення від playlist лежать в this
//         console.log('this в середині changeName:', this);
        
//         this.name = newName;

//     },

//     addTrack(track) {
//         this.tracks.push(track);
//         // щоб змінилося число треків
//         this.trackCount = this.tracks.length;
//     },
    
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
// };


// playlist.changeName('Новa назва');
// playlist.addTrack('Новий трек');
// playlist.updateRating(4);
// console.log(playlist);



// // повернення через return в функціі в track довжину
// const playlist = {
//     name: 'мій лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     changeName(newName) {
//         // усі ключі ізначення від playlist лежать в this
//         console.log('this в середині changeName:', this);
        
//         this.name = newName;

//     },

//     addTrack(track) {
//         this.tracks.push(track);
        
//     },
    
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     },
// };

// console.log(playlist.getTrackCount());
// playlist.changeName('Новa назва');
// playlist.addTrack('Новий трек');
// playlist.updateRating(4);
// console.log(playlist);
// console.log(playlist.getTrackCount());


//  перебор через   for...of
// const feedback = {
//     good: 5,
//     neutral: 10,
//     dab: 3,
// }
// let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys)

// for (const key of keys) {
//     // console.log(keys)
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);



// // повернення значень
// const feedback = {
//     good: 5,
//     neutral: 10,
//     dab: 3,
// }
// let totalFeedback = 0;

// const values = Object.values(feedback);


// console.log(values);
// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);


// масив обєктів і робота з ними
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// // так додасть тільки ківі
// friends[1].newprop = 555;

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);
//     console.log(friend.name);

//     //  додавання нового ключа і
//     // значення в кожний обєкт
//     // однаковий на кожній ітерації
//     friend.newprop = 555;
// }
// console.table(friends);




// шукаємо друга по імені
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];



// console.table(friends);

// const findFriendByName = function (allFriends, name) {
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.name);
//         console.log(friend.name === name);
//         if (friend.name === name) {
//             return 'Нашли!!!';
//         }
//     }
//     return 'Не знайшли';
// };
// // console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));



// // отримати імена усі
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];



// console.table(friends);




// const getAllName = function (allFriends) {
//     const names = [];
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         names.push(friend.name);
//     }
//     // console.log(name);
//     return names;
// };



// console.log(getAllName(friends));




// // отримати усіх друзів які онлайн
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];



// console.table(friends);

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);
//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }
//     return onlineFriends;
// }
// //  якщо не онлайн if(!friend.online)

// console.log(getOnlineFriends(friends));



// // збудувати два масиви , онлайн і офлайн
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];



// console.table(friends);

// const getFriendsByOnlinesStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     }
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);
//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//         } else {
//             friendsByStatus.offline.push(friend);
//         }
//     }
//     return friendsByStatus;
// }

// console.log(getFriendsByOnlinesStatus(friends));


// //   те саме скорочене
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];



// console.table(friends);

// const getFriendsByOnlinesStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     }
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);
//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue;
//         } 
//         friendsByStatus.offline.push(friend);
        
//     }
//     return friendsByStatus;
// }

// console.log(getFriendsByOnlinesStatus(friends));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const velue = [];
//   for (const product of products) {
//     if(product.name === propName) 
//      velue.push(product); 
//   }

//   return velue;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"));


// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
