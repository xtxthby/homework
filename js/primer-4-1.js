// const add = function (x, y) {
//     console.log(x);
//     console.log(y);
//     console.log('Виконання функції add');

//     return x + y;
// }
// const r1 = add(5, 3);
// console.log('r1 ', r1);
// const r2 = add(50, 30);
// console.log('r1 ', r2);
// const r3 = add(54, 34);
// console.log('r1 ', r3);


// const fn = function (value) {
//     console.log(1);
//     console.log(1);
//     if (value < 50) {
//         return 'Менше ніж 50';
//     }
//     return 'Більше ніж 50';
// }
// console.log('Резукльтат фунції: ', fn(10));
// console.log('Резукльтат фунції: ', fn(1000));


// стек виклику
// це пошук помилок




// напиши функцію calculateTotalPrice(items)
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }

// console.log('Total: ', total);

// const calculateTotalPrice = function (items) {
//     console.log('items в середені функції: ', items);
//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;
// }
// const r1 = calculateTotalPrice([1, 2, 3]);
// console.log(`Загальна вартість покупок:  ${r1} кредитів.`);
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([180, 200, 300]));




//  Написати фунцію для перебора та логування масиву

// const logItems = function (items) {
//     for (const item of items){
//         console.log(item);
//     }
// }
// logItems(['Mango', 'kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавіатура', 'навушники', 'годинник']);


// функція яка прийпає параметр із усіх логінів і параметир який треба знайти
//  спочатку стара задача потім нова
// const logins = ['22222', '33333', '44444', '55555'];
// const loginToFind = '44444';

// const message = logins.includes(loginToFind)
//     ? `Користувач ${loginToFind} знайден.`
//     : `Користувач ${loginToFind} не знайден.`;
// console.log(message);

// const findLogin = function (allLogins, loginToFind) {
//     console.log(allLogins);
//     console.log(loginToFind);
//     let message = `Користувач ${loginToFind} не знайден.`;

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             message = `Користувач ${loginToFind} знайден.`;
//         }
//     }
//     return message;
        
// }

// console.log(findLogin(logins, '22222'));
// console.log(findLogin(logins, '11111'));
// console.log(findLogin(logins, '44444'));
// console.log(findLogin(logins, '66666'));

//    другий варіант
// const findLogin = function (allLogins, loginToFind) {
//     console.log(allLogins);
//     console.log(loginToFind);

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Користувач ${loginToFind} знайден.`;
//         }
//     }
//     return `Користувач ${loginToFind} не знайден.`;
        
// }

// console.log(findLogin(logins, '22222'));
// console.log(findLogin(logins, '11111'));
// console.log(findLogin(logins, '44444'));
// console.log(findLogin(logins, '66666'));



// const findLogin = function (allLogins, loginToFind) {
    // const message = logins.includes(loginToFind)
    //     ? `Користувач ${loginToFind} знайден.`
    //     : `Користувач ${loginToFind} не знайден.`;
    // return message;
//     return logins.includes(loginToFind)
//         ? `Користувач ${loginToFind} знайден.`
//         : `Користувач ${loginToFind} не знайден.`;
        
// }

// console.log(findLogin(logins, '22222'));
// console.log(findLogin(logins, '11111'));
// console.log(findLogin(logins, '44444'));
// console.log(findLogin(logins, '66666'));




//найменше число в масиві
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log('smallestNamber: ', smallestNumber);

// const findSmallesNamber = function (numbers) {
//     let smallestNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber;
// }


// console.log(findSmallesNamber([3, 5, 12, -2, 15]));
// console.log(findSmallesNamber([100, 54, 8, 12, 47]));
// console.log(findSmallesNamber([7, 21, 84, 15, 4]));


// зміна регістру верх низ і навпаки

// const string = 'shThfERjuOl';
// const letters = string.split('');
// let invertedString = '';
// for (const letter of letters) {
//     const isEqual = letter === letter.toLowerCase();
//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString: ', invertedString);


// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//         const isInlowerCase = letter === letter.toLowerCase();

//         invertedString += isInlowerCase
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
//     }
//     return invertedString;
// }


// console.log(changeCase('cfWbgdYh'));
// console.log(changeCase('HYbbvfGGHH'));
// console.log(changeCase('GujLEcdAW'));



// const title = 'Top 10 benefits of react framwork';


// const slugify = function (string) {
//     const normalizedTitle = string.toLowerCase();
//     const words = normalizedTitle.split(' ');
//     const slug = words.join('-');

//     return slug;
// }

// console.log(slugify('Top 10 benefits of react framwork'));
// abo

// const slugify = function (string) {
//     // const normalizedTitle = string.toLowerCase();
//     // const words = normalizedTitle.split(' ');
//     // const slug = words.join('-');

//     return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Top 10 benefits of react framwork'));



//  arguments і його обробка тобіш перетворення
// аргументів в масив
// перший старий спосіб
// const fn = function () {
//     console.log(arguments);
//     const args = Array.from(arguments);
//     console.log(args);
// }
// fn(1, 2, 3);

// // другий спосіб
// const fn = function (...args) {
//     console.log(args);
// }
// fn(1, 2, 3);

// третіс спосіб коли ми хочемо в масив взяти останню цифру
// const fn = function (a, b, c, ...args) {
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// }
// fn('hello', 1, 2, 3);
// тобіш в а = heiilo  b = 1 c = 2


// напиши функцію для додавання повільної кількості аргументів

// const add = function (...args) {
//     console.log(args);
//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// }

// console.log(add(1, 2, 3));



// //  написати новий масив з однакових цифр

// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args);
//     const uniqueElements = [];

//     for (const element of array) {
//         console.log(element);
//         if (args.includes(element)) {
//             uniqueElements.push(element);
//             console.log(`${element} є кругом `);
//         }
//     }
//     // console.log(uniqueElements);
//     return uniqueElements;

// }

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));

// Напиши скрипт , який переведе значення totalMinutes
// в рядок у форматі : години та хвилини
//  70 покаже 01:10
 
// const totalMinutes = 69;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// console.log(doubleDigitHours);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(doubleDigitMinutes);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

