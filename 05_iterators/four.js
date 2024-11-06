const myObj={
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift:"swift by apple"
}
//for in
for (const key in myObj) {
    //console.log(`${key} :- ${myObj[key]}`);
    
}
//for of is used to print the value whereas for in is used for printing the key/index
const Arr = ["js" ,"c++","ruby"]
for (const key in Arr) {
    console.log(key); // prints the index
}
for (const key of Arr) {
    console.log(key); // prints the value 
}
