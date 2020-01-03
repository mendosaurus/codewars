/*
https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/javascript

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

Hint: Do not modify the original array.
*/

function sumTwoSmallestNumbers(numbers) {
  let longestArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < longestArr[0] || longestArr[0] == null) {
      if (longestArr[0] < longestArr[1] || longestArr[1] == null) {
        longestArr[1] = longestArr[0];
      }
      longestArr[0] = numbers[i];
    } else if (numbers[i] < longestArr[1] || longestArr[1] == null) {
      longestArr[1] = numbers[i];
    }
  }
  return longestArr[0] + longestArr[1];
}

console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); //  16 , "Sum should be 16");
