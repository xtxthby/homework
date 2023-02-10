// Для того щоб прийняти аргументи
// які ми очикуємо , то тоді ставимо
// ...args
// const add = (...args) => {
//     console.log(args);
// };
// // отримаємо масив
// add(1, 2, 3, 4, 5);


// контекст в середині стрілки виявляється містом
// її оголошення, а не виклику, і посилається ка
// контекст батьківської функції
//  тобіш стрілочна функція з середини не може
//  за допомогою this викликати
// з обєкту ключ або значення бо вона бачить батька тобіш windows
// const showThis = () => {
//     console.log('this in showThis:', this);
// };

// showThis();


// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext();


//  приклад
// так працює....

// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this:', this);
//         console.log('this.fullName:', this.fullName);
//         // тут не працює
//         const inner = function () {
//             // функція this була викликана
//             // без імені змінноіб тому не
//             // визначена
//             console.log('this in inner:', this);
//         };
//         inner();
//     },
// };

// user.showName();


// так працює повністью
// бо бачить батька user
// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this:', this);
//         console.log('this.fullName:', this.fullName);
//         // тут працює
//         const inner = () => {
//             // функція this була викликана
//             // в стрілочній ,яка обявлена
//             // в середині метода обєкта
//             console.log('this in inner:', this);
//         };
//         inner();
//     },
// };

// user.showName();



// не використовуйте стрілки як методи обєктів

// const user = {
//     fullName: 'Mango',
//     // showName() {
//     //     console.log('this:', this);
//     //     console.log('this.fullName:', this.fullName);
//     // },
    
//     // те саме
//     // showName: function() {
//     //     console.log('this:', this);
//     //     console.log('this.fullName:', this.fullName);
//     // },
    
//     // буде помилка бо обявлена в обєкті
//     // глобальної зони бачення
//     showName: () => {
//         console.log('this:', this);
//         console.log('this.fullName:', this.fullName);
       
//     },
// };
// user.showName();



//  через bind переприсвоіли
// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this:', this);
//         console.log('this.fullName:', this.fullName);
//     },
// };

// user.showName();

// const boundShowName = user.showName.bind(user);
// boundShowName();


// зробили стрілочну І маємо проблему
// const user = {
//     fullName: 'Mango',
//     showName: () => {
//         console.log('this:', this);
//         console.log('this.fullName:', this.fullName);
//     },
// };

// const boundShowName = user.showName.bind(user);
// boundShowName();

// також стрілка не може бути конструктором
// const User = function (name) {
//     this.name = name;
// }
// за рахунок new створбється нова функція
// console.log(new User('Mango'));

// те саме з стрілкою
// const User = name => {
//     this.name = name;
// }
// //  у стрілки немає конструктора
// console.log(new User('Mango'));

//  так можна
// const objA = {
//     x: 5,
//     showX() {
//         console.log('this в objA.showX: ', this);
//         console.log(this.x);
        
//         const objB = {
//             y: 10,
//             showThis:() => {
//                 console.log('this в objB.showThis: ', this);
//             },
//         };
//         objB.showThis();
//     },
// };
// objA.showX();




// рефакторінг
const numbers = [1, 2, 3, 4, 5];
// const greaterThemTwo = numbers.filter(function (num) {
//     return num > 2;
// });
const greaterThemTwo = numbers.filter(num => num > 2);
// console.log(greaterThemTwo);


// const multByTwo = greaterThemTwo.map(function (num) {
//     return num * 2;
// });
const multByTwo = greaterThemTwo.map(num => num * 2);
// console.log(multByTwo);


// const sorted = multByTwo.sort(function (a,b) {
//     return a = b;
// });
const sorted = multByTwo.sort((a, b) => a = b);
// console.log(sorted);


// const res = numbers
//     .filter(function (num) {
//         return num > 2;
//     })
//     .map(function (num) {
//         return num * 2;
//     })
//     .sort(function (a, b) {
//         return a - b;
//     });
// console.log(res);

// const res = numbers
//     .filter( num => num > 2)
//     .map( num => num * 2)
//     .sort( (a, b) => a - b )
// console.log(res);


// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const onlineAndSorted = players
    // .filter(function (player) {
    //     return player.isOnline;
    // })
    // .sort(function (prevPlayer, nextPlayer) {
    //     return prevPlayer.rank - nextPlayer.rank;
    // });

// const onlineAndSorted = players
//     .filter( (player) => player.isOnline)
//     .sort( (prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);
// console.log(onlineAndSorted);

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },

// ];

// const upatedPlayers = players.map(function (player) {
//     return {
//         ...player,
//         points: player.points + player.points * 0.1,
//     };
// });
//  простий варіант
// const upatedPlayers = players.map( player => {
//     return {
//         ...player,
//         points: player.points + player.points * 0.1,
//     };
// });
// складніший
// const upatedPlayers = players.map( player => ({
//         ...player,
//         points: player.points + player.points * 0.1,
    
// }));
// console.table(upatedPlayers);


// ще приклад до таблиці
// const playerIdToupdate = 'player-3';
// const updatedPlayers = players.map(function (player) {
//     if (player.id === playerIdToupdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,

//         };
//     };
//     return player;
// });
// console.table(updatedPlayers);
// 2222
// const playerIdToupdate = 'player-3';
// const updatedPlayers = players.map(player => {
//     if (player.id === playerIdToupdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,

//         };
//     };
//     return player;
// });
// console.table(updatedPlayers);
// 3333
// const playerIdToupdate = 'player-3';
// const updatedPlayers = players.map(player => {
//     return player.id === playerIdToupdate ?  {
//             ...player,
//         timePlayed: player.timePlayed + 50,
//     } :  player;
// });
// console.table(updatedPlayers);
// 4444
// const playerIdToupdate = 'player-3';
// const updatedPlayers = players.map(player => 
//     player.id === playerIdToupdate ?
//     {...player,timePlayed: player.timePlayed + 50,
//     } :  player,
// );
// console.table(updatedPlayers);
