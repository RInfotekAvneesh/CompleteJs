const user = {
  username: "avneesh",
  price: 4548585,
  welcome: function () {
    console.log(`${this.username},welcome to Guest`);
    console.log(this);
  },
};
// user.welcome();
// user.username = "ajay";
// user.welcome();
// console.log(this);

// function chai() {
//   let name = "ajay";
//   console.log(this.name);
// }
// const chai = function () {
//   let name = "ajay";
//   console.log(this.name);
// };
const chai = () => {
  let name = "ajay";
  console.log(this);
};

chai();
