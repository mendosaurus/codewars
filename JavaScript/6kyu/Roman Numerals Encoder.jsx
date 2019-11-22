// https://www.codewars.com/kata/51b62bf6a9c58071c600001b
// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

// function solution(number) {
//   let result = "",
//     integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
//     romans = [
// 		"M",
// 		"CM",
// 		"D",
// 		"CD",
// 		"C",
// 		"XC",
// 		"L",
// 		"XL",
// 		"X",
// 		"IX",
// 		"V",
// 		"IV",
// 		"I"
// 	];

//   integers.map((value, index) => {
//     while (number >= value) {
//       result += romans[index];
//       console.log(result, number,value,number-value)
// 			number -= value;
//     }
//   });

//   return result;
// }

// best practice
function solution(number) {
  // convert the number to a roman numeral
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  var ans = "";
  while (number > 0) {
    for (a in roman) {
      if (roman[a] <= number) {
        ans += a;
        number -= roman[a];
        break;
      }
    }
  }
  return ans;
}

// solution(1); //'I'
// solution(2); //'II'
// solution(3); //'III'
// solution(4); //'IV'
// solution(5); //'V'
// solution(9); //'IX'
// solution(10); //'X'
// solution(11); //'XI'
// solution(19); //'XIX'
// solution(22); //'XXII'
// solution(15); //'XV'
// solution(1000); //'M'
// solution(1001); //'MI'
// solution(1990); //'MCMXC'
// solution(2007); //'MMVII'
solution(2008); //'MMVIII'
