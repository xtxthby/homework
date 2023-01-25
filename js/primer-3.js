/*напиши скрипт вибору вартості щтеля по кількості зірок
1--20, 2--30, 3--50, 4--70, 5--120

якщо зірок більше виведи --Такої кількості зірок немає.--*/

// const stars = 8;
// let pricee;

// if (stars === 1) {
//     pricee = 20;
// } else if (stars === 2) {
//     pricee = 30;
// } else if (stars === 3) {
//     pricee = 50;
// } else if (stars === 4) {
//     pricee = 70;
// } else if (stars === 5) {
//     pricee = 120;
// } else {
//     console.log('Такої кількості зірок немає.');
// }

// console.log(pricee);



// const stars = 5;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такої кількості зірок немає.');

// }
// console.log(price);

/* напиши скрипт вибору вартості отеля
1-2 --20  3-4 --30  4--120*/
// const stars = 8;
// let pricee;

// if (stars === 1 || stars === 2) {
//     pricee = 20;
// } else if (stars === 3 || stars===4) {
//     pricee = 30;
// } else if (stars === 5) {
//     pricee = 120;
// } else {
//     console.log('Такої кількості зірок немає.');
// }

// console.log(pricee);


/* В змінну message записти сповіщення в залежності
від опції*/

// const option = 2;
// let message = '';
// switch (option) {
//     case 1:
//         message = 'Ви маэте забрати товар з 12:00';
//         break;
//     case 2:
//         message = 'Курэр доиравить замовлення с 9:00';
//         break;
//     case 3:
//         message = 'Замовлення буде відпралено сьогодні';
//         break;
//     default:
//         message = 'Вам зателефонують';
// }

// console.log(message);


// рахує на збільшення
// for (let i = 0; i < 5; i += 1) {
//     console.log(i)
// }

// console.log('root')

// рахує на зменшення
// for (let i = 10; i >= 0; i -= 1) {
//     console.log(i)
// }

// console.log('root')



/*написати скрипт який рахує загальну суму зп
кількість робітників
зарплатня кожного записати загальну суму */


// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);
//     console.log(`ЗП робітника номер ${i} - ${salary}`);
//     totalSalary += salary;
// }
// console.log('totalSalary: ', totalSalary);


/* підрахунок усіх парних чисел в проміжку від 6 до 13 */

// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         console.log('парне :', i);
//         total += i;
//     }
// }
// console.log('total ', total);


// тепер логіка від зворотнього
//  Якщо непарне то проусти і іди далі
// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         console.log('Не парне :', i);
//         continue;
//     }
//     console.log('парне :', i);
//     total += i;
// }
// console.log('total ', total);


/*обробка покупки в магазині
зберігання балансу в змінній
сума в змінній
передкупівлею вивести повідомленняпро вартість іперевірку коштів на рахунку
 */

// let balance = 10000;
// const payment = 2000;

// console.log(`Загальна вартість заказа ${payment} кредитів. Перевіряємо кількість наявних коштів на рахунку`,);
// if (payment <= balance) {

//     console.log('ok');

//     balance -= payment;

//     console.log(`На рахунку залишилося ${balance} коштів`,);

// } else {
//     console.log('На рахунку недостатньо коштів')
// }

// console.log('Операція завершена')

/*Написати код підрахунку суми зі скидкою в
залежности від витраченої суми за весь час.
В змінній загальна сума витрат.
Сума поточного платежа.
скидка.
 */

// let totalSpent = 50;
// let payment = 500;
// let discount = 0;
// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовий партнер, скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Срібний партнер, скидка 5%');
//     discount = 0.05;
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Золотий партнер, скидка 10%');
//     discount = 0.1;
// } else {
//     console.log('Не партнер, скидка 0%');
// }

// payment -= payment * discount;

// console.log(`Оформлен заказ на суму ${payment} зі скидкою ${discount * 100}%`,);

// totalSpent += payment;
// console.log(`Загальна сума витраченого: ${totalSpent}`,);