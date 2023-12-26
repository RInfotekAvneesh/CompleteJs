const user = {
  name: "Avneesh",
  age: 29,
  fullname: "Avneesh Kumar",
  location: "Ayodhya",
  email: "avneesh@gmail.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Saturday"],
};
console.log(user.name);
console.log(user["email"]);
console.log(user["fullname"]);
user.email = "akash@gmail.com";
// Object.freeze(user);
user.email = "ajay@gmail.com";
console.log(user.email);
console.log(user.fullname);
// function
user.invite = function () {
  console.log("calling invite functuion");
};
console.log(user.invite());
user.invite2 = function () {
  console.log(`hello invite,${this.fullname}`);
};
console.log(user.invite2());
