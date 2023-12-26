function one() {
  const user = "Ajay";
  function two() {
    const website = "youtube";
    console.log(user);

    function three() {
      const user2 = "babay";
      console.log(user2);
      console.log(website);
    }
    three();
  }
  //console.log(website);
  two();
}
one();

function toAdd(num) {
  return num + 4;
}
const res = toAdd(10);
console.log(res);
// function expression

const AddTwo = function (arg) {
  return arg * 39;
};
console.log(AddTwo(50));
