function multiply(num) {
  return num * 5;
}
multiply.power = 5;
console.log(multiply(40));
console.log(multiply.power);
console.log(multiply.prototype);

function createUser(userName, score) {
  this.userName = userName;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is :${this.score}`);
};
const obj1 = new createUser("Avneesh", 46);
const obj2 = new createUser("Ajay", 36);
obj1.printMe();
obj2.printMe();
