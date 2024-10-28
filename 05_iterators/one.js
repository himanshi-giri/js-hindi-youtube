//for
//Note : in order to select multiple duplicate values we use cntrl+d by selecting the value
for(let i=0;i<10;i++){ 
    const ele = i;
    //console.log(ele);
}

for (let i = 1; i <=10; i++) {
    //console.log("Outer loop");
    for (let j = 1; j <=10; j++) {
      // console.log("Inner loop");   
      //console.log(`${i} * ${j} = ${i*j}`);
      
    }    
}

const myArr = ["flash","batman","spiderman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
}

//break continue
for (let index = 1; index <=20 ; index++) {
    if(index ==5 ){
        console.log("Detected 5");
        //break;  
        continue;   
        console.log("5");
           
    }
    //console.log("5");
    console.log(`Value of i is ${index}`)
}