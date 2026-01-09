

// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// 5! = 5 × 4 × 3 × 2 × 1 = 120

function factorial(num){
    const x = num;
    let fact=num
    for(let i=1 ; i<num ;i++){
        fact= fact*(num-i)
    }
    return fact;
}
console.log(factorial(10));
