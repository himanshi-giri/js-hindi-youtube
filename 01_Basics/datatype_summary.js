//primitive datatype
//(7 types) :- string , number , boolean , null ,undefined , symbol , bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')//unique
const anotherId = Symbol('123')
console.log(id === anotherId);
//non-primitive or reference type 
//Array, Objects , Functions

//array
const heros = ["abc" , "xyz" , "def"]; 

//object
let myobj={
    name : "himanshi" ,
    age: 23
}

//function
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myobj)


// ques :- is javascript dynamically or statically typed language?
//ans:-  In dynamically typed languages all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work.
// Typescript, it is a statically typed language, so all checks will be performed during compile/build run before we actually execute our program.

//reference link:-https://ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++ MEMORY ++++++++++++++++++++++++
//stack(primitive)(copy of the variable is received)
//heap (non-primitive)(reference of the variable is received)

let myName = "himanshi"
let anotherName = myName
anotherName = "chaeorcode" 
console.log(myName)
console.log(anotherName)

let user={
    email :"abc",
    upi : "xyz"
}

let userTwo = userOne

userTwo.email = "ghy"
console.log(userOne.email)
console.log(userTwo.email)

//understand the exact concept of stack and heap (acche se krliooo)