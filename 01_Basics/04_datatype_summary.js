//primitive datatype
//(7 types) :- string , number , boolean , null ,undefined , symbol , bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // type = undefined 
//console.log(typeof(userEmail))
const id = Symbol('123')//unique
const anotherId = Symbol('123')
//console.log(id === anotherId);
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

//console.log(typeof myobj)


// ques :- is javascript dynamically or statically typed language?
//ans:-  In dynamically typed languages(js and python) all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work.
// Typescript, is a statically typed language, so all checks will be performed during compile/build run before we actually execute our program.

//reference link:-https://ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++ MEMORY ++++++++++++++++++++++++

//stack(primitive)(copy of the variable is received)
//heap (non-primitive)(reference of the variable is received)

let myName = "himanshi"
let anotherName = myName
anotherName = "chaeOrCode" 
console.log(myName) // here the value remains as it was before because it is a primitive type and is stored in stack which shares the copy of the object hence the original value is never altered.
console.log(anotherName)

let userOne={
    email :"abc",
    upi : "xyz"
}

let userTwo = userOne

userTwo.email = "ghy"
console.log(userOne.email) // the value in userOne is changed because it is a non-primitive type and is stored in a heap so a reference is passed which changes the original value that is the value in useerOne
console.log(userTwo.email)

//understand the exact concept of stack and heap (acche se krliooo)