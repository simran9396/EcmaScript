const factorial=(num)=>{
    
    if (num == 0) {  
        return 1;  
        }  
        else {  
        return num * factorial( num - 1 );  
        }  
          
}
console.log(factorial(5))
// --------------------------------------------------------------by for each loop----------
const fact=(n)=>(n<2 ? 1:fact(n-1))
console.log(fact(5))