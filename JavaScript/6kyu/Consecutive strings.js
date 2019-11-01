// https://www.codewars.com/kata/consecutive-strings/train/javascript

//  You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.


// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption

// my solution
function longestConsec(strarr, k) {
    let newString = ''
    if (k <= 0 || k > strarr.length) {
        return newString
    }
    for (let i = 0; i < strarr.length; i++) {
        let temp = strarr.slice(i, i + k).join('')
        if (temp.length > newString.length) {
            newString = temp
        }
    }
    return newString
}

// best practice
// function longestConsec(strarr, k) {
//     var longest = "";
//     for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
//         var tempArray = strarr.slice(i, i + k);
//         var tempStr = tempArray.join("");
//         if (tempStr.length > longest.length) {
//             longest = tempStr;
//         }
//     }
//     return longest;
// }

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
// --> "abigailtheta"