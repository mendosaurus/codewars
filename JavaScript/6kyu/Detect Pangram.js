// https://www.codewars.com/kata/detect-pangram/train/javascript
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr = string.toLowerCase().split("");
  //   console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    alphabet = alphabet.replace(arr[i], "");
  }
  return alphabet.length === 0;
}

// best practice
// function isPangram(string) {
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x) {  //every() method checks if all elements in an array pass a test (provided as a function).

//     return string.indexOf(x) !== -1;  //indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs.
//   });
// }

isPangram("The quick brown fox jumps over the lazy dog."); // => true
// isPangram("This is not a pangram.") // => false
