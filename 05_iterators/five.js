//forEach loop
//foreach uses callback functions , what  is callback functions ? CallBack functions :- A function to execute for each element in the array. Its return value is discarded.
const coding = ["js","cpp","py","ruby" , "java"]
//coding.forEach(  function (item){ //callback function doesnot have a name 
 //console.log(item)
//})

//callback function can also be an arrow function
//coding.forEach((item)=>{
//    console.log(item);
    
//})
function print(item){
    //console.log(item);
}
coding.forEach(print)

coding.forEach((item,index,arr)=>{
 //console.log(item,index,arr);
})

const myCoding =[
    {
        languageName : "javascript",
        languageFileName:"js"
    },
    {
        languageName : "java",
        languageFileName:"java"
    },
    {
        languageName : "python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
 console.log(item.languageName);
 console.log("*+*+*+*+*+"); 
 console.log(item.languageFileName);
 
})