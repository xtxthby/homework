// const cart = {
//     items: [],
//     getItems() {},
//     add(product) {},
//     remove(productName) {},
//     clear() {},
//     countTotalPrice() {},
//     increseQuantity(productName) { },
//     decreaseQuantity(productName) {},
// }

// console.table(cart.getItems());

// cart.add({ name: "", price: 50 });
// cart.add({ name: "", price: 50 });
// cart.add({ name: "", price: 50 });
// cart.add({ name: "", price: 50 });

// console.table(cart.getItems());


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



// деструктурізація через entries
const authors = {
    kiwi: 4,
    poyu: 7,
    ajax: 9,
    mango: 6,
};

const entries = Object.entries(authors);
// це масив тому дестру... масиву
console.log(entries);
for (const entry of entries) {
    const [name, rating] = entry;
}



console.log(name, rating);




