let age = (value)=>{
    if(value<18){
        return("Not eligible to vote");
    }
    else{
        return("Eligible to vote");
    }
}

console.log(age(25));