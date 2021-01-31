// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
  const a_volume = a[0] * a[1] * a[2];
  const b_volume = b[0] * b[1] * b[2];
  const difference = Math.abs(a_volume - b_volume);
  return difference;
}

// Sample tests:
// describe("Tests", function () {
//   it("Basic tests", function () {
//     Test.assertEquals(findDifference([3, 2, 5], [1, 4, 4]), 14);
//     Test.assertEquals(findDifference([9, 7, 2], [5, 2, 2]), 106);
//     Test.assertEquals(findDifference([11, 2, 5], [1, 10, 8]), 30);
//     Test.assertEquals(findDifference([4, 4, 7], [3, 9, 3]), 31);
//     Test.assertEquals(findDifference([15, 20, 25], [10, 30, 25]), 0);
//   });
// });
