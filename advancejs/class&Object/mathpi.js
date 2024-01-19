const result = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(Math.PI);
console.log(result);
const user = {
  name: "avneesh",
  price: 39,
  isAvailable: true,
};
const res2 = Object.getOwnPropertyDescriptor(user, "name");
console.log(res2);

// Object.defineProperty(user, "name", {
//   writable: false,
//   enumerable: false,
// });
// const res3 = Object.getOwnPropertyDescriptor(user, "name");
// console.log(res3);
