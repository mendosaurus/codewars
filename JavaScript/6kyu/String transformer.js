// https://www.codewars.com/kata/string-transformer/train/javascript

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

function stringTransformer(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result +=
      str[i] === str[i].toUpperCase()
        ? str[i].toLowerCase()
        : str[i].toUpperCase();
  }
  console.log(result);
  return result
    .split(" ")
    .reverse()
    .join(" ");
}

// best practice
// function stringTransformer(str) {
//   return str
//     .split(" ")
//     .reverse()
//     .join(" ")
//     .split("")
//     .map(v => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
//     .join("");
// }

// For example:
stringTransformer("Example Input"); // ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.
