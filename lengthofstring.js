const lengthofstring=(arrstr)=>{
    let maxstr=arrstr[0].length
    let strdata=arrstr[0]
    arrstr.forEach((element) => {
        
     if( maxstr<element.length){
     maxstr=element.length
     strdata=element
     }  
    });
    return strdata
}
console.log(lengthofstring(["cat","bat","i","am","coder","react","javascript","tools"]))




// -----------------------------------only strring---------------------?
const string=(str)=>{
    const arrstr=str.split(" ")
    let maxstr=arrstr[0].length
    let strdata=arrstr[0]
    arrstr.forEach((element) => {
        
     if( maxstr<element.length){
     maxstr=element.length
     strdata=element
     }  
    });
    return strdata
}
console.log(string("i am developer from nanded"))
