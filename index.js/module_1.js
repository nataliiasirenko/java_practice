// let productName = "Droid";
// let pricePerItem = 2000;

// // // Change code below this line
// pricePerItem += 1500;
//  productName = "Repair droid";

// --------------------------

// console.log(productName, pricePerItem)

// // const hotelName = prompt("Please enter desired hotel name");
// // console.log(hotelName);

// --------------------------

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = (pricePerItem * orderedQuantity);
// console.log(totalPrice)

// --------------------------

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message);

// --------------------------

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice =(pricePerDroid * orderedQuantity + deliveryFee);

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

// --------------------------

// function add(a, b, c) {

//   console.log(`Addition result equals ${a + b + c}`);

// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// --------------------------

// function calculateTotalPrice (orderedQuantity, pricePerItem) {

//   const totalPrice = (orderedQuantity * pricePerItem);

//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 170));

// --------------------------

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

//  const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee)
// const message =`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// --------------------------

// function isAdult(age) {

//     const passed = age >= 18;

//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// --------------------------

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';

//   const isMatch = password === 'jqueryismyjam';

//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// --------------------------

// function checkStorage(available, ordered) {
//   let message;
//   if(ordered > available){
//     message = `Not enough goods in stock!`;
//   }
//   else {
//     message = `Order is processed, our manager will contact you.`;
//   }

//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// --------------------------

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//     let totalPrice = pricePerDroid * orderedQuantity;
//     let customerCreditsLeft = customerCredits - totalPrice;

//   if (totalPrice > customerCredits){
//     message = `Insufficient funds!`;
//   }
//   else {
//      message =`You ordered ${orderedQuantity} droids, you have ${customerCreditsLeft} credits left`;

//   }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// --------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// --------------------------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//       message = `There are no products in the order!.`;
//   } else if (ordered > available) {
//       message = `Your order is too large, there are not enough items in stock!`;
//   }
//   else {
//       message = `The order is accepted, our manager will contact you`;
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// --------------------------

// function isNumberInRange(start, end, number) {
//   const isInRange = ( start <= number && number <= end);
//    // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(0, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// --------------------------

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType === `pro` || subType === `vip`); // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent(`pro`));
// console.log(checkIfCanAccessContent(`starter`));
// console.log(checkIfCanAccessContent(`vip`));
// console.log(checkIfCanAccessContent(`free`));

// --------------------------

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//   // Change code below this line
//  if(totalSpent >= 50000){
//   discount = GOLD_DISCOUNT;
//  } else if(totalSpent >= 20000){
//   discount = SILVER_DISCOUNT;
//  } else if (totalSpent >= 5000){
//    discount = BRONZE_DISCOUNT;
//  }else {discount = BASE_DISCOUNT;}

//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));

// --------------------------

// function checkStorage(available, ordered) {
//   let message;

//   message = ordered > available ? `Not enough goods in stock!` : `The order is accepted, our manager will contact you`;

//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// --------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code below this line

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// --------------------------

// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) {
//      case "starter":
//      price = 0;
//       break;

//     case "professional" :
//       price = 20;
//       break;

//     case "organization" :
//       price = 50;
//       break;
//   }

//   return price;
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

// --------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   switch (password) {
//     case null :
//     message = "Canceled by user!";
//     break;

//    case ADMIN_PASSWORD :
//     message = "Welcome!";
//       break;
//     default :
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// --------------------------

// function getShippingCost(country) {
//     let message;

//   // Change code below this line
//     switch (country) {

//     case `China`:
//     message = "Shipping to China will cost 100 credits";
//         break;

//     case `Chile` :
//     message = "Shipping to Chile will cost 260 credits";
//         break;

//     case `Australia`:
//     message = "Shipping to Australia will cost 170 credits";
//         break;

//     case `Jamaica`:
//     message = "Shipping to Jamaica will cost 120 credits";
//         break;

//     default :
//     message = "Sorry, there is no delivery to your country";
// }

//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost(`Australia`));
// console.log(getShippingCost(`Germany`));
// console.log(getShippingCost(`China`));
// console.log(getShippingCost(`Chile`));
// console.log(getShippingCost(`Jamaica`));
// console.log(getShippingCost(`Sweden`));

// --------------------------

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic;
// const firstElement = courseTopic;
// const lastElement = courseTopic;

// // Change code above this line
// console.log(courseTopic.length);
// console.log(courseTopic[0]);
// console.log(courseTopic[courseTopic.length - 1]);

// -----------

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[20];

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// --------------

// function getSubstring(string, length) {
//   const substring =  string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

// --------------

// function formatMessage(message, maxLength) {
//   let result;

// if (message.length < maxLength){
//  result = message;
// } else {
//     result = message.slice(0, maxLength, "...");
// }

//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// --------------

// function formatMessage(message, maxLength) {
//   let result;

// if (message.length <= maxLength)  {
//   result = message;
// } else {
//     result = message.slice(0, maxLength) + '...';
// }
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// --------------

// function checkForSpam(message) {
//   let result;
//   let normalizeMessage = message.toLowerCase();
//   result =
//     normalizeMessage.includes(`spam`) || normalizeMessage.includes(`sale`);

//   return result;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

// --------------

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// function checkForSpam(message) {
//   let result;

//   // Change code below this line
//   if (message.toLowerCase().includes(`spam `) || `sale`) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Latest technology news"));

// function duplicateEncode(word) {
//   //create a var to hold string value that IGNORES case
//   let string = word.toLowerCase();
//   //create a var to hold the finished string to return after it's looped through
//   let unique = "";
//   //loop through all letters in string
//   for (let i = 0; i < string.length; i += 1) {
//     //check for any characters that repeat
//     if (string.lastIndexOf(string[i]) === string.indexOf(string[i])) {
//       //for each character that never dupes, place (
//       unique += "(";
//     }
//     //for each character that IS a dupe, place )
//     else unique += ")";
//   }
//   //return the full string value where '(' are non duped and all')' are duped
//   return unique;
// }
// //test by printing this in the console
// console.log(duplicateEncode("BaRaban"));

// var uniqueInOrder = function (iterable) {
//   let arr = [];

//   for (let i = 0; i < iterable.length; i += 1) {
//     if (iterable[i] !== iterable[i + 1]) {
//       arr.push(iterable[i]);
//     }
//   }
//   return arr;
// };
// console.log(uniqueInOrder("ddffhggh"));

// function duplicateCount(text) {
//   let inputArr = text.toLowerCase().split("");
//   let resultObj = {};

//   for (let i = 0; i < inputArr.length; i++) {
//     resultObj.hasOwnProperty(inputArr[i])
//       ? (resultObj[inputArr[i]].count += 1)
//       : (resultObj[inputArr[i]] = { count: 1 });
//   }

//   let result = 0;

//   for (let key in resultObj) {
//     if (resultObj[key].count > 1) {
//       result += 1;
//     }
//   }

//   return result;
// }
// console.log(duplicateCount("ii77"));

// function duplicateCount(text) {
//   const tracker = {};
//   const dupes = [];

//   for (const char of text.toLowerCase()) {
//     if (tracker.hasOwnProperty(char)) {
//       tracker[char]++;
//     } else {
//       tracker[char] = 1;
//     }
//   }

//   for (const prop in tracker) {
//     if (tracker[prop] > 1) dupes.push(prop);
//   }

//   return dupes.length;
// }
// console.log(duplicateCount("ghyyyytttuuuuy"));

// function checkForSpam(message) {
//   let result;
//   const normalizedMessage = message.toLowerCase();
//   // Change code below this line

//   if (normalizedMessage.includes(`spam`) || `sale`) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("Get best sale offers now"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("Get best sale offers now"));

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// const target = 4;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   const creditLeft = customerCredits - totalPrice;
//   if (customerCredits >= totalPrice) {
//     message = `"You ordered ${orderedQuantity} droids, you have ${creditLeft} credits left"`;
//   } else {
//     message = `Insufficient funds!`;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

//
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered > available
//       ? `Not enough goods in stock!`
//       : `The order is accepted, our manager will contact you`;
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 100));

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
// console.log(checkForSpam("Latest technology Spam news"));
