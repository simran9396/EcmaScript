// DIFFERENCES IN VAR ,IF  & CONST


// in var we can write outside the scope.it can be acessable outside the scope also for updation
function GetData(){
    if (true){
        var name="simran"
    }
    console.log(name)
}
GetData()


// in Let we need to write with in scope .and we can update value
function GetDatalet(){
    if (true){
        let name="simranp"
        console.log(name)
    }
}
GetDatalet()
//  in const we need o write in scope and cant update is value
function Data(){
    if (true){
        const pi=33
        pi=44
        console.log(pi)
    }
}
Data()
