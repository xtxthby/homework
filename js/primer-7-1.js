// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback();
// }

// const fnB = function () {
//     console.log('Це лог при виклику fnB');

// }

// fnA('Yurii', fnB);




// додаємо параметр

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// }

// const fnB = function (namber) {
//     console.log('Це лог при виклику fnB', namber);

// }

// fnA('Yurii', fnB);




// // тепер на прикладах
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);

// }

// const add = function (x, y) {
//     return x + y;

// }

// doMath(2, 3, add);


// // тепер на прикладах з двома колвеками
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);

// }

// const add = function (x, y) {
//     return x + y;

// }
// const sub = function (x, y) {
//     return x - y;

// }

// doMath(2, 3, add);
// doMath(18, 8, sub);



// літерал функції тобіш без назви
// анонімні
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);

// }

// doMath(2, 3, function (x, y) {
//     return x + y;
// });
// doMath(18, 8, function (x, y) {
//     return x - y;

// });





// приклади : регістрація кода через js
// по результату події
// кліком по кнопці
// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//    console.log('клік по кнопці'); 
// }
// // предача колбеку другим параметром
// // щоб підключити кнопку
// buttonRef.addEventListener('click', handleBtnClick);
// console.log(buttonRef);
// //  приклад того що при якоїсь події
// // прийшло значення яке співпадае
// // з базовим , колбек буде визван і запрацює
// function addEventListener(eventType, callback) {
//     if (eventType === events) {
//         callback();
//     }
// }




// також можемо зробити анонімно
// const buttonRef = document.querySelector('.js-button');


// buttonRef.addEventListener('click', function () {
//    console.log('клік по кнопці'); 
// });





// отримання геолокації
// де геолокації треба два параметри

// const onGetPositionSuccess = function (position) {
//     console.log('Це виклик onGetPositionSuccess')
//     console.log(position);
// }


// const onGetPositionError = function (error) {
//     console.log(error);
// }


// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess, onGetPositionError
// );



// Інтервали
// ми задаємо час через який функція запуститься

// const callback = function () {
//     console.log('Через 2 секунди в середині колбека в таймауті');
// }

// console.log('В коді до таймаута');
// // 2000 - це мілісекунди б або 2 секунди
// setTimeout(callback, 2000);

// console.log('В коді після таймаута');




// запрос на бекенд і коли прийде відповідь
// виконай колбек

// const onRequestSuccess = function (response) {
//     console.log('Виклик функції після успішного виклику')
//     console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);




// функція фільтрація

// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         // це перевірка на true
//         // console.log(test(el));
//         const passed = test(el);
//         //  це запис нового масиву
//         if (passed) {
//         filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// };

// const callback1 = function (value) {
//     return value >= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);
// //  те саме але інша умова
// const r2 = filter([1, 2, 3, 4, 5], function (value) {
//     return value <= 4;
// });
// console.log(r2);



// те саме але з масивом об'єктів

// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         // це перевірка на true
//         // console.log(test(el));
//         const passed = test(el);
//         //  це запис нового масиву
//         if (passed) {
//         filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// };

// const fruits = [
//     { name: "Apel", price: 60 },
//     { name: "Strawbery", price: 110 },
//     { name: "Pear", price: 50 },
//     { name: "Lemon", price: 50 },
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.price >= 50;
// }
// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);





// замикання
//  або повернення функції яка
//  працює в середені функції

// замиканням називають повертаєму функцію
// до якої є доступ із усіх локальних змінніх
//

// const fnA = function (parametr) {
//     const inmerVariable = 'Значення внутрішньої змінної функції fnA';

//     const inmerFunction = function () {
//         console.log(parametr);
//         console.log(inmerVariable);
//         console.log('Це виклик innerFunction');
//     }
//     return inmerFunction;
// }

// const fnB = fnA(555);
// fnB();
// // console.log(fnB);




// приклад з поваром

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готує ${dish}.`);
// };

// makeDish('Mango', 'кава');
// makeDish('Mango', 'чай');
// makeDish('Mango', 'капучино');

// makeDish('Poly', 'плов');
// makeDish('Poly', 'рагу');
// makeDish('Poly', 'борщ');


// тепер визиваємо по імені і яке блюдо
// const sheffName = function (name) {
//     // поки недоступна бо вона не в
//     // функції makeDish
//     const message = 'heiio'

//     const makeDish = function (dish) {
//         console.log(`${name} готує ${dish}.`);

//     };
//     return makeDish;
// };

// const mango = sheffName('Mango');
// mango('чай');
// mango('кава');

// const poly = sheffName('Poly');
// poly('чай');
// poly('кава');





// приклад  Округлятор

const floatPoint = 3.456789;
const someInt = Math.round(floatPoint);
const withDecimals = Number(floatPoint.toFixed(2));

// перший
// const rounder = function (number, places) {
//     return Number(floatPoint.toFixed(places));
// }

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));

// другий
// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     }
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));




//  приватні дані
// В тебе є обєкт і ти не хочеш
//  відкривати доступ до свойства
//  тобіш ключа другій людині
// де є значення

// const myLib = {
//     value: 0,
//     add(num) {
//         this.value += num;
//     }
// }

// myLib.add(5);
// console.log(myLib.value);


// // тепер міняємо ключ і
// // людина неможе його використовувати
// const myLib = {
//     value123: 0,
//     add(num) {
//         this.value123 += num;
//     }
// }
// // тут працює людина
// myLib.add(5);
// console.log(myLib.value);

// тепер людина працює за методом
// // getValue
// const myLib = {
//     value123: 0,
//     add(num) {
//         this.value123 += num;
//     },
//     // тепер не важно як я міняю ключ
//     getValue() {
//         return this.value123;
//     }

// }
// // тут працює людина
// myLib.add(5);
// console.log(myLib.getValue());
// // проблема в тьому що любий розробник
// // може отримати код за допомогою
// console.log(myLib);
// // там буде value123


// що робимо
// const myLibFactory = function () {
//     let value = 0;

//     return {
//         add(num) {
//             value += num;
//         },
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();
// console.log(myLib);

// із-за того що обєкт це функція
// можемо переписати return
// const myLibFactory = function () {
//     let value = 0;
//     const add = function (num) {
//         value += num;
//     };
//     return {
//         add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();
// console.dir(myLib.getValue);
// console.log(myLib);

// // якщо так то поверне нуль
// console.log(myLib.getValue());
// //  а так помилку ,якщо в функції не вказати num
// myLib.add(10);
// console.log(myLib.getValue());
//  тепер ми бачимо 10 і ніякий розробник її не
//  змінить без твого методу





// стрілкові функції
// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// }

// console.log(add(5, 10, 15));
// те саме

// const addErrow = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// }

// // те саме але з однім параметром
// const addEr = a => {
//     console.log(a);
//     return a;
// }

// // якщо параметрів немає
// // дужки обов'язкові
// const addErr = () => {
//     console.log(a, b, c);
//     return a + b + c;
// }
// // неявне повернення
// const addErro = () => a + b + c;



// як отримати аргументи

// const add = (...args) => {
//     console.log(args);
// };

// console.log(add(5, 10, 15));


// приклад з об'эктом

// const fnA = function () {
//     return {
//         a: 5,
//     };
// };
// console.log(fnA());
// // те саме
// const arrowFna = () => ({ arrowA: 5 });

// console.log(arrowFna());




// переобляємо локацію
// const onGetPositionSuccess = (position) => {
//     console.log('Це виклик onGetPositionSuccess')
//     console.log(position);
// }


// const onGetPositionError = (error) => {
//     console.log(error);
// }


// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess, onGetPositionError
// );




// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         // це перевірка на true
//         // console.log(test(el));
//         const passed = test(el);
//         //  це запис нового масиву
//         if (passed) {
//         filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// };
// // const callback1 = (value) => value >= 3;

// const r1 = filter([1, 2, 3, 4, 5], (value) => value >= 3);
// console.log(r1);
// //  те саме але інша умова
// const r2 = filter([1, 2, 3, 4, 5], (value) => value <= 4);
// console.log(r2);
// const fruits = [
//     { name: "Apel", price: 60 },
//     { name: "Strawbery", price: 110 },
//     { name: "Pear", price: 50 },
//     { name: "Lemon", price: 50 },
// ];

// // const getFruitsWithQuantity = (fruit) => fruit.price >= 50;

// const r3 = filter(fruits, fruit => fruit.price >= 50);
// console.log(r3);


