// array
const myArr = [10, 2, 6, 7, 8, 9, 3, 7, 9, 0, 5, 45, 4, 6, 7, 9, 0];
const myArr1 = [66, 77, 88, 999, 444, 666, 888, 999999];
const arr3 = myArr.concat(myArr1);
console.log(arr3);
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 == 0) {
    console.log(arr3[i]);
  }
}

// array methods

myArr.push(30);
console.log(myArr);
myArr.pop();
myArr.unshift(6767676);
myArr.pop();
myArr.unshift(56565);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(45));
console.log(myArr.indexOf(7));
const newArr = myArr1.join();
console.log(typeof myArr1);
console.log(typeof newArr);

// slice,splice
console.log("Avneesh", myArr1);
const myn1 = myArr1.slice(1, 3); // include Starting range but does not include last range
console.log(myn1);

const myn2 = myArr1.splice(1, 3); //  include starting range and last range
console.log("Avneesh Kumar", myArr1);
console.log(myn2);
