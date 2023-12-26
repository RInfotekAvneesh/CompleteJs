let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

console.log(myDate.getDate());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.getMonth() + 1);
// let myCreatedDate = new Date(2023, 11, 17);
let myCreatedDate = new Date(2023, 11, 17, 5, 3);
console.log(myCreatedDate.toLocaleString());

let myDate1 = new Date("01-14-2023");
console.log(myDate1.toString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(Math.floor(Date.now() / 1000));
let myNewDate = new Date();
console.log(myNewDate.getMinutes());
