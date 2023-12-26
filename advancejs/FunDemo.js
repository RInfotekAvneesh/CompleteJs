// function sum(a, b) {
//   const sum = a + b;
//   console.log("Sum is", sum);
// }
// sum(20, 30);
// const square = function (num) {
//   return num * num;
// };
// console.log(square(4040));
// Nested functions
function addSquare(a, b) {
  const sa = square(a);
  const sb = square(b);
  function square(m) {
    return m * m;
  }
  return sa + sb;
}
console.log(addSquare(10, 10));
