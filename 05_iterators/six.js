const coding = ["js","cpp","py","ruby" , "java"]
const val=coding.forEach((item)=>{  //forEach doesnot return a value.
    //console.log(item);
   // return item
})
//console.log(val);

const myNums = [1,2,3,4,5,6,7,8,9,10]
//let newNums = myNums.filter((num)=> num>4) // newNums value is returned implicitly 
//let newNum = myNums.filter((num)=>   {return num>4})  //when we add {} i.e scope then we should also write return keyword in order to return the value explicitly.
//console.log(newNums); //filter returns the value but forEach doesnt return any value

//const newN =[]
//myNums.forEach((num)=>{
//  if (num>4){newN.push(num)} 
//})
//console.log(newN) 

//Book example , refer video no. 30 time-stamp-{14.00}.


