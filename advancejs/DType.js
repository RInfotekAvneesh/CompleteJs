// primitive data type
// 7 type: String ,Number,Boolean,null,undefined,symbol,BigInt

//refrence data type(non primitive)
// Array,Object,Functions

// const id = Symbol("123");
// const newId = Symbol("123");
// console.log(id == newId);

//##########################################
// Stack(primitive),Heap(Non-primitive)

const name = new String("Avneesh-Kumar-Jaiswal");
// for (let i = 0; i < zname.length; i++) {
//   console.log(name[i]);
// }
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(5));
console.log(name.indexOf("a"));
console.log(name.slice(5, 7));
console.log(name.substring(5, 7));
const newNAme = "       Rajessh     ";
console.log(newNAme);
console.log(newNAme.trim());
const url = "www.abc.com/avneesh";
console.log(url.replace("avneesh", "baby"));
console.log(url.includes("avneesh"));

console.log(name.split("-"));
const getName = name.split("-");
console.log(getName[0]);
console.log(name.strike());
console.log(name.bold());
//========================//

console.log("====================================");
const number = 55000;
console.log(number);
const balance = new Number(66060606);
console.log(balance.toString().length);
console.log(balance.toFixed(4));
const other = 134.70099;
console.log(other.toPrecision(6));
const otherNew = 100000000;
console.log(otherNew.toLocaleString("en-In"));
