// let countBits = function(n) {
//   return n.toString(2).replace(/0/g,'').length
// };

// best practice
countBits = n =>
  n
    .toString(2)
    .split("0")
    .join("").length;

// countBits(0) // 0
// countBits(4) // 1
// countBits(7) // 3
// countBits(9) // 2
countBits(10); // 2
