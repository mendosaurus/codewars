// https://www.codewars.com/kata/unique-in-order/train/javascript

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//remember iterable can be a string or an array

// my solution
// let uniqueInOrder = function (iterable) {
//     if (typeof iterable === 'string') {
//         iterable = iterable.split('')
//         console.log(iterable)
//     }

//     return iterable.filter((current, index, arr) => {
//         return current !== arr[index - 1]
//     })
// }

// best practice
function uniqueInOrder(iterable) {
  var result = [];
  var last;

  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      last = iterable[i];
      result.push(iterable[i]);
    }
  }

  return result;
}

// call function
uniqueInOrder("AAAABBBCCDAABBB");
// == ['A', 'B', 'C', 'D', 'A', 'B']

// uniqueInOrder('ABBCcAD')
// == ['A', 'B', 'C', 'c', 'A', 'D']

// uniqueInOrder([1,2,2,3,3])
// == [1,2,3]
