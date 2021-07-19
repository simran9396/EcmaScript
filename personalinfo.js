const personalinfo = (data) => data.map((item)=>{
    return`I am planning to do${item.course}from${item.Institute} situated in${item.city}contact number is${item.mobNo}`
})



console.log(personalinfo([
   { course: "PDAC",
    Institute: "pixkupbiz",
    mobNo: 9874541564,
    city: "Nanded"
}, {
    course: "Module1",
    Institute: "pixkupbiz",
    mobNo: 9874541564,
    city: "pune"
}, {
    course: "Module2",
    Institute: "pixkupbiz", 
    mobNo: 9874541564,
    city: "Hyd"
}, {
    course: "Module3",
    Institute: "pixkupbiz",
    mobNo: 9874541564,
    city: "Mumbai"
}]))