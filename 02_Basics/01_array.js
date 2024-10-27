// array

const arr1 = [1,2,3,4,5,true,"himanshi"] // array can contain different types of data

const arr = [1,2,3,4,5]
//const arr2 = new Array(1,2,3,4,5,6)
//console.log(arr2)

// Array Methods

let a = [1,2,3]
//a.push(4)
//a.push(5)
//a.pop()
//console.log(a)

a.unshift(6) // adds 6 to the first index of the array , it is not used bcz all the elements need to shift in order to add the item in the start 
console.log(a)

//console.log(a.includes(9)) // it gives true or false in output , tells whether the item is present or not 
//console.log(a.indexOf(3))

const newA = a.join()
//console.log(newA)  // Type has been changed 
//console.log(typeof(a)) // a is object type
//console.log(typeof(newA)) //newA is of string type

// 2 most imp methods are :- slice and splice

console.log("A" , a)

const myN1 = a.slice(1,3) // returns the copy of a section of an array , first elemnt is include till the elemnt before the last element i.e 1 to 3-1 index's elements are copied int myn1
console.log(myN1)
console.log("B",a)

const myN2 = a.splice(1,3) // here 3 is also included
console.log(myN2)
console.log("C",a)  // the original value is the only value that is not included in new array by the splice method , here 6 
 
// always remember diff between slice() and splice() method
