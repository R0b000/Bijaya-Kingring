//Q1 find list of numbers divisible by 3

const arr = [3,5,1,2,9,12]
//write your code here

const filteredArr = arr.filter((item) => {
    return item%3==0;
})

console.log(filteredArr);

//Using for loop
function loop(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%3===0){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log("Using for loop: " + "[" + loop(arr) + "]");
//expected output---> [3,9,12]
// hint: %3 === 0
// filter
//syntax:
//const filteredArr = arr.filter((item,id)=>{
//     //
// })
//console.log(filteredArr)

//----------------