// objects using constructor

//const tinderUser = new Object() // makes a singleton object , using literal
 const tinderUser = {} // non-singleton object , using constructor
 tinderUser.id="123abc"
 tinderUser.name= "sam"
 tinderUser.isLoggedin = false
 //console.log(tinderUser)

 const regularUser={
    email : "abc@gmail.com" ,
    fullName :{
        userFullName : {
            firstName : "himanshi",
            lastName : "giri"
        }
    }
 }//object chaining
 //console.log(regularUser.fullName.userFullName.firstName)

//merging two objects
const obj1 = { 1 : "a" , 2 : "b"}
const obj2 = { 3 : "c" , 4 : "d"}
//const obj3 = Object.assign({},obj1,obj2) // Here {} acts as target and obj1 and obj2 acts as source that is to be merged and assigned into target
const obj3 = {...obj1,...obj2} //spread method
//console.log(obj3)

//array of objects
const user = [
    {
        id : 1,
        email : "abc@gmail.com"
    },
    {
        id : 2,
        email : "xyz@gmail.com"
    },
    {
        id : 3,
        email : "mno@gmail.com"
    }
]
//console.log(user[1].email)

//in order to access keys and value of an object we use :-
//console.log(tinderUser)
//console.log(Object.keys(tinderUser)) // gives all the keys of tinderUser object
//console.log(Object.values(tinderUser)) //gives all the values of tinderUser object
console.log(Object.entries(tinderUser)) //gives array of Aarray
console.log(tinderUser.hasOwnProperty('isLoggedin')) // tells if a key is present or not in the object

//object destructure
const course = {
    courseName : "js in hindi",
    price : 999 ,
    teacher : "hitesh"
}
const {teacher} = course // khase value leni h ? course se or kya value leni hai ? teacher
console.log(teacher) // accessing teacher without using course.teacher


// api
//json javscript object notation , json is basically an object that has no name

//sometimes api's are obtained in the form of array also , array that contains several objects
//for example :- 
//               [
//                {},{},{}
//                ]

//there are some json formatter available that are used to understand some json api and also to beautify it

