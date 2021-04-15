// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
	const arr = x.split('')
	const result = []
    arr.forEach(letter => {
        if(letter==='a'){
            result.push('b')
        } 
        else if(letter==='b'){
            result.push('a')
        }
        else(result.push(letter))
    }
	)
	return result.join('')
}