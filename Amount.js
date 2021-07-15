const Millagecost=(dist,mil,price)=>
    (dist/mil)*price


console.log(`Amount need to fill fuel is Rs.${Millagecost(500,50,100.25)}`)

// -------------to get number in round figure

const Millagecost1=(dist,mil,price)=>
Math.ceil((dist/mil)*price)


console.log(`Amount need to fill fuel is Rs.${Millagecost1(500,50,100.25)}`)
console.log(Math.ceil(15.65))


   