// function changeEven(numbers, value) {
//   // Change code below this line
//     const newNumbers = [];
//     numbers.forEach(element => {
//         if (element % 2 === 0) {
//             newNumbers.push(element + value);
//         }
//         newNumbers.push(element);
//     });
//     return newNumbers;
  
//   // Change code above this line
// };
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = changeEven(numbers, 2);


// console.log(doubledNumbers);
// console.log(numbers);

// function changeEven(numbers, value) {
//   // Change code below this line
//     const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 !== 0) {
//         continue;
//       }
//        newNumbers.push(numbers[i] += value);
//     }
//     return newNumbers;
//   // Change code above this line
// }
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] += value);
//       continue;
//     }
//     newArray.push(numbers[i]);
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(newArray);
//  приклад forEach
// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(
//     function (number,index, array) {
//     console.log('number', number);
//     // заміна значень
//     // array[index] = 20;

//     console.log(this);

//     },

//     {a: 5, b: 10},

// );

// console.log(numbers);

// в більшості будемо використовувати тільки так

// numbers.forEach(function (number) {
//     console.log('number', number);
// });

// console.log(numbers);



// metod map()
// const numbers = [5, 10, 15, 20, 25];

// const doubleNums = numbers.map(function (number) {
//     //  при такому значення в новому масиві
//     console.log(number);
//     // якщо повертає
//     // return number * 2;
// });
// // повертає новий масив при такому визові
// // так як нова функція нічого не вертає
// console.log('doubleNums', doubleNums);
// //  при такому значення в старому масиві
// console.log('numbers', numbers);


// повертаємо імена
// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },

// ];

// const playerNames = players.map(player => player.name);

// console.log(' playerNames:', playerNames);

// повернути масив
// const res = players.map(player => {
//     return {
//         name: player.name,
//         online: player.online,
//     };
// });
// console.log('res', res);

// те саме
// const res = players.map(({name, online}) => ({
//     name,
//     online,
// }));
// console.log('res', res);

// зробити копію обєкта
// і збільшити на 10%

// const upatedPlayers = players.map(player => {
//     console.log(player);

//     return {
//         ...player,
//         points: player.points * 1.1,
//     }
// });

// console.table(upatedPlayers);

// робимо новий масив з одним зміненим значенням
// console.table(players);
// const playerIdToUpdate = 'player-3';
// const upatedPlayers = players.map(player => {
//     console.log(player.id);
//     if (playerIdToUpdate === player.id) {
//         console.log('Нашли');
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         }
//     }
        // тут можна змінити орігінальний об'єкт
//     return player
// });
// console.table(upatedPlayers);
// скорочена версія
// console.table(players);
// const playerIdToUpdate = 'player-3';
// const upatedPlayers = players.map(player => {
//     console.log(player.id);
//     // if (playerIdToUpdate === player.id) {
//     //     console.log('Нашли');
//     //     return {
//     //         ...player,
//     //         timePlayed: player.timePlayed + 100,
//     //     }
//     // }

//     // return player

//     return playerIdToUpdate === player.id ?
//         {
//             ...player,
//             timePlayed: player.timePlayed + 100,

//         }
//         : player;
// });
// console.table(upatedPlayers);
// console.table(players);

// const playerIdToUpdate = 'player-3';
// const upatedPlayers = players.map(player =>
//      playerIdToUpdate === player.id ?
//         {...player,
//         timePlayed: player.timePlayed + 100,
//         }
//         : player,
// );
// console.table(upatedPlayers);

// metod filter()

// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter(number => {
//     console.log(number);
//     return number > 10;
// })
// console.log(filteredNumbers);
// скорочено
// const filteredNumbers = numbers.filter(number => number > 10);
// console.log(filteredNumbers);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },

// ];

// const onlinePlayers = players.filter(player => player.online);
// // console.table(onlinePlayers);
// // ті що не онлайн
// const offlinePlayers = players.filter(player => !player.online);
// // console.table(offlinePlayers);
// // ті що більші за 150
// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// console.table(hardcorePlayers);

// // знаходить унікальні імена

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
// console.log(uniqueGenres)
//   мона так
// const allGenres = books.flatMap(book => book.genres).filter((genre, index, array) => array.indexOf(genre) === index);
// console.log(allGenres);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const getUsersWithEyeColor = (users, color) => {
//    return users.filter(user => user.eyeColor === color);

// };

// console.log(getUsersWithEyeColor(users, 'blue'));

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(
//     user => user.friends.indexOf(friendName) !== -1
//   ).map(user => user.name);
// };
// можна так
// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(
//      user => user.friends.includes(friendName));
// };



// metod find() знаходить один елемент
// а саме терший який знайде
// і унікальний

// const numbers = [5, 10, 15, 20, 25];
// const number = numbers.find(number => number > 10);
// console.log(number);;

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },

// ];

// const playerIdToFind = 'player-3';

// const playerWithId = players.find(player => player.id === playerIdToFind);
// те саме
// const playerWithId = players.find(({id}) => id === playerIdToFind);
// console.log(playerWithId);

// шукаємо за ім'ям
// const playerNameToFind = 'Poly';
// const playerWithName = players.find(player => player.name === playerNameToFind);
// console.log(playerWithName);


// пошук по імені і ID

// const finPlayerById = (allPlayer, playerId) => {
//     return allPlayer.find(player => player.id === playerId);
// };

// console.log(finPlayerById(players, 'player-4'));




// metod every()
// якщо хоч один не онлайн буде фалсе
// const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline', isAllOnline)


// metod some()
// якщо хоч один онлайн то буде тру,
// якщо всы не онлайн то буде фолс
// const isAnyOnline = players.some(player => player.online);
// console.log('isAnyOnline', isAnyOnline);

// тепер хто быльше грає
//  не повертае назву ігрока
// а повертає є чи ні
// const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
// console.log('anyHardcorePlayers', anyHardcorePlayers);


// metod reduce()
// бере багато і повертає щось одне
// бере початковий асс який в кінці  і
// додає до number
// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((acc, number) => {
//     console.log('number', number);
//     console.log('acc', acc);

//     return acc + number;
// }, 0);

// те саме
// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// Ітерація 1 -> accumulator = 0 -> number = 5 -> return 0 + 5 -> return 5
// Ітерація 2 -> accumulator = 2 -> number = 10 -> return 5 + 10 -> return 15
// Ітерація 3 -> accumulator = 9 -> number = 15-> return 15 + 15 -> return 30
// Ітерація 4 -> accumulator = 12 -> number = 20 -> return 30 + 20 -> return50
// Ітерація 5 -> accumulator = 26 -> number = 25 -> return 50 + 25 -accumulator

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };


// const totalSalary = Object.values(salary).reduce((total, value) => {
//     return total + value;
// }, 0);
// те саме
// const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0);
// console.log(totalSalary);


// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },

// ];
// //  підрахунок усього часу гри
// // усіх гравців
// const totalTimePlayed = players.reduce((totaiTime, player) => totaiTime + player.timePlayed, 0);
// console.log(totalTimePlayed);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((playtime, number) => {
//   return playtime + number;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// середній час гри
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);


// загальна сума товару
// const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 120, quantity: 3 },
//     { label: 'Lemons', price: 70, quantity: 4 },
// ];
// const totalAmount = cart.reduce((total, item) => {
//     return total + item.price * item.quantity;
// }, 0);
// деструктуризація другого параметра
// const totalAmount = cart.reduce((total, {price, quantity}) =>
//      total + price * quantity, 0);
// console.log(totalAmount);


const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

// // Change code below this line
// const calculateTotalBalance = users => {
//     return users.reduce((total, user) => {
//       return total + user.balance;
//    }, 0);
// };
// // Change code above this line

// console.log(calculateTotalBalance(users));

//  кількість друзів з вехнього списку
// const getTotalFriendCount = users => {
//    return users.reduce((total, user) => {
//      return total + user.friends.length;
     
//    }, 0);
// };

// повертає загальний баланскористувачів по гендеру

// const getTotalBalanceByGender = (users, gender) => {
//         return [...users].filter(user => user.gender === gender)
//                 .map(user => user.balance)
//                 .reduce((total, value) => total + value, 0);
// };


// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

//  тепер з акумулятором де на початку пустий масив
// const allTags = tweets.reduce((tags, tweet) => {
//     // tags.push(...tweet.tags);

//     // return tags;
//     // краще так
//     return [...tags, ...tweet.tags];


// }, []);

// тепер в одну строку
// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// console.log(allTags);

// тепер повернемо обєкт для статистики
// якщо значення таке немае то запишемо
// його і дамо 1, якщо є то додамо 1
// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);
//     if (acc[tag]) {
//         acc[tag] += 1;
//         return acc;
//     }

//     acc[tag] = 1
//     return acc;


// }, {});
// //  це загальний вивод на сонсоль
// console.log(tagsStats);

// лінтери не люблять порушувати старі об'єкти

// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);
//     if (acc[tag]) {
//         // acc[tag] += 1;
//         return {
//             ...acc,
//             [tag]: acc.tag + 1
//         };
//     }

//     // acc[tag] = 1;
//     return {
//         ...acc,
//         [tag]: 1
//     };


// }, {});
// //  це загальний вивод на сонсоль
// console.log(tagsStats);
// те саме
// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);
    
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };


// }, {});
//  це загальний вивод на сонсоль
// console.log(tagsStats);

// //  те саме
// const tagsStats = allTags.reduce(
//     (acc, tag) => ({
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {},
// );
// //  це загальний вивод на сонсоль
// console.log(tagsStats);




// metod sort()
// сортуе самостійноипо зростанню
// const numbers = [1, 9, 6, 2, 5];
// numbers.sort();
// console.log('numbers', numbers);
// так само
// numbers.sort((curEl, nexEl) => {
//   return nexEl - curEl;
// });
// console.log(numbers);
// на зменшення
// numbers.sort((curEl, nexEl) => {
//   return curEl - nexEl;
// });
// console.log(numbers);


// const leters = ['b', 'B', 'a', 'A'];
// leters.sort();
// console.log('leters', leters);



// щоб не змінити оригінал робим копію
// const copy = [...numbers];
// copy.sort();
// або
// const copy = [...numbers].sort();
// або
// const ascSortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log('ascSortedNumbers', ascSortedNumbers);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67
//   },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a - b);

// const sortedByDescentingRating = [...books].sort((a, b) => b - a);
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log()
// console.log()





// сортування за кількістью друзів

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const sortByDescendingFriendCount = users => {
//         return [...users].sort((a, b) => a.friends.length - b.friends.length)
//         .map(user => user.name);
// };
// console.log(sortByDescendingFriendCount(users));

// повертае масив унікальних імен дгузів в алфавітному порядку
// const getSortedFriends = users => {
//         return [...users].flatMap(user => user.friends)
//                 .filter((friend, index, array) => array.indexOf(friend) === index)
//                 // .sort((a, b) => a.localeCompare(b));
// };
// console.log(getSortedFriends(users));


// // сортування по зростанню рейтингу
// // потім беремо їх імена через map і через sort сортуємо

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter(book => book.rating > MIN_BOOK_RATING)
//         .map(book => book.author)
//         .sort((a, b) => a.localeCompare(b));

// console.log(names);
  


// сортування по ігровому часу

//  const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },

// ];


// const sortedByBestPlayers = [...players].sort(
//         (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
// );

// console.table(sortedByBestPlayers);

// сортування по першій букві 
// перша 1 то по алфавіту якщо -1 навпаки
// const byName = [...players].sort((a, b) => {
//         const result = a.name[0] > b.name[0];

//         if (result) {
//                 return 1;
//         }
//         if (!result) {
//                 result - 1;
//         }
// });
// console.table(byName);

