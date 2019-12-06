// https://www.codewars.com/kata/split-strings/train/javascript
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
  let split = str.match(/.{1,2}/g);
  // the dot matches any character except live breaks
  // {quantifier} matches the specified quantity of the previous token. {1,3} will match 1 to 3. {3} will match exactly 3. {3,} will match 3 or more.
  return split.map(element => {
    return element.length === 2 ? element : element + "_";
  });
}

// best practice
// function solution(str) {
//   return (str.length % 2 ? str + '_' : str).match(/../g);
// }

solution("abc"); // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']
