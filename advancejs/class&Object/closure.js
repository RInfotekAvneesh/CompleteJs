function outer() {
  let username = "Avneesh";

  function inner() {
    let secret = "secret";
    console.log("inner:", username);
  }
  function innerTwo() {
    console.log("innerTwo:", username);
  }
  console.log(username);
  innerTwo();
  inner();
}
outer();
