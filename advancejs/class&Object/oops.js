const user = {
  username: "Avneesh",
  loginCount: 8,
  sigineIn: true,
  getUserDetails: function () {
    console.log("Got user details from Databases");
    // console.log(`username:${this.username}`);
    console.log(this);
  },
};
// console.log(user.getUserDetails());
// console.log(user.username);
// console.log(this);

// constructor function
function User(username, count, isLoggedIn) {
  this.username = username;
  this.count = count;
  this.isLoggedIn = isLoggedIn;
  return this;
}
// const user1 = User("Rakesh", 8, true);
// const user2 = User("Ramesh", 9, false);
// console.log(user1);
// using function constructor

const user1 = new User("Rakesh", 8, true);
const user2 = new User("Ramesh", 9, false);
console.log(typeof User());
