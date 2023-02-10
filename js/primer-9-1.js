// прототип обєкта
// Метод Object.create(obj)
//  створює і повертає новий об'єкт,
//  зв'язуючи його з об'єктом obj.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); //
// // { name: 'Манго', __proto__: animal }

// //  Метод isPrototypeOf() перевіряє, чи є об'єкт animal
// //  прототипом для dog і чи повертає true або false.
// console.log(animal.isPrototypeOf(dog)); // true

// // hasOwnProperty перевіряє чи власний ключ чи наслідуваний
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4



// Саме тому ми використовуємо метод obj.hasOwnProperty(prop),
//     який повертає true, якщо властивість
//      prop належить об'єкту obj,
//      а не його прототипу, інакше - false.
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }



// Метод Object.keys(obj)
// поверне масив тільки власних ключів
// об'єкта obj, тому, на практиці
// використовують саме його, а не for...in.
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);

// console.log(dogKeys); // ['barks']




// КЛАС


// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}



// КОНСТРУКТОР

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Манго", "mango@mail.com");
// console.log(mango);
// // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User("Поли", "poly@mail.com");
// console.log(poly);
// // { name: 'Поли', email: 'poly@mail.com' }




// Приватні властивості
// Інкапсуляція - це концепція, що дозволяє
// приховати внутрішні деталі класу.
// Користувач класу повинен отримувати доступ
//  тільки до публічного інтерфейсу -
//     набору публічних властивостей і
//     методів класу.

// В класах інкапсуляція реалізується приватними
// властивостями, доступ до яких можна отримати
// тільки всередині класу.
//     Припустимо, що пошта користувача повинна
//  бути недоступною для прямої зміни зовні,
//     тобто - приватною.Додаючи до імені
//     властивості символ #, ми робимо її
// приватною.Оголошення приватної властивості
// до ініціалізації в конструкторі - обов'язкове.


// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail());
//  // mango@supermail.com
// // console.log(mango.#email);
// // Виникне помилка, це приватна властивість



// Геттери і сеттери

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: "Манго", email: "mango@mail.com" });
// console.log(mango.email); // mango@mail.com
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com


// // Перевага в тому, що це методи, а значить,
// //     під час запису можна виконати додатковий
// // код, наприклад, з будь - якими перевірками,
// //     на відміну від виконання цієї ж операції
// //      безпосередньо з властивістю.
// set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }




// Статичні властивості


// Крім публічних і приватних властивостей
// майбутнього екземпляра, в класі можна
// оголосити його власні властивості,
//     доступні тільки класові, але не
//     його екземплярам - статичні
// властивості(static).Вони корисні
// для зберігання інформації, що
// стосується класу.
// Додамо класу користувача приватну властивість
// role - його роль, що визначає набір прав,
//     наприклад, адміністратор, редактор,
//     звичайний користувач тощо.Можливі ролі
//     користувачів будемо зберігати як статичну
//      властивість Roles -
//     об'єкт з властивостями.
// Статичні властивості оголошуються в тілі
// класу.Перед ім'ям властивості додається
// ключове слово static.

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles);
// // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"



// Статичні методи

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));





// Наслідування класів

// Ключове слово extends дозволяє реалізувати
//  наслідування класів, коли один
// клас(дочірній, похідний) наслідує
//  властивості і методи іншого
// класу(батьківського).

// class Child extends Parent {
//   // ...
// }


// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"



// Конструктор дочірнього класу


// Насамперед в конструкторі дочірнього класу
//  необхідно викликати спеціальну функцію
// super(аргументи) - це псевдонім конструктора
// батьківського класу.В іншому випадку, при
// спробі звернутися до this в конструкторі
//  дочірнього класу, виникне помилка.Під час
//   виклику конструктора батьківського класу
//    передаємо необхідні йому аргументи для
//    ініціалізації властивостей.

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'




// Методи дочірнього класу



// Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor);
// // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email);
// // 'mango@mail.com'
// editor.addPost("post-1");
// console.log(editor.posts); // ['post-1']



// додати та відняти в масивш імья

// class Storage {
//     constructor({ items }) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     for (let i = o; i < this.items.length; i += 1) {
//         if (itemToRemove === this.items[i]){
//         this.items.splice(i, 1);
//       }
//     }
//   }
  
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems());
//  // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems());
// // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems());
// // ["Nanitoids", "Antigravitator", "Droid"]

// //  розташування знаків рядка
// class StringBuilder {
//   constructor(initialValue){
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="






// class Car {
//   // Change code below this line
//     #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }





// class Car {
//   // Change code below this line
//   static Roles = {
//     MAX_PRICE: 50000,
//   }
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor({email, accessLevel}) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"




class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line
  blacklistedEmails = [];
  
  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
   blacklist(email) {
     this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email)
  }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true

