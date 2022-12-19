function reverseString(str) {
    let revStr = ''
    // for (let i = str.length - 1; i >= 0; i--) {
    //     const element = str[i];
    //     revStr += element
    // }

    for (let char of str) {
        console.log(char);
        revStr = char + revStr;
        console.log(revStr)
    }


    return (revStr)
}

console.log(reverseString('Bijoy'));




// Second way to solve 
function reverseStr(string) {
    const reverse = string.split('').reverse().join(''); // reverse method used only array thats why using split because split return an array

    return reverse;

}
console.log(reverseStr('Hello'))