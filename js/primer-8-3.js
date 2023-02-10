// metod flat() чистий без Map()


// Array.prototype.flat(depth)
// прасує масив до вказаної глибини
// за замовчуванням глибина 1


// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat());
// console.log(array.flat(2));
// console.log(array.flat(3));


// сортування в одну строку

// const numbers = [1, 5, 2, 4, 8];

// const sorted = numbers
//     .filter(number => number > 2)
//     .map(number => number * 3)
//     .sort((a, b) => a - b);
// console.log(sorted);



// сортуємо тіх хто онлайн по рангу

// const players = [
//     { id: 'id-1', tag: 'Mango', rank: 310, points: 54, isOnline: false },
//     { id: 'id-2', tag: 'Poly', rank: 470, points: 92, isOnline: true },
//     { id: 'id-3', tag: 'Kiwi', rank: 230, points: 48, isOnline: true },
//     { id: 'id-4', tag: 'Ajax', rank: 150, points: 71, isOnline: false },
//     { id: 'id-5', tag: 'Chelsy', rank: 80, points: 48, isOnline: true },

// ];

// const onlineAndSorted = players
//     .filter(player => player.isOnline)
//     .sort((a, b) => a.rank - b.rank);
// console.table(onlineAndSorted);



// Chaining в методах jqvery

// const element = {
//     class: '',
//     hovared: false,
//     changeClass(cls) {
//         this.class = cls;

//         return this;
//     },
//     toggleHovered() {
//         this.hovared = !this.hovared;

//         return this;
//     },
// };
// //  для того щоб зробити цепочку
// // треба зробити в функціях return
// element.toggleHovered().changeClass('open');
// console.log(element);



// lodash бібліотека

// console.dir(_);

// isEmpty()

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({a: 1}));


// get()
// user && uesr.location && obj.location.city
// user?.location?city

const user = {
    name: 'mango',
    location: {
        coords: [1, 2],
        city: 'Lviv',

    },
};
// цей метод рятує від помилки яку видасть
// скрипт
// console.log(_.get(user, 'location.city'));
// ця помилка ось тут як що зникне 
// location той шо зверху в коді
// console.log(user.location.city);

// в цьому році вийшов новий сінтаксіс який перевіряє
// чи є наявність або каже якщо юзер є іди далі

// console.log(user?.location?.city);



// метод union()
// // обєднає масиви без повторень
// console.log(_.union([1, 2, 3], [3, 4, 5]));



// метод range([start=0], end, [step=1]) це по замовчанню
// фініш до 5
// console.log(_.range(1, 5))
// console.log(_.range(1, 10, 2))
// console.log(_.range(6))

// сортіровка sortBy(collection, [iteratass=[.identity]])
// сортує по зростанню

const users = [
    {user: 'fred', age: 67},
    {user: 'barney', age: 34},
    {user: 'fred', age: 45},
]

// console.log(_.sortBy(users, user => user.age));
// console.log(_.sortBy(users, ['user','age']));



// метод  sum i sumBy


// console.log(_.sum([1, 2, 3, 4, 5]));

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },

];
// console.log(_.sumBy(players, player => player.timePlayed));


// uniq()  uniqBy()
// sortedUniq()  sortedUniqBy()



// random()



// min()   max()
// minBy()  maxBy()
console.log(Math.min(...[1, 2, 3, 4, 5]));


console.log(_.minBy(players, player => player.timePlayed).name);




// camelCase(), capitalize(), kebabCase()

console.log(_.kebabCase('a b c'));

