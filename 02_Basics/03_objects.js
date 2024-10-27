// there are two ways to make/declare an object :- 1) using literals 2) using constructor
// singleton - when objects are declared using constructor
const sym = Symbol("key1")
//1) object literals
const jsUser = {
    name : "Himanshi",
    "full name":"himanshi giri",  // cannot be accessed using . (dot) operator
    age : 18 ,
    [sym] : "mykey1",  // without square brackets it would act like a string and not a symbol
    location : "jaipur",
    email : "abc.google.com",
    isLoggedIn : false ,
    lastLoginDays : ["monday" , "tuesday"]

}

//to access the items of object
console.log(jsUser.email)
console.log(jsUser["email"]) // mostly this is used 

// console.log(jsUser.full name) 

console.log(jsUser[sym])

jsUser.email = "xyz@gmail.com" // to chnge the email
//Object.freeze(jsUser); // now , no values can be changed'

jsUser.greeting = function(){
    console.log("Hello fam !");
}
jsUser.greetingTwo = function(){
    console.log(`Hello , ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())