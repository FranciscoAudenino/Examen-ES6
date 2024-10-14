function IsDivisible (a, b){
    if (a % b === 0){
        return true
    }else{
        return false
    };
};

const arr = [10, 14, 15, 23, 29, 30]

const end_arr = arr.reduce((acum, num)=>{
    if (IsDivisible(num, 5)){
        acum.push(num)
    };
    return(acum)
},[]);


console.log(end_arr);