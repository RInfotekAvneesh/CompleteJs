// let name = "Avneesh             ";
// console.log(name.trim().length);

let heros = ["Ajay", "Akashay Kumar", "Salman Khan"];

let heroPower = {
  Baahubali: "Prabhas",
  Heropanti: "Tiger Sroof",

  getPower: function () {
    console.log(`Heros Power:${this.Heropanti}`);
  },
};
Object.prototype.hello = function () {
  console.log(`hello function is called`);
};
Array.prototype.Demo = function () {
  console.log(`demo function is called`);
};
String.prototype.stringHello = function () {
  console.log(`stringHello is Called`);
};
heroPower.hello();
heros.hello();
heros.Demo();

// inheritance
const user = {
  name: "Avneesh",
  email: "avneesh@gmail.com",
};

const Teacher = {
  makeVideo: true,
};
const TechnicalSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "Js Assignment",
  isFulltime: true,
  __proto__: TechnicalSupport,
};
Teacher.__proto__ = user;
//modern syntax
Object.setPrototypeOf(Teacher, TechnicalSupport);

let anOtherUser = "Ravi       ";
String.prototype.trueLength = function () {
  console.log(`${this.name}`);
  console.log(`TrueLength is ${this.trim().length}`);
};
anOtherUser.trueLength();
"AJAY".trueLength();
"Mukesh".trueLength();
