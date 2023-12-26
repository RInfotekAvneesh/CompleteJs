const accountId = 11237373743;
let accountEmail = "sbi@gmail.com";
var accountPasswod = "11727272";
accountCity = "Noida";
//accountId = 3;
accountPasswod = "446464656";
accountEmail = "hdfc@gmail.com";
let accountState;
/*
prefer not  to use var because of issue in block scope and functional scope
*/
console.log(accountPasswod);
console.log(accountId);
console.log(accountEmail);
console.table([
  accountId,
  accountEmail,
  accountPasswod,
  accountCity,
  accountState,
]);
