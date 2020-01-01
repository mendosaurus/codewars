// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  let highest;
  let lowest;

  // split the string and covert each elements into numbers
  numbers = numbers.split(" ").map(Number);
  console.log(numbers);

  // find max and min in array
  //1. Math.max.apply()
  // return `${Math.max.apply(null, numbers)} ${Math.min.apply(null, numbers)}`

  //2.
  // return `${Math.max(...numbers)} ${Math.min(...numbers)}`

  let max = numbers.reduce((a, b) => Math.max(a, b));
  let min = numbers.reduce((a, b) => Math.min(a, b));
  console.log(max, min);
}

highAndLow("1 9 3 4 -5");
