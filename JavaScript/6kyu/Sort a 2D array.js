// https://www.codewars.com/kata/sort-a-2d-array/train/javascript
// In the office we love to do amazing activities all together so we can share incredible experiences. This time, we decided to do bungee jumping. To decide the order we are going to jump, we need to create a sorter algorithm with the next rules.
// We will receive a list of names for each department, so at the end we will have a 2D array with different length
// We will return a normal array with all the names in the correct order
// The sequence will be to add all the names sorted by the length of the name (ASC). In case there are more than one with the same length, sort them alphabetically.

// function namesSorter (departmentsArray) {
// 	let names = [];	
// 	departmentsArray.forEach(departments => {
// 		departments.forEach(name => names.push(name));
// 	})	
// 	console.log(names);

// 	names.sort(function(a, b) {
// 		 return a.length - b.length || a.localeCompare(b);
// 	})
// 	return names;
// }

// best practice
function namesSorter(departmentsArray){
	return departmentsArray.reduce((total, departments) =>{
		return total.concat(departments)
	}).sort((a,b)=> a.length - b.length || a.localeCompare(b))
}

namesSorter([["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]])