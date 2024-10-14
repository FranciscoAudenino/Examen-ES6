

const arr = ["neuquen", "abeja", "oso"]

const capi = arr.reduce((acum, word)=>{
    if(word.split("").reverse().join("") == word){
        acum.push(word)
    };

    return(acum)
},[]);

const numbers = capi.reduce((acum,num, i) => {
    console.log(num)
    return(acum + num[i].split("").length());
},0)

console.log(numbers)
