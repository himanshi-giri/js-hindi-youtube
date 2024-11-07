//reduce() method , refer mdn documentation

const myNums=[1,2,3]
//const myTotal = myNums.reduce(function(accumulator,currentValue){
 //   return accumulator+currentValue
//},0)
const myTotal=myNums.reduce((acc,curr)=>{
 return acc+curr
},0)

console.log(myTotal);
