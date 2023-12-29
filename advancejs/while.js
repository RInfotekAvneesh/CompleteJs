// let i = 0;
// while (i <= 20) {
//   console.log(`value is:${i}`);
//   i = i + 2;
// }
// let name = ["Avneesh", "Rajesh", "Ravi"];
// let arr = 0;

// while (arr < name.length) {
//   console.log(`value is:${name[arr]}`);
//   arr = arr + 1;
// }

// do while loop

// let score = 1;
// do {
//   console.log(`Score is ${score}`);
//   score++;
// } while (score <= 10);

// for of loop
// const num = [2, 3, 4, 5, 5, 67, 7, 8, 9, 9, 56, 777, 8888, 9999];
// for (const arr of num) {
//   console.log(arr);
// }
// const greeting = "Hello JavaScript";
// for (const greet of greeting) {
//   console.log(greet);
// }

// map

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United State of America");
map.set("Fr", "France");

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "NSA",
};

// error  myObject is not iterable

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }

for (const key in myObject) {
  console.log(`${key}  value :-${myObject[key]} `);
}
const programming = ["java", "c", "c++", "javascript"];

for (const res in programming) {
  console.log(`${res}:${programming[res]}`);
}

const map2 = new Map();
map2.set("IN", "INDIA");
map2.set("USA", "United State of America");
map2.set("Fr", "France");
for (const res1 in map2) {
  console.log(res1);
}

// forEach Loop

const coding = ["java", "javascript", "c", "c++"];
// coding.forEach(function (val) {
//   console.log(val);
// });
// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);
coding.forEach((item, index, arr) => {
  console.log(index + ":" + item);
});

const myCoding = [
  {
    languageName: "javaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: ".Java",
  },
  {
    languageName: "C Language",
    languageFileName: ".C",
  },
];
myCoding.forEach((item, index) => {
  console.log(index, item.languageName);
});

// forEach loop does not return anything

const movies = ["Bahubali", "Animal", "Devdas", "Sajan"];
const res = movies.forEach((item) => {
  console.log(item);
  return item;
});
console.log(res);

const myNum = [
  10, 22, 33, 444, 555, 6, 66, 77, 888, 999, 555, 66, 77, 77, 88, 88, 99, 999,
  4000,
];
// using filter
// const newNums = myNum.filter((num) => {
//   return num >= 30;
// });
// console.log(newNums);

// using forEach
// const newNum = [];
// myNum.forEach((num) => {
//   if (num > 77) {
//     newNum.push(num);
//   }
// });
// console.log(newNum);

// more use of filter
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);

// Map
const myNo = [3, 5, 6, 7, 7, 8, 8, 98, 99, 3434, 555, 6677];
const myNewNo = myNo.map((num) => {
  return num * 10;
});
console.log(myNewNo);
// Otp Generator
// function generateOTP() {
//   // Declare a digits variable
//   // which stores all digits
//   let digits = "0123456789";
//   let OTP = "";
//   for (let i = 0; i < 4; i++) {
//     OTP += digits[Math.floor(Math.random() * 10)];
//   }
//   return OTP;
// }

// console.log("OTP of 4 digits: ");
// console.log(generateOTP());

// Function to generate OTP
// function generateOTP() {
//   // Declare a digits variable
//   // which stores all digits
//   let digits = "0123456789abcdefghijklmnopqrstuvwxyz";
//   let OTP = "";
//   for (let i = 0; i < 6; i++) {
//     OTP += digits[Math.floor(Math.random() * 10)];
//   }
//   return OTP;
// }

// console.log("OTP of 6 digits: ");
// console.log(generateOTP());

// Function to generate OTP
// function generateOTP() {
//   // Declare a digits variable
//   // which stores all digits
//   let digits =
//     "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
//   let OTP = "";
//   for (let i = 0; i < 6; i++) {
//     OTP += digits[Math.floor(Math.random() * 10)];
//   }
//   return OTP;
// }

// console.log("OTP of 6 digits: ");
// console.log(generateOTP());

// map chaining
// const n1 = [10, 2, 3, 4, 5, 6, 77, 88, 99, 88];
// const n2 = n1
//   .map((m1) => m1 * 10)
//   .map((m2) => m2 + 10)
//   .map((m3) => m3 / 10)
//   .filter((m3) => m3 > 10);
// console.log(n2);

//reduce
const num1 = [1, 2, 3, 4, 5, 6, 6, 7, 8];
const total = num1.reduce(function (acc, currVal) {
  console.log(`acc:${acc} & currValue:${currVal}`);
  return acc + currVal;
}, 0);
console.log(total);
// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
