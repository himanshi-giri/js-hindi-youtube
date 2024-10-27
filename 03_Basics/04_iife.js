// Immediately Invoked Function Expressions (IIFE)

//IIFE is used in order to remove global scope pollution

(function chae(){
    //named iife
    console.log(`DB CONNECTED`);
}
)(); // here , we are not calling the function like chae() , istead what we are doing is we are giving a definition to the func. using () and then executing it using another ()
     // also we need to add ; in order to stop iife so that if we want we can use it several times 

(()=>{
    console.log(`DB CONNECTED TWO`)
})();

((user)=>{
    console.log(`DB CONNECTED TWO ${user}`)
})("himanshi");