const userEmail = []
if (userEmail) {
    //console.log("User email found");
    }
    else{
        //console.log("doesnott get the user email");
    }

    //Falsy values => false , 0 , -0 , bigInt- 0n , "", null , undefined , NaN
    //truthy values => "0" , "false" , " " , [] , {} , function(){}

    //if(userEmail.length() === 0){
       // console.log("Array is empty.");
        
    //}

    const Ob = {}
    //if(Object.keys(Ob).length() === 0){
        //console.log("Object is empty. ");
    //}

    //nullish coalescing operator(??) :null undefined
    let val1
    //val1 = 5??10
    //val1= null??5
    //val1 = undefined ?? 15
    //val1 = null ?? 10 ?? 20
    //console.log(val1);
    
    //Ternary operator
    //condition ? true : false;
    const teaPrice = 100
    teaPrice >= 80 ? console.log("Tea price greater than 80 ") : console.log("Tea price less than 80");
    