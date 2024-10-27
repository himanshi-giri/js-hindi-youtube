// javascript and python are dynamically typed language which menas that the type of the variable is not defined it is checked at run time
// whereas c,c++ and java are statically typed language which means the type of the data is to be defined while writing the code as they are checked at compile time

// compile time :-This is the stage when source code is translated into executable code (or machine code) by a compiler. (syntax checking , type checking, optimization)
// run time :- This is the stage when the compiled code is executed on the machine, meaning the program is running. (memory allocation , input-output)
/* whole process of coding in lan. like c , c++,java (compile type)
Source Code: Write in a high-level language.
Preprocessing: Handle preprocessor directives.
Compilation: Check syntax, types, and optimize; produce object files.
Linking: Combine object files into a single executable.
Loading: Load the executable into memory.
Execution: The CPU executes the code, handling input/output and control flow.
Termination: The program finishes execution and releases resources.*/

/* In interpreted languages :-
When you run this script, the Python interpreter reads the print function, checks for syntax errors, allocates memory for the string, and prints it to the console. If any issues arise (like a syntax error or trying to print an undefined variable),
the interpreter will provide an error message during execution.
*/

function myFunc(){
    console.log("Hello World")
}

// the name of the function is reference and when paranthesis is written it is executed
//myFunc()

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}

//addTwoNumbers(4,5)

function addTwoNumbers(num1,num2){
    //let result=num1+num2
    return num1+num2
    console.log("hiii") //this will never be executed
}

const res = addTwoNumbers(4,5)
//console.log(res)

function loginUserMessage(username){
    return `${username} just logged in`
}
let result = loginUserMessage("Himanshi")
//console.log(result)

//there could be a condition when no argument is passed then in that condition we can give a default value to the parameter like :-

function loginUserMessage(username = "sam"){
    return `${username} just logged in`
}
//console.log(loginUserMessage())


function loginUserMessage(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage()) // nothing passed so it'll print undefined

//rest operator when we use arbitrary arguments , that is we dont know in prior the number of arguments passed to fun for ex:-
function countCart(...num){
    return num
}
//console.log(countCart(100,200,223))

//using object as the parameter of the function
const user ={
    userName :"Himanshi",
    id:123
}
function handleObject(anyObject){
    return `username is ${anyObject.userName} and his id is ${anyObject.id}`
}
console.log(handleObject(user))

//using array as parameter of the function
const arr = [1,2,3,4,5]
function arrayfun(anyArray){
    return anyArray[3]
}
console.log(arrayfun(arr))