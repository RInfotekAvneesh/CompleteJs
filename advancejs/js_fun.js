// function addTwoNumber(a, b) {
//   console.log(a + b);
// }
// const result = addTwoNumber(30, 60);
//console.log(result)

// function addTwoNumber(a, b) {
//   return a + b;
// }
// const result = addTwoNumber(30, 60);
// console.log(result);

function loginMessage(userName = "avneesh") {
  if (!userName) {
    console.log("please enter user name");
    return;
  }
  //   if (userName == undefined) {
  //     console.log("please enter user name");
  //   }
  return `${userName} just logged in`;
}
// const res = loginMessage("avneesh");
const res = loginMessage("rohan");
console.log(res);
//function pass as argument

function calculatePrice(...number) {
  return number;
}
const result = calculatePrice(30, 4, 5, 6, 7, 8, 9, 9);
console.log(result);
const user = {
  username: "avneesh",
  price: 949494,
};
// function pass object as argument
function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
handleObject({ username: "Rajesh", price: 49494 });

// function array pass as argument
const arr = [10, 2, 4, 5, 6, 7, 9, 9, 99, 999, 9998878];
function returnSecondValue(newArray) {
  return newArray[1];
}
// console.log(returnSecondValue(arr));
console.log(returnSecondValue([40, 20, 50, 60, 70]));
