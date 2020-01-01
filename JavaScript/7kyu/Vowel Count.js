// https://www.codewars.com/kata/vowel-count/train/javascript

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   var vowelsCount = 0;

//   // go through the string by using for loop
//   for (let i = 0; i<str.length; i++){
//     console.log(str[i]);
//     // if a letter in a string is equal to one of a vewels, add 1 to vowelsCount variable
//     if (str[i] === 'a' ||str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u'){
//       vowelsCount ++
//     }
//   }
//   return vowelsCount;
// }

// second solition
function getCount(str) {
  var vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        console.log("vowel! add one!");
        vowelsCount++;
        console.log(vowelsCount);
      }
    }
  }

  return vowelsCount;
}

// best practice
// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

getCount("abracadabraghgbbhgidhfbbf");
// should return 5
