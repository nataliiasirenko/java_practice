

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

function checkFruit(fruit) {
  const fruits = [`apple`, `plum`, `pear`, `orange`];

  return fruits.includes(fruit);
}

console.log(checkFruit(`plum`));
console.log(checkFruit(`mandarin`));
console.log(checkFruit(`pear`));
console.log(checkFruit(`Pear`));
console.log(checkFruit(`apple`));

// --------------------