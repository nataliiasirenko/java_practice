// function checkAge(age) {
//     if (age >= 18) { // Change this line
//         return "You are an adult";
//     }

//         return "You are a minor"
//     }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(18));

//  ---------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";

// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//  ---------------

// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//       return "Your order is empty!";
//   } else if (ordered > available) {
//      return "Your order is too large, not enough goods in stock!";
//   }
//       return "The order is accepted, our manager will contact you";
//   }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//  ---------------

// const fruits = [`apple`, `plum`, `pear`, `orange`];

// console.log(fruits);

//  ---------------

// const fruits = [`apple`, `plum`, `pear`, `orange`];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// -----------------

// const fruits = [`apple`, `plum`, `pear`, `orange`];

// // Write your code under this line
// fruits[1] = `peach`;
// fruits[3] = `banana`;

// console.log(fruits[1]);

// -----------------

// const fruits = [`apple`, `peach`, `pear`, `banana`];
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// -----------------
// const fruits = [`apple`, `peach`, `pear`, `banana`];

// const lastElementIndex = fruits.length - 1;

// console.log(lastElementIndex);

// -----------------

// const fruits = [`apple`, `peach`, `pear`, `banana`];

// const lastElementIndex = fruits.length - 1;

// const lastElement = fruits[lastElementIndex];

// console.log(fruits[lastElementIndex]);

// -----------------

// function getExtremeElements(array) {

//   array = [1, 2, 3, 4, 5];
//   array = [`Earth`, `Mars`, `Venus`];
//   array = [`apple`, `peach`, `pear`, `banana`];

//   firstElement = array[0];
//   lastElement = array.length - 1;
// }
// console.log(getExtremeElements[firstElement], [lastElement]);

// -----------------

// function getExtremeElements(array) {
//   // Change code below this line
// let result;
//   let firstElement;
//   let lastElement;
//   firstElement = array[0];
//   lastElement = array[array.length-1]
//   result = [firstElement,lastElement];
// return result;
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// -----------------

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// -----------------

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

// const wordsInMessage = message.split(" ");
// const messageLendth = wordsInMessage.length;
// const totalPrice = messageLendth * pricePerWord ;

// return totalPrice;
//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// -----------------

// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);

//   // Change code below this line

//   // Change code above this line
//   return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

// -----------------
// !!!!!!!!!!!!!!!!!!!!!!!!!!

// function slugify(title) {
//   // Change code below this line
//   const string = title.toLowerCase();
//   const normalizedString = string.split(" ");
//   const slugTitle = normalizedString.join("-");

//   // Change code above this line
//   return slugTitle;
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// -----------------

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// -----------------

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

// -----------------

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change the code below this line
// const  newArray = firstArray.concat(secondArray);

// if(newArray.length > maxLength){
//   newArray.length = maxLength;
// }
// return newArray;
//     // Change code above this line
//   }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// --------------------

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change the code below this line
//   const newArray = firstArray.concat(secondArray);
//   const newArrayLength = newArray.length;

//   if (newArrayLength >= maxLength) {
//     return newArray.slice(0, maxLength);
//     // Change code above this line
//   }
//   return newArray;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// --------------------

// function calculateTotal(number) {
//  // Change code below this line
// let total = 0;
// let i = 0;

//   for (let i = 0; i <= number; i += 1) { // Change this line
//  total += i;
// }
// return total;
// }

//   // Change code above this line

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());
// --------------------

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// --------------------

// function calculateTotalPrice(order) {
//   let total = 0;

//   // Change code below this line
//   for (const value of order) {
//     total += value;
//   }
//   // Change code above this line
//   return total;

// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

// --------------------

// function findLongestWord(string) {
//   // Change code below this line
//   const word = string.split(` `);
//   let longestWord = word[0];
//   for (i = 1; i < word.length; i += 1) {
//     if (word[i].length > longestWord.length) {
//       longestWord = word[i];
//     }
//   }
//         return longestWord;
//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// --------------------

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i=min; i<=max; i+=1) {
//   if (i%1===0) {
//     numbers.push(i);
//   }
// }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// --------------------

// function filterArray(numbers, value) {
//    // Change code below this line
//   const newArray = [];

//   for (let i = 0; i < numbers.length; i += 1){
//     if ( numbers[i] > value)
//       newArray.push(numbers[i]);
//     }

//   return newArray;

//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// --------------------

// function checkFruit(fruit) {
//   const fruits = [`apple`, `plum`, `pear`, `orange`];

//   return fruits.includes(fruit);
// }

// console.log(checkFruit(`plum`));
// console.log(checkFruit(`mandarin`));
// console.log(checkFruit(`pear`));
// console.log(checkFruit(`Pear`));
// console.log(checkFruit(`apple`));

// --------------------

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let arrayCommon = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       arrayCommon.push(array1[i]);
//     }

//   }

// return arrayCommon;
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray = [];
//   for (const number of array1) {
//     if (array2.includes(number)) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// // --------------------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for ( const price of order) {
//     total += price;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// --------------------

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// --------------------

// function getEvenNumbers(start, end) {
//    // Change code below this line
// const array = [];
//   for (let i = start; i <= end; i += 1){
//     if (i % 2 === 0){
//       array.push(i);
//     }
//   }

// return array;

//     // Change code above this line
//   }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers());

// --------------------

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// --------------------

// //

// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (var i = 0; i < str.length; i++) {
//     for (var j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j]) {
//         vowelsCount++;
//       }
//     }
//   }

//   return vowelsCount;
// }

// / перебираємо масив

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// Цикл for...of

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// -----------------------------------------------
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Mango";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// --------------------------------------------------------

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

//  використання аргументів

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5));

// Перетворення псеідомасиву в масив
// function fn() {
//   // Змінна args буде містити повноцінний масив
//   const args = Array.from(arguments);
// }

// Використовуючи операцію ... (rest), вона дозволяє зібрати будь-яку
// кількість елементів, у нашому випадку аргументів, в масив, і
// зберегти його в змінну.

// function fn(...args) {
//   // Змінна args буде містити повноцінний масив
// }
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// function add(a, b, c) {
//   const result = a + b + c;

//   console.log(`Addition result equals ${result}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function getExtremeElements(array) {
//   // Change code below this line
//   let result;
//   let firstElement;
//   let lastElement;
//   firstElement = array[0];
//   lastElement = array[array.length - 1];
//   result = [firstElement, lastElement];
//   return result;
//   // Change code above this line
// }

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

//
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   if (fruits.includes(fruit)) {
//     return true; // Change this line
//   } else {
//     return false;
//   }
// }

// console.log(checkFruit("plu"));

// function includes(array, value) {
//   // Change code below this line

//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   if (
//     message.toLowerCase().includes(`spam`) ||
//     message.toLowerCase().includes(`sale`)
//   ) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Get best  offers now!"));

//
