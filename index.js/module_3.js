// const apartment = {
//   imgUrl: `https://via.placeholder.com/640x480`,
// descr: `Spacious apartment in the city center`,
// rating: 4,
// price: 2153,
// tags: ["premium", "promoted", "top"],
// };

// console.log(apartment.rating);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for ( key in apartment) {

//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(key);
// console.log(apartment[key]);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//    values.push(apartment[key]);
//   }
// }
// console.log(keys);
// console.log(apartment[keys]);

// -------------

// function countProps(object){
//   let propCount = 0;
//   // Change code below this line
//     for (const objects in object) {
//       if (object.hasOwnProperty(objects)){
//           propCount += 1;

// }
//   }
// return propCount;
// }

// // console.log(countProps({ name: "Mango", age: 2 }));
// // console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps(countProps({}));

// -------------

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key])
// }

//   console.log(keys);
//   console.log(values);
// // }

// -------------

// function countProps(object) {
//   // Change code below this line

//   let propCount = Object.keys(object).length;

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: "Mango", age: 2 }));

// -------------

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// -------------

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const user = {
//        name: 0,
//     }
//     for (const salary of Object.values(salaries)) {
//         totalSalary += salary;
//     }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// -------------

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// // Change code below this line
// for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }
// console.log(hexColors, rgbColors);

// -------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//     for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;

// }

// console.log(getProductPrice("Radar"));
// Change code above this line

// -------------

//   const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   newArray = [];
//     for (const product of products) {
//         if (product[propName]) {
//             newArray.push(product[propName]);
//         }

//     }

//    return newArray;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));

// -------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   // Change code below this line

//     for (const product of products) {
//         if (product.name === productName){
//             return product.price * product.quantity;
//         }
//     }
//     return 0;
// }
// console.log(calculateTotalPrice("Radar"));

// -------------

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// -------------

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// console.log(highYesterday);
// console.log(highToday);
// console.log(highTomorrow);
// console.log(highIcon);
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);
// -------------

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },

//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// ------------------------------
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore, worstScore);

// ------------------------------
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//   // Change code below this line
//   const newMakeTask = { completed, category, priority, ...data };
//   console.log(newMakeTask);

//   return newMakeTask;
// }

// ------------------------------
// Change code below this line
// function add(...args) {
//   let sum = 0;
//   for (const item of args) {
//     sum += item;
//   }
//   return sum;
//   // Change code above this line
// }

// console.log(add(12, 4, 11, 48));
// ------------------------------

// Change code below this line
// function addOverNum(...args) {
//   let total = 0;
//   for (let i = 0; i > args.length[0]; i += 1) {
//     total += i;
//   }
//   for (const arg of args) {
//     if (arg > args[0]) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// ------------------------------

// // Change code below this line
// function findMatches(numbers, ...args) {
//   const matches = []; // Don't change this line
//   for (const number of numbers) {
//     if (args.includes(number)) {
//       matches.push(number);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// ------------------------------

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],

//   getBooks(books) {
//     console.log("Returning all books");
//   },

//   addBook(bookName) {
//     console.log(`Adding book ${bookName}`);
//   },

//   removeBook(bookName) {
//     console.log(`Deleting book ${bookName}`);
//   },

//   updateBook(oldName, newName) {
//     console.log(`Updating book ${oldName} to ${newName}`);
//   },
// };

// bookShelf.getBooks();
// bookShelf.addBook("Haze");
// bookShelf.removeBook("Red sunset");
// bookShelf.updateBook("Sands of dune", "Dune");

// ------------------------------

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     return this.books.splice(bookIndex, 1, newName);
//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");

// console.log(bookShelf.books);

// ------------------------------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad);
// ------------------------------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion("Invisibility");

// console.log(atTheOldToad.potions);

// ------------------------------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     return this.potions.splice(potionIndex, 1);
//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.potions);

// ------------------------------

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const nameIndex = this.potions.indexOf(oldName);
//     return this.potions.splice(nameIndex, 1, newName);

//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");

// console.log(atTheOldToad.potions);

// ------------------------------

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
//     for (const potionItem of this.potions) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       console.log(this.potions[i]);
//       if (potionName === this.potions[i].name) {
//         console.log("мы нашли такой продукт");
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//     // Change code above this line
//   },
// };
