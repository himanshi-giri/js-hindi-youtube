//if

if(2 == "2"){
    //console.log("Executed !")
}// this gives true value bcz == doesnt check the type of the data , only checks the value
if(2 === "2"){
    console.log("Executed !")
}//  === checks the type of the data also .

//< , > , <= ,>=,==,!=,=== , !==

const score = 200
if(score>100){
    let power = "fly"
    //console.log(`Userpower = ${power}`)
}
//console.log(`Userpower = ${power}`) // here power cannot be used because it cannot be used out of its scope .

// but when the power is declared as var type it could also be used outside its scope, that can be dangerous

if(score>100){
    var power = "fly"
    //console.log(`Userpower = ${power}`)
}
//console.log(`Userpower = ${power}`)

const balance = 1000
//if (balance > 500) console.log("test"), //implicit scope
    console.log("test2"); // not recommended

const userLoggedIn = true
const debitCard = true
const googleLoggeddin = false
const emailLoggedin = true

if(userLoggedIn && debitCard){
    console.log("Allowed to shop "); 
}
if(googleLoggeddin || emailLoggedin){
    console.log("User loggged in.");
    
}