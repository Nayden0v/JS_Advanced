
//creat new arr, with unique values

let arr = [1,1,1,1,2,2,4,4,5,6,7,7];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if(number > 1){
        console.log(number);
    }
    
}

