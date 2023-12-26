const ticket = new Promise(function (resolve, reject) {
  const isBoarded = false;
  if (isBoarded) {
    resolve("You are not in flight");
  } else {
    reject("flight has been calcelled");
  }
});
ticket
  .then((data) => {
    console.log("wohoo", data);
  })
  .catch((data) => {
    console.log("oh no", data);
  })
  .finally(() => {
    console.log("It is always executed");
  });
