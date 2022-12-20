
/**
 * -------Direction------
 * write a function that returns the number of vowels 
 * used in string . vowels are character 'a' , 'e','i','o','u'
  
 * -----Example------------
vowels("Hi There!") ----> 3
vowels("why do you ask?") ----> 4
vowels("Why?") ----> 0

 */

// vowels- a,e,i,o,u
function vowels(str) {
    let count = 0;
    const collectedVowels = ['a', 'e', 'i', 'o', 'u']
    const strLowerCase = str.toLowerCase()
    for (const char of strLowerCase) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++
        }


        // if (collectedVowels.includes(char)) {
        //     count++
        // }

    }
    return count;


}

console.log(vowels('why do you ask'));