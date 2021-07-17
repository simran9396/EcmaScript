const fenceing=(edges,numberofwire,rate)=>{
    let sum=0;
    edges.forEach((element)=>{
        sum=sum+element
      
    })
    return sum*numberofwire*rate
    }

    console.log(fenceing([10,15,10,10,20,30],5,10))