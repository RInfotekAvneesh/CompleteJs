// if
if (true) {
}
const myEmail = [];
// if (myEmail) {
//   console.log(`I got email:${myEmail}`);
// } else {
//   console.log(`I did not get email`);
// }

// false value
//false,0,-0,BigInt  0n,"",null,undefined,NaN

// tuethy value
//"0","false"," ",[],{},function(){}
const userEmail = [];
if (userEmail.length === 0) {
  console.log("Array is Empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}

// Nullish Coaling Operator (??):null undefind
let val1;
val1 = 7 ?? 6;
val2 = null ?? 60;
val3 = undefined ?? 50;
val4 = undefined ?? null;
val5 = null ?? 20 ?? 40;
console.log(val5);

// Ternary Operator
// condition?true:false
const iceTeaPrice = 5000;
iceTeaPrice >= 1000
  ? console.log("less than 1000")
  : console.log("greater than 1000");
