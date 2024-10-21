const accountId = 1234
let accountemail = "hima@gmail.com"
var accountPassword = "12334"
accountCity = "Jaipur"
let accountState 
// accountId = 2 // not allowed
console.log(accountId);
accountemail = "abcd"
accountPassword = "4567"
accountCity = "Banglore"

console.table([accountemail,accountPassword,accountCity,accountState])

/*prefer not to use var because of issue in block scope and functional scope.*/