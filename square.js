const findsquare=(num)=>{
    let square=[]

    
    num.forEach((element) => {
        square.push(element**2)
        
    });
       
    return square   
   
}
console.log (findsquare([5,2,7,9,10]))


// ------------------------------------optimun--------------
const findsquareOpt=(num)=>
    num.map((element)=>element**2)

    
   

console.log (findsquareOpt([5,2,7,9,10]))
// -------------------------------------------------ex2----------------
const find=(Number,power)=>Number.map((element)=>element**power)
console.log (find([5,2,7,9,10],3))
console.log (find([5,2,7,9,10],4))
  