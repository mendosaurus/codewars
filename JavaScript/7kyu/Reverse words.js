// https://www.codewars.com/kata/reverse-words/train/javascript
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// my solution
// function reverseWords(str) {
//   reverseStr = []
//   let copy = str.split(' '); 
//   console.log(copy)
//   for(let i = 0; i < copy.length; i++){
//     reverseStr.push(copy[i].split('').reverse().join(''))
//   }
//   return reverseStr.join(' ')
// }

// best practice
function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}
reverseWords("This is an example!")

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"