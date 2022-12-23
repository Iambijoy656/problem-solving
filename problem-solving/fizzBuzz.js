/**
  Write a program that prints the numbers from 1 to 100.But for multiples of three print "Fizz" instead of the number and the multiples of five print "Buzz" for numbers which are multiples of both three and five print "FizzBuzz"
 */

function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz")
        } else if (i % 3 === 0) {
            result.push("Buzz")
        } else if (i % 5 === 0) {
            result.push("Fizz")
        } else {
            result.push(i)
        }

    }
    return result;

}

const n = 3;
const result = fizzBuzz(n)
console.log(result);