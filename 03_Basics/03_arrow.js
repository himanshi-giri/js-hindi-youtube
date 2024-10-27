 const user = {
  userName : "Himanshi",
  id : 123 ,
  welcomeMsg : function(){
    console.log(`${this.userName} , Welcome to the website`);
    //console.log(this);
    }
}
user.welcomeMsg()
user.userName = "Hema"
//user.welcomeMsg()
//console.log(this);

//Note :- In browser window is the global object
// but in stand alone env. this gives an empty obj

//function chae(){
//  const user = "himanshi"
//  console.log(this.user) // this gives undefined , we cant use this in function but can use in objects
// }
//chae()
 
//arrow function
const chae =() =>{
    const user = "himanshi"
    console.log(this.user)
}
//chae()

//const addTwo = (num1,num2) =>{
//    return num1+num2            // in curly braces , return stt. is used
//}
//console.log(addTwo(7,4))

const addTwo = (num1,num2) => (num1+num2) //implicit return , done when we just have a single return stt.
                                          // in round brackets , return stt. is not used.
                                          // and if we have to write an object in place of num1 and num2 then ({object element}) also it will be put in round brackets
console.log(addTwo(7,4))