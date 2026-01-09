

// Problem 7: Find Even Numbers in an Array

function even(arr) {
    let evn=[];
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]%2=== 0){
        evn.push(arr[i])
       }
    }
    return evn
}

console.log(even([1,3,7,5,2,4,6,8,100]));