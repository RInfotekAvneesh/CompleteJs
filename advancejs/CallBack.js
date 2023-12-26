// const greet = (count) => {
//   for (let i = 0; i < count; i++) {
//     console.log("Hello Avneesh");
//   }
// };
// greet(10);
// const square = (num) => num * num;
// console.log(square(40));

// callback function

// function greet(name, callback) {
//   console.log("Hi" + " " + name);
//   callback();
// }
// // callback function
// function callMe() {
//   console.log("Hi I am Callback function");
// }
// greet("Avneesh", callMe);
const calculate = (a, b, operation) => {
  return operation(a, b);
};
const addition = calculate(10, 40, function (num1, num2) {
  return num1 + num2;
});
console.log(addition);
const substraction = calculate(59, 10, function (num1, num2) {
  return num1 - num2;
});
console.log(substraction);
const multiply = calculate(20, 30, function (num1, num2) {
  return num1 * num2;
});
console.log(multiply);
const divide = calculate(40, 20, function (num1, num2) {
  return num1 / num2;
});
console.log(divide);
