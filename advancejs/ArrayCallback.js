const arr = [10, 2, 3, 4, 5, 6, 7, 8, 23, 4, 5, 7, 8, 90, -20, -50];
const firstNeg = (num) => {
  return num < 0;
};
// const result = arr.find(firstNeg);
// const result = arr.findIndex(firstNeg);
arr.forEach((num, i) => {
  console.log("Array Number:" + "index:" + i, num);
});
