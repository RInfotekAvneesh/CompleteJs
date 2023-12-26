const tinderUser = new Object(); //singleton object
//const tinderUser = {}; //non singleton object
tinderUser.id = "123";
tinderUser.name = "Avneesh Kumar";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);
const regUser = {
  name: "Ajay",
  email: "ajay#gmail.com",
  fullname: {
    userFullname: {
      firstname: "avneesh",
      lastname: "jaiswal",
    },
  },
};
// console.log(regUser.fullname.userFullname.firstname);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
//const obj3 = { obj1, obj2 };
//console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);
// const result = { ...obj1, ...obj2 };
// console.log(result);
const user = [
  {
    Id: 1,
    name: "ajay",
    email: "ajay@gmail.com",
  },
];
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
  courseName: "Java",
  duration: "6 month",
  price: "3000",
};
const { duration, courseName, price } = course;
console.log(duration, courseName, price);
console.log(course.courseName, course.duration);
