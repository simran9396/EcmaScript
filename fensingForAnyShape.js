const fensingforany=(edges,numberofwire,rate)=>{
    let sum=0;

    for(let i=0; i<edges.length;i++){
        sum=sum+edges[i]
        console.log(`i====${i}`)

    } 

    return sum*numberofwire*rate
}
console.log(fensingforany([20,30,20,30],5,10))
// -----------------------------------------------practice-----------------
const fence=(edges,numberofwire,rate)=>{
let sum=0;
for(let i=0; i<edges.length;i++
    ){
    sum=sum+edges[i]
    console.log(`i===${i}`)

}
return sum*numberofwire,rate
}
console.log(fence([50,20,20,30],5,10))
// --------------------------------------------optimum----------------------
const fenceing=(edges,numberofwire,rate)=>{
    let sum=0;
    edges.forEach(element=>{
        sum=sum+element
        console.log(element)
    })
    return sum*numberofwire,rate
    }

    console.log(fence([10,20,20,30],5,10))
