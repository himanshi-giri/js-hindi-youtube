//for of

//["","",""] //strings in an array
//[{},{},{}] //objects in an array
const arr = [1,2,3,4,5]
for (const val of arr) {
    //console.log(val);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == " "){
        continue; // yha break lgake bhi dekho , what happens
    }
    //console.log(`The characters of string are ${greet}`);
}

//Maps=>The Map object holds key-value pairs and remembers the original insertion order of the keys
const map=new Map()
map.set('IN',"India")
map.set('US',"USA")
map.set('CH',"China")
//console.log(map);
for (const [key,value] of map) { // doesnot work for objects
    console.log(key ,"=>" ,value)
}
