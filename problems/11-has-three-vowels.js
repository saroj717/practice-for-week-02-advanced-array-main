/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    // string = string.split(" ");
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let vcount = [];
    console.log(string);
    // string.forEach(element => 
        vowel.forEach(vowel => 
            {
                if(string.includes(vowel) && !vcount.includes(vowel)){
                    vcount.push(vowel);
                }
            }
        )
    // )
    if(vcount.length >= 3){
        return true;
    }
    return false;
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
