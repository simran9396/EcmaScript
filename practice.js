function abc( num1, num2){
    var sum=num1+num2
    console.log(`sum of ${num1} and ${num2} is equal to ${sum}`)

}
const even=(num)=>{
    if (num % 2==0){
        return('even Number')
    }
    else{
        return('odd Number')
    }
}
console.log (`${even(22)}`)