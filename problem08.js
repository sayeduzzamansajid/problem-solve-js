// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

function capitalizes(string) {
    let str = string;
    let words = str.split(" ")
    let newStr = []
    for (let i = 0; i < words.length; i++) {
        let x = [...str.split(" ")[i]]
        x = [x[0].toUpperCase(), ...x]
        // console.log(x);
        x.splice(1, 1)
        newStr.push(x.join("").toString())

    }
    return newStr.join(" ");
}
console.log(capitalizes("hey programming hero thanks"));