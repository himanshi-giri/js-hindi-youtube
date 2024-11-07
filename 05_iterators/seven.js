const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.map( (num)=> num+10) // difference between Map , forEach and filter
//console.log(newNums);

//chaining i.e. method inside a method
const newNums = myNums
                  .map((num)=>num*10)
                  .map((num)=>num+1) ///here the num is the value that is obtained after evaluating the first map() function.
                  .filter((num)=> num>=40)
//console.log(newNums)
 // DIFFERENCE BETWEEN FILTER() , MAP() AND FOREACH()
 //1) FILTER():- Creates a new array with only the elements that pass a specified condition (i.e., the ones for which the function returns true
 //2)MAP():- Creates a new array by applying a specified function to each element in the original array, transforming each element.
 //3)FOREACH():- Returns: undefined. It doesn’t return a new array, as it is designed solely for iteration.

