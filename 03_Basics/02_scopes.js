//here we have no problem then why why we use var and let differently , here comes the concept of scope
//let a = 10
//const b=20
//var c=30
//console.log(a)
//console.log(b)
//console.log(c)
let a =300
if(true)
{
    let a = 10
    const b=20
    //var c=30
    console.log(`inner ${a}`); //block scope
    
}
//global scope
console.log(a) // a will not be print as it goes out of scope (it is let)
//console.log(b) // b will alsso not be printed out of the scope
//console.log(c) // but c being var type will be printed even outside of the scope
