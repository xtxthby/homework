

// const Car = function ({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };
// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };

// Car.description = 'Клас описання авто';

// Car.logInfo = function (carObj) {
//     console.log('Car.logInfo -> carOb', carObj);
// };

// const car = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });




// // через класи


// class Car1 {
//     constructor({brand, model, price} = {}) {
//         console.log('Виконується constructor');
       
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     updateModel(newModel) {
//         this.model = newModel;
//     }
// }

// console.log(Car1);

// const carInstance = new Car1({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// console.log(carInstance);



// статичні властивості
// static

// class Car1 {
//     static description = 'Клас описування авто';
//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }

//     constructor({brand, model, price} = {}) {
//         console.log('Виконується constructor');
       
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     updateModel(newModel) {
//         this.model = newModel;
//     }
// }

// console.dir(Car1);
// console.log(Car1.description);

// const carInstance = new Car1({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// // console.log(carInstance);
// Car1.logInfo(carInstance);


// приватні властивости

// class Car1 {
//     static description = 'Клас описування авто';
//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }
//     #test = 'test';

//     constructor({brand, model, price} = {}) {
//         console.log('Виконується constructor');
       
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     updateModel(newModel) {
//         this.model = newModel;
//     }
// }

// console.dir(Car1);
// console.log(Car1.description);

// const carInstance = new Car1({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// // console.log(carInstance);
// Car1.logInfo(carInstance);


// Обява публічної властивости

// class Car1 {
//     static description = 'Клас описування авто';
//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }
//     #test = 'test';

//     myPublicField = 555;


//     constructor({brand, model, price} = {}) {
//         console.log('Виконується constructor');
       
//         this.brand = brand;
//         this.model = model;
//         this.price = price;

//         // this.myPublicField = 555;
//     }

//     // також метод можна зробити публічним
//     // тоды воно не буде на прототайпі
//     changePrice = newPrice => {
//         this.price = newPrice;
//     }

//     updateModel(newModel) {
//         this.model = newModel;
//     }
// }

// console.dir(Car1);
// console.log(Car1.description);

// const carInstance = new Car1({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// // console.log(carInstance);
// Car1.logInfo(carInstance);




// геттери і сеттери
// старий варіант


// class Car1 {
//     static description = 'Клас описування авто';
//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }


//     constructor({brand, model, price} = {}) {
//         console.log('Виконується constructor');
       
//         this.brand = brand;
//         this.model = model;
//         this.price = price;

//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     setModel(newModel) {
//         this.model = newModel;
//     }

//     getModal(newModel) {
//         return this.model;
//     }
     
// }

// // console.dir(Car1);
// // console.log(Car1.description);

// const carInstance = new Car1({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// // console.log(carInstance);
// console.log(carInstance.getModal());
// carInstance.setModel('Q4');
// console.log(carInstance.getModal());


//новий варіант


// class Car1 {
//     static description = 'Клас описування авто';
//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }


//     constructor({brand, model, price} = {}) {
//         console.log('Виконується constructor');
       
//         this.brand = brand;
//         this.model = model;
//         this.price = price;

//     }
//      set priceM(newPrice) {
//         this.price = newPrice;
//     }

//     get priceM() {
//         return this.price;
//     }

//     set modelM(newModel) {
//         this.model = newModel;
//     }

//     get modelM() {
//         return this.model;
//     }
     
// }

// // console.dir(Car1);
// // console.log(Car1.description);

// const carInstance = new Car1({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// console.log(carInstance);

// // тут визиваємо get
// console.log(carInstance.modelM);

// // тут міняємо в сетері set

// carInstance.model = 'Q4';
// console.log(carInstance.modelM);


// console.log(carInstance.priceM);
// carInstance.price = 50000;
// console.log(carInstance.priceM);



// наслідування


// два однакові класи

// class Warrtor {
//     constructor() {
//         this.name = '';
//         this.xp = '';
//         this.weapon = '';
//     }

//     gainXp() {
        
//     }
// }


// class Mage {
//     constructor() {
//         this.name = '';
//         this.xp = '';
//         this.spelis = [];
//     }

//     gainXp() {
        
//     }
// }

//   зробимо один клас батько
// шнші хай наслідують


class Hero {

    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} отримує ${amount} досвіду`);
        this.xp += amount;   
    }
}

// const mango = new Hero({ name: 'mango', xp: 1000 });
// console.log(mango);
// mango.gainXp(1000);

class Warrior extends Hero {
    constructor({ weapon, ...restProps } = {}) {
        super(restProps);
        this.weapon = weapon;
    }
    attack() {
       console.log(`${this.name} атакує використовуя ${this.weapon} `); 
    }


}

class Mage extends Hero {
    constructor({ spells, ...restProps } = {}) {
        super(restProps);
        this.spells = spells;
    }
    cast() {
       console.log(`${this.name} щось там кастуе `); 
    }


}



const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
console.log(mango);
mango.gainXp(1000);

mango.attack();
mango.gainXp(1000);



const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаєрбол'] });
console.log(poly);
poly.cast();
poly.gainXp(299);

// цепочки послідовності
// console.log('Warrior.prototype', Warrior.prototype);
// console.log('Hero.prototype', Hero.prototype);

// console.log(mango.__proto__ === Warrior.prototype);
// console.log('Warrior.prototype', Warrior.prototype);
// console.log(Warrior.prototype.__proto__ === Hero.prototype);
