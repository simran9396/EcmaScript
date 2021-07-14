function EvenNumber(num){
    if (num%2===0){
        return("even nummer")

    }else{
        return("odd number")
    }
}
console.log(`${EvenNumber(22)}`)
// -----------------------------------------optimum way------------------------------------
const evenopt=(num)=>(num%2===0? "even":"odd")
console.log(evenopt(55555))
// ------------------------------------------more otimum way its boolean value it will automatically print true or false
const opt=(num)=>(num%2===0 )
console.log(opt(2222))