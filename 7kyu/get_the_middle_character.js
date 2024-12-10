// ============================================
// CODEWARS CHALLENGE: GET THE MIDDLE CHARACTER
// ============================================

// Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

/*
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/


//Solution:

function getMiddle(s) {
    //initalise len to the length of the string 's'
    const len = s.length

    //initalise middle to equal to the middle index of the string 
    //Math.floor() is used to round down in case the length is odd
    const middle = Math.floor(len/2)

    //if the length of the string is even, the two middle characters will be returned
    //if the length is odd, the single middle character will be returned
    return len % 2 === 0 
    ? s.slice(middle -1, middle +1)  //for even length, get 2 characters using .slice()
    : s[middle] //for odd length, get 1 characters at the middle index

  }

console.log(getMiddle("Hello"))

/*

1. const len = s.length:
I started by calculating the length of the input string (s) and stored it in a variable called len. This helps me figure out the total number of characters in the string (s).

2. const middle = Math.floor(len / 2):
Next, I calculate the middle index by dividing the length (len) by 2 and rounding down using Math.floor(). This is important because:

-For a string with an odd length, I need the exact middle character.
-For a string with an even length, I need the index of the lower middle character.
The result is stored in the variable middle.

3. len % 2 === 0:
I used a ternary statement (my fav!) as a more concise way to write a simple if-else statement. This checks if the string's length is even by using the modulus operator (%). If the condition is true (length is even), I return the two middle characters. If it’s false (length is odd), I return just the one middle character.

4. s.slice(middle - 1, middle + 1):
For even length strings, this slices the string starting one character before the middle (middle - 1) and ending one character after the middle (middle + 1), including both middle characters.

5. s[middle]:
For odd length strings, this directly accesses the middle character by its index (middle).
  
*/

