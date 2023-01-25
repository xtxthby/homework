// // як визвати в консолі таблицю
// const friends = ['Mango', 'kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// // виклик по індексу
// console.log(friends[0]);

// //  довжина масиву в індексах
// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// // змінити елемент масиву
// friends[1] = 'mull';
// console.table(friends);

//  копія цифр або літерала без наслідування

// let a = 25;
// let b = a;

// console.log(a);
// console.log(b);

// a = 40;

// console.log(a);
// console.log(b);

// при сложніх змінних копіюється силка
// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 40;

// console.log('a', a);
// console.log('b', b);
// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]);


// прогнати масив через for , та звертаемося до кожного елементу
// const friends = ['Mango', 'kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length -1;

// for (let i = 0; i <= lastIndex; i += 1) {
//     // console.log(i);
//     // console.log(friends[i]);
//     // додавання строки до масиву
//     friends[i] += '-1';

// }
// console.table(friends);



// const friends = ['Mango', 'kiwi', 'Poly', 'Ajax'];

// for (const friend of friends) {
//     console.log(friend);
// }


//додавання в середені масиву
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     // console.log(cart[i]);
//     total += cart[i];
// }
// console.log('Total:', total);


// for (const value of cart) {
//     total += value;
// }
// console.log('Total:', total);


// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 0.2);
// }


// console.log(cart);


// додавання цифр між собою
// const nambers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18];
// let total = 0;
// for (let i = 0; i < nambers.length; i += 1) {
//     console.log(namber[i]);
//     if (nambers[i] % 2 === 0) {
//         console.log('парне');
//         total += nambers[i];
        
//     }
// }


// for (const namber of nambers) {
//     if (namber % 2 === 0) {
//         total += namber
//     }
// }


// for (const namber of nambers) {
//     if (namber % 2 !== 0) {
//         continue;
        
//     }
//     total += namber
// }
// console.log('Total :', total);


//пошук логіна
// const logins = ['22222', '33333', '44444', '55555'];
// const loginToFind = '44444';
// let message = '';
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log('Login', login)
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайден.`;
//         break;
//     }
//     message = `Користувач ${loginToFind} не знайден.`;
// }
// console.log(message);


// let message = `Користувач ${loginToFind} не знайден.`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log('Login', login)
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайден.`;
//         break;
//     }
// }
// console.log(message);


// for (const login of logins) {
    
//     console.log('Login', login)
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайден.`;
//         break;
//     }
// }
// console.log(message);


// метод includes
// console.log(logins.includes(loginToFind));
// відповідь true


// тернарник
// const message = logins.includes(loginToFind) ? `Користувач ${loginToFind} знайден.` : `Користувач ${loginToFind} не знайден.`;
// console.log(message);



//найменше число в масиві
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log('smallestNamber: ', smallestNumber);



// об'єднання усіх елементів в строку
// const friends = ['Mango', 'kiwi', 'Poly', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);
// обираємо від 0 до -1ю видаляе остьанній символ
// те саме але через join
// const string = friends.join(',');
// console.log(friends);
// console.log(string);


//  змінити букви по розміру на протилежні
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// console.log(letters);

// for (const letter of letters){
    // if (letter === letter.toLowerCase()) {
    //     invertedString += letter.toUpperCase();
    // } else {
    //     invertedString += letter.toLowerCase();
    // }
    // замість іф тернарник
//     invertedString += letter === letter.toLowerCase()
//     ?letter.toUpperCase(): letter.toLowerCase();
// }
// console.log(invertedString);

// робимо  slug
// const title = 'Top 10 benefits of react framwork';
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);
// const words = normalizedTitle.split(' ');
// console.log(words);
// const slug = words.join('-');
// console.log(slug);
// //  коротка запис
// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);


//   рахуемо суму двох масивів
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const numbers = array1.concat(array2);
// for (const number of numbers) {
//    total += number; 
// }
// console.log(total);


//  видалення eлементу з масиву
// const cards = [
//     'Картка - 1',
//     'Картка - 2',
//     'Картка - 3',
//     'Картка - 4',
//     'Картка - 5',
// ]
// console.table(cards);

// cards.splice(1, 1);
// console.table(cards);

// const cardToRemove = 'Картка - 3';
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);
// console.table(cards);


// додавання елементу
// const cardToInsert = 'Картка - 6';
// const index = 5;
// cards.splice(index, 0, cardToInsert);
// console.table(cards);

//  видалити елемент  та встав другий
// cards.splice(1, 1, 555);
// console.table(cards);
