// приклад як вивести на консоль
// const totalPrice = 2;
// console.log(' Вартість :', totalPrice)

//  тип даних виводить ytpeOf, виведе namber
// const type = typeof 5;
// console.log(type);


// за допомогою alert висвічується модальне вікно і поки ми не вибетемо дію код далі не запуститься
// console.log('До');
// alert('Середина');
// console.log('Після');

//  Відкриття модального вікна за допомогою  confirm і поки не получимо відповідь код далі не виконається
// const shouldRenew = confirm('Бажаєте подовжити підписку');
// console.log(shouldRenew);


// метод prompt для користувача якому треба вконсолі ввести дані
// const quantity = prompt('Введіть кількість товару');
// console.log(quantity);
// щоб ви не ввели вам повернуть рядок
// console.log(typeof quantity);


// для того щоб перетворити в число
// let quantity = prompt('Введіть кількість товару');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

//  Розбираємо рядок і виводимо число перше яке попадеться
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);
// якщо першою буде буква то буде NaN Нерозпарсило
// або присвоїти нове значення в ту саму змінну
// elementWidth =Number.parseInt(elementWidth);

// Те саме робиться з Namber.parseFloat


//  toFixed  заокруглює і ваводить як рядок
// let salari = 1380.123456;
// salari = salari.toFixed(2);
// salari = Number(salari);
// console.log(salari);
// Тільки воно відкидае но не заокруглює

// піднесення до степені
// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);
// або
// console.log(2 ** 5);
// console.log(base ** power);


// квадратний корінь
// Math.sqrt();


// напиши скрипт де користувача просять ввести число і степінь ,далі возвести і вивести результат
// let base = prompt('число');
// base = Number(base);
// console.log(base);
// let power = prompt('cтепінь');
// base = Number(power);
// console.log(power);
// const result = base ** power;
// console.log(result);

//  рандомний вибір числа
// const max = 80;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result)

