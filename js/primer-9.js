
// додавання та видалення книжок метод this

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks());
// // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks());
// // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks());
// // ['The Last Kingdom', 'Dream Guardian']




// // Розглянемо складніший приклад для кращого
// // розуміння.
// // Спочатку створимо функцію в глобальній області
// //  видимості і викличемо її.
// // Після чого, присвоїмо її у властивість
// //  об'єкта і викличемо як метод цього об'єкта.

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: "Mango",
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext();
//  // this in showThis: {username: "Mango", showContext: ƒ}



// метод  call()
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо");
//  // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям");
 // З прибуттям, Полі.



// метод apply()

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.apply(mango, ["Ласкаво просимо"]); // Ласкаво просимо, Манго.
// greetGuest.apply(poly, ["З прибуттям"]); // З прибуттям, Полі.




// метод bind()

// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// console.log(steamGreeter("Манго"));
//  // "Манго, ласкаво просимо в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// console.log(gmailGreeter("Полі"));
// // "Полі, ласкаво просимо в «Gmail»."





// // bind() і методи об'єкта
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// // makeMessage(customer.getFullName);
// //  // Виникне помилка на момент виклику функції


// makeMessage(customer.getFullName.bind(customer));
// // Обробляємо заявку від Jacob Mercer.


// в функціях масиви між собою як і обєкти не рівні

// console.log('[] === []:', [] === []);
// console.log('{} === {}:', {} === {});
// console.log(
//     'function() {} === function() {}:',
//     function() {} === function() {});

// // для того щоб обєкти були рівні треба адресу функціі
// // присвоіти їм обом

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA', fnB === fnA);



// this ссилається на user

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();


// якщо перед foo немає нічого тобіш немає ссили
//  то this буде undefined в суворому режимі
//  в несуворому буде window
// const foo = function() {
//     console.log('showTag -> this', this);
// };

// foo();



// // як метод обєктаб але оголошена як зовнішня функція
// const showTag = function () {
//     // тут андефаінд
//     console.log('showTag -> this', this);
//     // тут помилка так як "таг" не знайдено
//     console.log('showTag -> this', this.tag);
// };

// // showTag();

// const user = {
//     tag: 'Mango',
   
// };
// // В showUserTa записуємо посилання на функцію
// user.showUserTag = showTag;
// //  тепер вона зявляється в user

// console.log('user', user);

// // тепер викликаемо як функцію
// user.showUserTag();




// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this', this.tag);
//     },
// };

// user.showTag();

//  в кінці присвоюється ссилка на обєкт , тому без дужок
// якби були дужки то тодіб присвоілося вже функція яка відпрацювала
// і видала результат
// const outerShowTag = user.showTag;
// тут "андефаінд"
// outerShowTag();




// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this', this.tag);
//     },
// };



// const invokeAction = function (action) {
//     console.log(action);
//     // тут "андефаінд" бо немае з переду звернення
//     action();
// };

// invokeAction(user.showTag);




// тест 1

// const fn = function () {
//     console.log('fn -> this', this)
// }

// fn();

// тест 2

// const book = {
//   title: "The Last Kingdom",
//   showThis() {
//     console.log('showThis -> this', this);
//   },
//   showTitle() {
//     console.log('showThis -> this.title', this.title);
//   },
  
// };
// // ссилається на перший this
// book.showThis();

// const outerShowThis = book.showThis;
// outerShowThis();
// // помилка так як після this  -> undefined
// const outerShowTitle = book.showTitle;
// outerShowTitle();


// тест 3


// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };
//     // буде андефаінд
//     // changeColor();

//     const sweater = {
//         color: 'teal'
//     };

//     sweater.updateColor = changeColor;
//     // буде ссилка на светр
//     // sweater.updateColor('red');

//     return sweater.updateColor;
// };
// // makeChangeColor();

// const swapColor = makeChangeColor();
// буде андефаінд
// swapColor('blue');


// тест 4


// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);

//     };
    
//     return changeColor;

    
// };


// const updateColor = makeChangeColor();
// // буде андефаінд
// updateColor('yellow');

// const hat = {
//     color: 'blue',
//     updateColor,
// };
// // буде посилання на весь hat
// hat.updateColor('orange');


// тест 5


// const counter = {
//     value: 0,
//     increnet(value) {
//         console.log('increnet -> this', this);
//         this.value += value;
//     },
//     decrenet(value) {
//         console.log('decrenet -> this', this);
//         this.value -= value;
//     },
// };


// const updateCounter = function (value, operation) {
//     // буде андефаінд
//     operation(value);
// };
// updateCounter(10, counter.increnet);
// updateCounter(5, counter.decrenet);





// call i apply



// const showThis = function (a, b, c, d, f) {
//     console.log(a, b, c, d, f)
//     console.log('showThis -> this', this);
// };

// // андефаінд
// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// // викликається тілки один раз
// showThis.call(objA, 10, 20, 30, 40, 50, )


// const objB = {
//     x: 780,
//     y: 35,
// };
// showThis.call(objB, 10, 20, 30, 40, 50, )


// //  apply

// // те саме але передаємо як масив Це ш є  apply
// showThis.apply(objB, [10, 20, 30, 40, 50] )

//  те саме
// const showThis = function (a, b, arr) {
//     console.log(a, b, arr)
//     console.log('showThis -> this', this);
// };

// // андефаінд
// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// const objB = {
//     x: 780,
//     y: 35,
// };

// // викликається тілки один раз
// showThis.call(objA, 10, 20, [100, 200, 300]);
// showThis.apply(objB, [10, 20, [30, 40, 50] ] );


// те саме але вже масив

// const showThis = function (...args) {
//     console.log(args)
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };


// showThis.call(objA, 10, 20, 30, 40, 50, )



// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };

// const hat = {
//     color: 'bleck',
  
// };

// const sweater = {
//     color: 'green',
    
// };

// зміна кольору
// changeColor.call(hat, 'orange');
// console.log(hat);

// changeColor.call(sweater, 'blue');
// console.log(sweater);




// метод bind який робить копію функції з прив'язаним контекстом



// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };

// const hat = {
//     color: 'bleck',
  
// };

// const sweater = {
//     color: 'green',
    
// };


// робить копію і посилається на об'єкт hat
// тобіш привязався на завжди не змінюючи орігінал
// const changeHatColor = changeColor.bind(hat);
// changeHatColor();
// console.log(changeHatColor);

//  змінити колір   //




// const counter = {
//     value: 0,
//     incremet(value) {
//         console.log('increnet -> this', this);
//         this.value += value;
//     },
//     decremet(value) {
//         console.log('decrenet -> this', this);
//         this.value -= value;
//     },
// };


// const updateCounter = function (value, operation) {
//     // буде андефаінд
//     operation(value);
// };
// // робимо копію і привязуемося до цього обєкта
// updateCounter(10, counter.incremet.bind(counter));
// updateCounter(5, counter.decremet.bind(counter));
// console.log(counter);



//  приклад


const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;

    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1; 
    }
}

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');
// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);
// зміна назви кнопки
// decrementBtn.textContent = 'stop';


// додаємо слухача події
// і викликаємо функцію при кліке на кнопку


decrementBtn.addEventListener('click', function () {
    console.log('Натиснули на декременте');
    // підключаємо лічильник на зменшення
    counter.decrement();
    console.log(counter);
    // підключаємо лічильник візуально
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    console.log('Натиснули на інкременте');
    // підключаємо лічильник на збільшення
    counter.increment();
    console.log(counter);
        // підключаємо лічильник візуально
    valueEl.textContent = counter.value;
});












