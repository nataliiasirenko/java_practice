// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value.padEnd(this.value.length + 1, str);
//   }

//   padStart(str) {
//     this.value = this.value.padStart(this.value.length + 1, str);
//   }

//   padBoth(str) {
//     this.value = this.value.padStart(this.value.length + 1, str);
//     this.value = this.value.padEnd(this.value.length + 1, str);
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

// // Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям,
// але й ціною, а в майбутньому, можливо, й іншими характеристиками.
// Тому зараз у властивості potions буде зберігатися масив об'єктів з
//  наступними властивостями.

// // {
// //   name: "Dragon breath",
// //   price: 700
// // }
// // Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони
// працювали не з масивом рядків, а з масивом об'єктів.

// // getPotions() - метод для отримання всього зілля. Повертає значення властивості
// potions.
// // addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в
// масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі.
// В іншому випадку повертається рядок.
// // removePotion(potionName) - видаляє об'єкт зілля з ім'ям
// potionName з масиву у властивості potions.
//   // updatePotionName(oldName, newName) - оновлює властивість name
//   об'єкта-зілля з назвою oldName на newName в масиві potions

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       for (const potionItem of this.potions) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }

//       this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//       for (let i = 0; i < this.potions.length; i += 1) {
//         console.log(this.potions[i]);
//         if (potionName === this.potions[i].name) {
//           console.log("мы нашли такой продукт");
//           this.potions.splice(i, 1);
//         }
//       }
//     },
//     updatePotionName(oldName, newName) {
//       for (const potion of this.potions) {
//         if (potion.name === oldName) {
//           potion.name = newName;
//           return;
//         }
//       }
//       // Change code above this line
//     },
//   };

// class Car {
//     // Change code below this line
//   #brand;
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//   getBrand(){
//     return this.#brand;
//   }
//   changeBrand(newBrand){
//       this.#brand = newBrand;
//     }
//     // Change code above this line
//   }

// class StringBuilder {
//   #value;
//   // Change code below this line

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
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
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
