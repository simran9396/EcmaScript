const fensingoftriangle=(a,b,c,noofwire,cost)=>{
    const parimeter=a+b+c;
    const totalcost=parimeter*noofwire*cost;
    return totalcost;
}


console.log(` The total cost for fensing is Rs.${fensingoftriangle(10,12,18,5,10)}`)
