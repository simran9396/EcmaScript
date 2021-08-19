// const isprime=(num)=>{
//     for(i=2;i<num/2;i++){
//        return num%i===0 ?false :true
        
//     }
// }
// console.log(isprime(9))
// ---------------------------------------------------
const isprime=(num)=>{
    const boundary=Math.floor(Math.sqrt(num))
    for (i=2 ;i<=boundary; i++){
        if (num%i===0){
            return "not prime "
        }
        return "prime number"

    }
}
console.log(isprime(11))