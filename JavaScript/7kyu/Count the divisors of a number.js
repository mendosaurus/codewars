// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

function getDivisorsCnt(n) {
  let divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length;
}

// best practice
function getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }

  return d;
}

// Examples;
getDivisorsCnt(4); // = 3; // 1, 2, 4
getDivisorsCnt(5); // = 2; // 1, 5
getDivisorsCnt(12); // = 6; // 1, 2, 3, 4, 6, 12
getDivisorsCnt(30); // = 8; // 1, 2, 3, 5, 6, 10, 15, 30
