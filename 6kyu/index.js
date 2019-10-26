// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

// my solution
// function list(names){
// 	let namesArr = names.map(nameObject => nameObject.name)
// 	let nameStr = ''

// 	namesArr.forEach(name => {
// 		if(namesArr.indexOf(name) === 0){
// 			nameStr += name
// 		}
// 		else if (namesArr.indexOf(name) === namesArr.length-1){
// 			nameStr += ` & ${name}`
// 		}
// 		else{
// 			nameStr += `, ${name}`
// 		}
// 	})
// 	return nameStr
// }

//best practice
function list(names) {
    return names.reduce((prev, current, index, arr) => {
        if (index === 0) {
            return current.name
        } else if (index === names.length - 1) {
            return prev + ' & ' + current.name
        } else {
            return prev + ', ' + current.name
        }
    }, '')
}
list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])