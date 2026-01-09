
// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

const input = 'mam'
const array = [...input]
const out = []
// console.log(arr);
for (let i = 0; i < input.length; i++) {
    out[i] = input[input.length - 1 - i]
}
const output = out.join("").toString()
if(output === input){
    console.log(true);
}
else{
    console.log(false);
}

