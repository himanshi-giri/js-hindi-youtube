//++++++++++ date ++++++++++++++++++\

let myDate = new Date("2024-00-14")  // here myDate is an object to date class

//console.log(myDate.toDateString())
//console.log(myDate.toLocaleString())
//console.log(myDate.toISOString())
//console.log(myDate.toLocaleDateString())

console.log(typeof myDate) // myDate is an object type

let d = new Date("2023-01-7")
//console.log(d.toDateString())

let timeStamp = Date.now()
console.log(timeStamp)

let newDate = new Date()
newDate.toLocaleString('default' , {
    weekday : "long",
})

// date and time is a bit complex topic so we'll discuss it later in depth.
