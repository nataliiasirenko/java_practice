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

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

// -------------
