const areaReactangle=(b,w)=>b*w
console.log (areaReactangle(20,45))
// ---------------------------------Rectangle------


const areaTriangle=(b,h)=>(1/2)*b*h
console.log(`area of triangle is ${areaTriangle(20,10)} sq.unit`)
// ------------------------------------------------Triangle--------------

const areaCircle=(r)=>3.14*r*r
console.log(`Area of circle is ${areaCircle(50)}`)

// --------------------circle-------

const x=10
const b=15
const h=30

console.log(`area of digram is${areaReactangle(x,b)+areaTriangle(b,h-x)}`)
// ----------------------------------------------------------------------------------
