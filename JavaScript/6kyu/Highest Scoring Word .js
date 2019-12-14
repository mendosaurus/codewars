// https://www.codewars.com/kata/highest-scoring-word/train/javascript
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr = x.split(" ");
  let score = 0;
  let theWord = "";

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let tempScore = 0;
    for (let j = 0; j < word.length; j++) {
      console.log(arr[i], tempScore);
      console.log(word[j]);
      tempScore += alphabet.indexOf(word[j]) + 1;
    }
    if (tempScore > score) {
      score = tempScore;
      theWord = word;
    }
  }
  return theWord;
}

// best practice
// function high(x) {
//   //transform the input string into array & define a string of alphabetical latin characters
//   var arr = x.split(" ");
//   var str = "abcdefghijklmnopqrstuvwxyz";
//   //Iterate through the array with input words to find the one with the greatest sum
//   var newArr = arr.map(function(word) {
//     var sum = 0;
//     for (var i = 0; i < word.length; i++) {
//       sum += str.indexOf(word[i]);
//     }
//     return sum;
//   });
// 	console.log(newArr)
//   //Return the word with the greatest sum
// 	return arr[newArr.indexOf(Math.max(...newArr))]
// }

high("man i need a taxi up to ubud"); // 'taxi'
// high('what time are we climbing up the volcano') // 'volcano'
// high('take me to semynak') // 'semynak'
