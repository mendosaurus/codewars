// https://www.codewars.com/kata/find-the-parity-outlier/javascript
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either ENTIRELY COMPRISED OF ODD integers or ENTIRELY COMPRISED OF EVEN integers EXCEPT FOR A SINGLE INTEGER N. Write a method that takes the ARRAY AS AN ARGUMENT and RETURNS this 'OUTLIER' N.

function findOutlier(arr) {
  let even = arr.filter(number => number % 2 === 0);
  let odd = arr.filter(number => number % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); //11

// findOutlier([160, 3, 1719, 19, 11, 13, -21]) //160
