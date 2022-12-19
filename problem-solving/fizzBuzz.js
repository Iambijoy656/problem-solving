/**
  Write a program that prints the numbers from 1 to 100.But for multiples of three print "Fizz" instead of the number and the multiples of five print "Buzz" for numbers which are multiples of both three and five print "FizzBuzz"
 */

function fizzBuzz(num) {
    let result = ''
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz \n"
        } else if (i % 3 === 0) {
            result += "Buzz \n"
        } else if (i % 5 === 0) {
            result += "Fizz \n"
        } else {
            result += i + '\n';
        }

    }
    return result;

}

console.log(fizzBuzz(100))