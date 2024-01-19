// const person = {
//   fullName: function () {
//     return this.name + " " + this.Age + " " + this.City;
//   },
// };
// let person1 = {
//   name: "Raj Kumar",
//   Age: 26,
//   City: "Ayodhya",
// };
// let person2 = {
//   name: "Ravi Kumar",
//   Age: 29,
//   City: "Ayodhya",
// };
// let person3 = {
//   name: " Rakesh Kumar",
//   Age: 27,
//   City: "Ayodhya",
// };
// // call method with argument

// res = person.fullName.call(person2);
// console.log(res);
// // const person = {
// //   fullName: function (city, country) {
// //     return this.firstName + " " + this.lastName + "," + city + "," + country;
// //   },
// // };

// // const person1 = {
// //   firstName: "John",
// //   lastName: "Doe",
// // };

// // res = person.fullName.call(person1, "Oslo", "Norway");
// // console.log(res);

function setName(userName) {
  this.userName = userName;
}
function createUser(userName, email, password) {
  this.email = email;
  this.password = password;
  setName.call(this, userName);
}
const user1 = new createUser("avneesh", "avneesh@gmail.com", "123");
console.log(user1);
