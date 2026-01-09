
// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

function noDuplicate(array) {
    const unique = [...new Set(array)];
    return unique
}

console.log(noDuplicate([1, 2, 2, 4, 3, 4, 4]));