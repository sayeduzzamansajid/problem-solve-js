// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

const string = "programming";
const str = string.toLocaleLowerCase()
const arr = [...str];
// console.log(arr);
let sum =0;
for (let i = 0; i < arr.length; i++) {

    if(arr[i]=== "a" || arr[i]=== "e" ||arr[i]=== "i" ||arr[i]=== "o" ||arr[i]=== "u" ){
        sum++
    }
}
console.log(sum);