// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]


function towerBuilder(floors) {
	let tower = [];

	for(let i = 0; i < floors; i++){
		tower.push(
			' '.repeat(floors - i - 1)+
			'*'.repeat((i * 2)+ 1)+
			' '.repeat(floors - i - 1)
		)
	}
	return tower
}

// best practice
// function towerBuilder(n) {
//     return Array.from({
//         length: n
//     }, function (v, k) {
//         const spaces = ' '.repeat(n - k - 1);
//         return spaces + '*'.repeat(k + k + 1) + spaces;
//     });
// }

towerBuilder(6)
// ["  *  "," *** ","*****"]
// towerBuilder(1)
// ["*"]
// towerBuilder(2)
// [" * ","***"]