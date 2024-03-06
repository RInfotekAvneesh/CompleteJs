function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(400, 200, 500));
const user = {
  username: "Avneesh",
  price: 300,
};
function handleObject(anyobject) {
  console.log(
    `Username id:${anyobject.username} and price is:${anyobject.price}`
  );
}
handleObject(user);
const myArray = [100, 200, 400, 800];
function returnSecondValue(getArray) {
  return getArray[0];
}
console.log(returnSecondValue(myArray));
