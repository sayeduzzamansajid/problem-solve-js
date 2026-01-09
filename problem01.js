// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

const input = 'rakib'
const array = [...input]
const out = []
console.log(array);
for (let i = 0; i < input.length; i++) {
    out[i] = input[input.length - 1 - i]
}
const output = out.join("").toString()
console.log(output);