const sumopt=(numbers)=>{
    let sum=0
    numbers.forEach((element)=>{
        element % 2==0 &&
        (sum=sum+element)
    })
    return sum
}
console.log(sumopt([5,2,7,9,10,8,17,115,10]))



// ------------------------------sumof odd even both----------------------
const sumofBothopt=(numbers)=>{
    let sumeven=0
    let sumodd=0
    numbers.forEach((element)=>{
        element % 2 == 0 
        ? (sumeven=sumeven+element)
        : (sumodd=sumodd+element)
    })
    return `sum of even number=${sumeven}and sum of odd number=${sumodd} total sum=${sumeven+sumodd}`
}
console.log(sumofBothopt([5,2,7,9,10,8,17,115,10]))

