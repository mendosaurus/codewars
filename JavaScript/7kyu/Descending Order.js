// https://www.codewars.com/kata/descending-order/
// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221

// function descendingOrder(n){
//   n.toString
//   n.split('')
//   return n
//   // sort(function(a, b){return a-b}).join("")
// }

function descendingOrder(n) {
  return parseInt(
    String(n)
      .split("")
      .sort()
      .reverse()
      .join("")
  );
}

descendingOrder(1254859723);
