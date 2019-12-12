// https://www.codewars.com/kata/find-the-missing-letter/train/javascript
// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(array) {
  let arr = array.map(char => {
    return char.toLowerCase();
  });

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let numberArr = arr.map(char => {
    return alphabet.indexOf(char);
  });

  let missingNumber = null;
  for (let i = 0; i < numberArr.length - 1; i++) {
    // console.log(numberArr[i], numberArr[i+1]-1)
    if (numberArr[i] !== numberArr[i + 1] - 1) {
      missingNumber = numberArr[i] + 1;
    }
  }
  let missingLetter = alphabet[missingNumber];
  if (array[0] === array[0].toLowerCase()) {
    return missingLetter;
  } else {
    return missingLetter.toUpperCase();
  }
}

findMissingLetter(["a", "b", "c", "d", "f"]); //  -> 'e'
// ['O','Q','R','S'] // -> 'P'
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)
