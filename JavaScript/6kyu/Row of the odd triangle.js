// https://www.codewars.com/kata/5d5a7525207a674b71aa25b5/train/javascript
// Given a triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

// odd_row(1)  ==  [1]
// odd_row(2)  ==  [3, 5]
// odd_row(3)  ==  [7, 9, 11]
// Note: your code should be optimized to handle big inputs.

function oddRow(n) {
  let arr = [];
  for (let i = 0; i < n * 2; i += 2) {
    arr.push(n ** 2 - (n - 1) + i);
  }
  return arr;
}

// best practice
function oddRow(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => n * n - n + 1 + i * 2);
}
