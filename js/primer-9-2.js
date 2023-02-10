// прототип

// const objC = {
//     z: 5,
// }

// const objB = Object.create(objC);
// // записуємо в В ключ значення
// objB.y = 2;
// console.log(objC);
// // тут є силка на z: 5
// console.log(objB);

// // тепер в В є свое 2 і не своє 5

// console.log(objB.y);
// console.log(objB.z);


// const objA = Object.create(objB);
// objA.x = 1;
// console.log(objA);


// // можна перезаписати значення z чере А
// console.log(objA.z);

// objA.z = 100;
// // дивись тут , воно запише собі z в А
// console.log(objA);

// // провіряю чи є в А своє Y
// console.log(objA.hasOwnProperty('y'));



// приклад
// розкрий послідовність вконсолі
// const dummyObj = Object.create({ message: 'Це свойство обєкту прототипа' });
// dummyObj.message = 'Це власне свойство обэкта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);


// ООП--------------
// construktor

// const Car = function () {

//     console.log(this);
//     //  це ми побачимо через виклик new
//     // так як воно записалося в новий обєкт new
//     this.a = 555;

// };

// // якщо функція викликається через new
// // то будується новий об'єкт
// const myCar = new Car();

// console.log(myCar);



// передача значення

// const Car = function (value) {

//     console.log(this);
//     //  це ми побачимо через виклик new
//     // так як воно записалося в новий обєкт new
//     this.a = value;
    
// };

// // якщо функція викликається через new
// // то будується новий об'єкт
// const myCar = new Car(5);

// console.log(myCar);


// const myCar2 = new Car(10);

// console.log(myCar2);



// передача значення 2
// const Car = function () {

//     console.log(this);
//     //  це ми побачимо через виклик new
//     // так як воно записалося в новий обєкт new
//     this.brand = '';
//     this.model = '';
//     this.price = '';
    
// };

// // якщо функція викликається через new
// // то будується новий об'єкт
// const myCar = new Car();

// console.log(myCar);


// const myCar2 = new Car();

// console.log(myCar2);



// // передача значення 3
// const Car = function (brand, model, price) {

//     console.log(this);
//     //  це ми побачимо через виклик new
//     // так як воно записалося в новий обєкт new
//     this.brand = 'brand';
//     this.model = 'model';
//     this.price = 'price';
    
// };

// // якщо функція викликається через new
// // то будується новий об'єкт
// const myCar = new Car('Audi', 'Q3', '35000');

// console.log(myCar);


// const myCar2 = new Car();

// console.log(myCar2);





// // передача значення 4
// // config = {} якщо не прийшли дані то така запис
// // дає пустий обєкт за замовчуванням
// const Car = function (config = {}) {

//     console.log(config);
//     console.log(this);
//     //  це ми побачимо через виклик new
//     // так як воно записалося в новий обєкт new
//     this.brand = config.brand;
//     this.model = config.model;
//     this.price = config.price;
    
// };

// // якщо функція викликається через new
// // то будується новий об'єкт
// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: '35000'
// });

// console.log(myCar);


// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'X6',
//     price: '50000'});

// console.log(myCar2);





 // деструкторізація
 


// // передача значення 4
// // config = {} якщо не прийшли дані то така запис
// // дає пустий обєкт за замовчуванням
// const Car = function (config = {}) {
//     // деструкторізація
//     const { brand, model, price } = config;

//     console.log(config);
//     console.log(this);
//     //  це ми побачимо через виклик new
//     // так як воно записалося в новий обєкт new
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
    
// };

// // якщо функція викликається через new
// // то будується новий об'єкт
// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: '35000'
// });

// console.log(myCar);


// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'X6',
//     price: '50000'});

// console.log(myCar2);




 // деструкторізація
 

//  // передача значення 4
// // config = {} якщо не прийшли дані то така запис
// // дає пустий обєкт за замовчуванням
// const Car = function ({ brand, model, price } = {}) {

//     console.log(config);
//     console.log(this);
//     //  це ми побачимо через виклик new
//     // так як воно записалося в новий обєкт new
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
    
// };

// // якщо функція викликається через new
// // то будується новий об'єкт
// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: '35000'
// });

// console.log(myCar);


// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'X6',
//     price: '50000'});

// console.log(myCar2);




 // робота з прототипом


// // config = {} якщо не прийшли дані то така запис
// // дає пустий обєкт за замовчуванням
// const Car = function ({ brand, model, price } = {}) {

//     //  це ми побачимо через виклик new
//     // так як воно записалося в новий обєкт new
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
    
// };

// // прототайп створюєтся при створенніі new Car
// // дивимось де він ,це конструктор, і цей прототайп ми
// // використовуемо для додавання загальних методів

// console.log(Car.prototype);

// // викликаю нову функцію sayHi, вона
// // буде як бібліотека для усіх

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello :) ');
// }
    
// console.log(Car.prototype);



// // якщо функція викликається через new
// // то будується новий об'єкт
// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: '35000'
// });

// // тут так само він наслідує конструктор
// console.log(myCar);
// // тепер через myCar можу теж визвати sayHi так як вона прототип

// myCar.sayHi();



// приклад

// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };
// //  на прототип вішаю функцію яка буде міняти назву
// // в класі і елементі класу
// User.prototype.changeEmail = function (nawMail) {
//     this.email = nawMail;
// }

// const mango = new User({ email: 'mango@.com', password: 1111 });

// // тут міняю назву
// mango.changeEmail('my-new-mail@.com');
// console.log(mango);



// // статичні свойства і статичні методи
// // які не доступні екземплярам класів

// console.log(Math.round(5.1));
// console.log(Math.PI);

// // на функцію юзер додаємо логінфо і це свойство
// //  не буде у доступі на функції теземпляра
// // і в прототипі його не буде.
// // вона доступна буде тільки тут

// // в манго мене немае
// console.log(mango);
// User.messag = 'я статичний метод, мене тут на екземплярах немає';
// User.logInfo = function (obj) {
//     console.log(obj);
// }
// console.dir(User);



// // живий приклад підключення кнопок з лічильником
// const CounterPlugin = function ({ rootSelector, initialValue = 0, ster = 1 } = {}) {
    
//     this._value = initialValue;
//     this._step = ster;

//     this._refs = this._getRefs(rootSelector);
//     this._bindEvents();
//     this.updateValueUI();
    
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//     console.log(rootSelector);

//     const refs = {};
//     refs.container = document.querySelector(rootSelector);
//     refs.incrementBtr = refs.container.querySelector('[data-increment]');
//     refs.decrementBtr = refs.container.querySelector('[data-decrement]');
//     refs.value = refs.container.querySelector('[data-value]');
//     console.log(refs.container);
//     return refs;
// }
// CounterPlugin.prototype._bindEvents = function () {
//     this._refs.incrementBtr.addEventListener('click', () => {
//         console.log('CounterPlugin.prototype._bindEvents -> this', this);
//         this.increment();
//         this.updateValueUI();
//     });

//     this._refs.decrementBtr.addEventListener('click', () => {
//           console.log('CounterPlugin.prototype._bindEvents -> this', this);
//         this.decrement();
//         this.updateValueUI();
//     });
// };
// CounterPlugin.prototype.updateValueUI = function () {
//     this._refs.value.textCounter = this._value;
// }


// CounterPlugin.prototype.increment = function () {
//     this._value += this._step;
// };
// CounterPlugin.prototype.decrement = function () {
//     this._value -= this._step;
// };

// new CounterPlugin({rootSelector: '#counter-1', ster: 10 , initialValue: 100});
 
// // console.log('counter1', counter1);
// // // скільки визвали стільки додалося
// // counter1.increment();
// // counter1.increment();
// // counter1.increment();
// // counter1.decrement();
// // console.log(counter1);
// new CounterPlugin({rootSelector: '#counter-2', ster: 2 });
// // console.log('counter2', counter2);