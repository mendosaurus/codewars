// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
	return arr.filter(value=>value>0).reduce((a,b)=>a+b)
}

positiveSum([1,-4,7,12])