// const cart = {
//     items: [],
//     getItems() {
//         // повертаемо значення items в через this
//         // поки порожній масив
//         return this.items;
//     },
//     add(product) {
//         // додавання однакового товару
//         // або кількість console.log(item);
//          console.table(this.items);
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 console.log('такий вже є', product.name);
//                 // додаю
//                 item.quantity += 1;
//                 // вихожу щоб далы не додавалося
//                 return;
//             }
//         }
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         }
//         this.items.push(newProduct);

//         // пушим в items продукт product
//         // з низу з cart.add
//         // this.items.push(product);
//     },
    // remove(productName) {
    //     for (const item of this.items) {
    //         console.log(item);
    //         if (productName === item.name) {
    //             console.log("знайшли цей продукт: ", productName);
    //         }
    //     }
    // },
    // видалення продукту
    //  remove(productName) {
    //      for (let i = 0; i < this.items.length; i += 1) {
    //         console.log(this.items[i]);
    //         if (productName === this.items[i].name) {
    //             console.log("знайшли цей продукт: ", productName);
    //         }
    //     }
    // },
    // те саме але з локальною змінною
    //    remove(productName) {
    //        for (let i = 0; i < this.items.length; i += 1) {
    //            const item = this.items[i];
    //         console.log(this.items[i]);
    //         if (productName === item.name) {
    //             console.log("знайшли цей продукт: ", productName);
    //         }
    //     }
    // те саме але з деструкторизацією
    // remove(productName) {
    //     const { items } = this;
    //     for (let i = 0; i < items.length; i += 1) {
    //         const {name} = items[i];
    //         console.log(this.items[i]);
    //         if (productName === name) {
    //             console.log("знайшли цей продукт: ", productName);
    //             console.log('індекс: ', i);
    //             // видали в items на i 1-ин елемент
    //             items.splice(i, 1);
    //         }
    //     }
    // },
    //  видалення з корзини
    // clear() {
    //     this.items = [];
    // },
    // метод який рахує суму усіх продуктів
    // countTotalPrice() {
    //     // console.log(this.items);

    //     // let total = 0;

    //     // for (const item of this.items) {
    //     //     console.log(item);
    //     //     total += item.price;
    //     // }
    //     // return total;

    //     // те саме
    //      console.log(this.items);
    //     const { items } = this;
    //     let total = 0;

    //     for (const {price, quantity} of items) {
    //         console.log(price);
    //         total += price * quantity;
    //     }
    //     return total;
    // },
    // increseQuantity(productName) { },
    // decreaseQuantity(productName) {},
// }

// console.log(cart.getItems());

// cart.add({ name: "Apel", price: 60 });
// cart.add({ name: "Apel", price: 60 });
// cart.add({ name: "Strawbery", price: 110 });
// cart.add({ name: "Strawbery", price: 110 });
// cart.add({ name: "Strawbery", price: 110 });
// cart.add({ name: "Pear", price: 50 });
// cart.add({ name: "Lemon", price: 50 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove("Pear");
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());





//  розпилення яке було раніше
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);

// console.log(c);

// нова версія

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = { ...a, ...b };
// console.log(c);

// додавання

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = { name: 'Mango', ...a, ...b };
// console.log(c);


// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = { ...a, x: 10, ...b, y: 20, };
// console.log(c);


// const defaulSettings = {
//     thrme: 'light',
//     shownotifications: true,
//     hideSidebar: false,
// };

// const userSettings = {
//     shownotifications: false,
//     hideSidebar: true,
// };

// const finalSettings = {
//     ...defaulSettings,
//     ...userSettings,
// };

// console.log(finalSettings);


// деструктуризація об'єкту

// const playlist = {
//     name: 'мій лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// const {rating, tracks } = playlist;

// console.log(
//     rating,
//     tracks,
// );



//  додавання значення по дефолту

// const playlist = {
//     name: 'мій лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// const {rating, tracks, author = 'user' } = playlist;

// console.log(author);


// зміна назви змінної в яку присвоїться
// значення попередньої змінної

// const playlist = {
//     name: 'мій лист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// const { rating, tracks: namberOfTracks, author = 'user' } = playlist;

// console.log(namberOfTracks);


// присвоєння дефолтного значення
//  якщо в tracks не буде значення то присвоється 0
// в нову назву


// const playlist = {
//     name: 'мій лист',
//     rating: 5,
//     // tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// const { rating, tracks: namberOfTracks = 0, author = 'user' } = playlist;

// console.log(namberOfTracks);

// //  глубока деструктуризація
// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: 'Ocho Rios, Jamaica',
//     avatar: "https://via.placeholder.com/640/480",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     name,
//     tag,
//     avatar,
//     stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name, tag, avatar, followers, userLikes)


// деструктуризація масива
// вибрати тільки два значення
// const rgb = [255, 100, 80];
// const [red, , blue] = rgb;
// console.log(red, blue);

// проста версія як знайти
// наібільше число


// const authors = {
//     kiwi: 4,
//     poyu: 7,
//     ajax: 9,
//     mango: 6,
// };

// const rating = Object.values(authors);
// console.log(Math.max(...rating));



// // деструктурізація через entries
// const authors = {
//     kiwi: 4,
//     poyu: 7,
//     ajax: 9,
//     mango: 6,
// };

// const entries = Object.entries(authors);
// // це масив тому дестру... масиву
// // console.log(entries);
// // for (const entry of entries) {
// //     // console.log(entry);
// //     const [name, rating] = entry;
// //     console.log(name, rating);
// // }
// //   те саме
// for (const [name, rating] of entries) {
//     // console.log(entry);

//     console.log(name, rating);
// }


// ми хочемо не всі дані деструктузувати
// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: 'Ocho Rios, Jamaica',
//     avatar: "https://via.placeholder.com/640/480",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location, ...restProps } = user;


// console.log(name, tag, location);
// console.log(restProps);


// деструктуризація в функції

// const showProfileInfo = function (userProfile) {
//     console.log(userProfile);
//     const {
//         name,
//         tag,
//         location,
//         avatar,
//         stats: { followers, views, likes },
//     } = userProfile;
//     console.log(name, tag, location, avatar, followers, views, likes);
// }

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: 'Ocho Rios, Jamaica',
//     avatar: "https://via.placeholder.com/640/480",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };


// showProfileInfo(user);


//  другий варіант
// також можна використовувати
// restProps

// const showProfileInfo = function ({
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },}) {
   
//     console.log(name, tag, location, avatar, followers, views, likes);
// }

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: 'Ocho Rios, Jamaica',
//     avatar: "https://via.placeholder.com/640/480",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };


// showProfileInfo(user);





// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   return {...{completed, category, priority}, ...data,};
//   // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));


// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
//   // Change code above this line
// }

// add(12, 4, 11, 48);

// function addOverNum(num, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > num) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const element of array) {
//     if (args.includes(element)) {
//       matches.push(element);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);



// // видалення елементу
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     for (let i = 0; i < this.potions.length; i += 1){
//       if (potionName === this.potions[i]){
//          this.potions.splice(i, 1);
//       }
//     }


//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));



// віднімання і додавання
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     for (let i = 0; i < this.potions.length; i += 1){
//       if (oldName === this.potions[i]) {
//         this.potions.splice(i, 1, newName);
//       }
//     }// Change code above this line
//   },
// };

// atTheOldToad.updatePotionName("Stone skin", "Invisibility")


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };



