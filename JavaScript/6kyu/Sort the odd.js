// https://www.codewars.com/kata/sort-the-odd/train/javascript

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// my solution
// function sortArray(array) {
// 	const odd = [];
// 	const even = [];
// 	const result = [];

// 	array.forEach(number => {
// 		if(number % 2 === 0){
// 			even.push(number);
// 		}
// 		else{
// 			odd.push(number);
// 		}
// 	});

// 	odd.sort((a,b) => a-b); //sort odd array
// 	console.log(odd, even);

// 	array.forEach(number => {
// 		if(number % 2 === 0){
// 			result.push(even.shift());
// 		}
// 		else{
// 			result.push(odd.shift());
// 		}
// 	})
// 	return result;
// }


// best practice
function sortArray(array) {
   const odd = array.filter(number => number % 2).sort((a,b) => a-b); //create odd array, and sort it in ascending order
   return array.map(number => number % 2? odd.shift() : number); //if number%2 is truthy, return the first item in odd array
}

sortArray([5, 333, 2, 8, 1, 4])