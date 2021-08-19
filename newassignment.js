const findgretestnum=(arrnum)=>{
    let maxnum=0
    arrnum.forEach(element => {
        if (element>maxnum){
            maxnum=element
        }
    });
    
    return maxnum
   
}
console.log(findgretestnum([7,5,1,8,99,3,8,25,75]))
// ------------------------------------------------------
const findleastnum=(arrnum)=>{
    let minnum=arrnum[0]
    arrnum.forEach(element => {
        if (element<minnum){
            minnum=element
        }
    });
    
    return minnum
   
}
console.log(findleastnum([5,5,4,8,99,3,8,25,75]))