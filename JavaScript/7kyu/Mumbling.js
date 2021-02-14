// https://www.codewars.com/kata/mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//   let letters = s.toLowerCase().split("");
//   console.log(letters);
//   for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i]);
//     letters[i] = letters[i].toUpperCase() + letters[i].repeat(i);
//     console.log(letters[i]);
//   }
//   return letters.join("-");
// }

// accum("eMlet");

function accum(s) {
  const lowerCase = s.toLowerCase().split("");
  for (i in lowerCase) {
    lowerCase[i] = lowerCase[i].toUpperCase() + lowerCase[i].repeat(i);
  }
  return lowerCase.join("-");
}
