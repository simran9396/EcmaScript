const marks=(number)=>{ 
    let totalsofNumbers=0
    number.forEach(element => {
        totalsofNumbers=totalsofNumbers+element
    });
    const avrage=totalsofNumbers/number.length
    return avrage
  
    
}
   console.log(marks([47,43,50,75,80])) 
   console.log(marks([64,44,50,75,80,86])) 
   console.log(marks([47,43,50,75,80,74,23,75])) 



//    -------------------------------------------------opti-----------------
const mark=(numbers)=>{
    const total=numbers.reduce((accumulator,current)=>accumulator+current)
    return total/numbers.length
}
console.log(mark([47,43,50,75,80])) 
console.log(mark([64,44,50,75,80,86])) 
console.log(mark([47,43,50,75,80,74,23,75])) 


// ----------------------------------optimum------------
const maark=(number)=>number.reduce((acc,curr)=>acc+curr)/number.length

console.log(maark([47,43,50,75,80])) 
console.log(maark([64,44,50,75,80,86])) 
console.log(maark([47,43,50,75,80,74,23,75]))
// -------------------------------------------------------practice-------------
const mrk=(number)=>number.reduce((first,last)=>first
*last)/number.length


console.log(mrk([47,43,50,75,80])) 
console.log(mrk([64,44,50,75,80,86])) 
console.log(mrk([47,43,50,75,80,74,23,75]))