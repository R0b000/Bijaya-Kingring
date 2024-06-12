const arr = ['kaylin', 'ram', 'gopal', 'ankit']

const userDetails = {
    'kaylin': 'khanal',
    'alisha': 'rauniyar',
    'ayush': 'rai',
    'gopal': 'tharu'
}

const output = arr.map((item) => {
    return item;
});

const output1 = arr.map((item) => {
    if(userDetails[item]){
        return `${item} ${userDetails[item]}`;
    }
}).filter(Boolean);

console.log(output);
console.log(output1);
// expected output :
// ['kaylin khanal', 'gopal tharu']
//HIT: MAP IN ARR
//syntax:
// arr.map((item)=>{
    //yedi  userDetails[item] return
// }