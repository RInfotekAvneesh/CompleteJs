function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "paneer";

      resolve(cheese);
    }, 20000);
  });
}
function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "dough";
      console.log("here is dough", dough);
      resolve(dough);
    }, 20000);
  });
}
function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "pizza bana";
      console.log("here is Pizza", pizza);
      resolve(pizza);
    }, 20000);
  });
}
getCheese((cheese) => {
  makeDough(cheese, (dough) => {
    bakePizza(dough, (pizza) => {
      console.log("I got Pizza", pizza);
    });
  });
});
