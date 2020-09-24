// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript
// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  const arr = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, current) => acc + current);
}

findSum(10);
