// https://www.codewars.com/kata/shortest-word/
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// // solution 1
// function findShort(s){
//   // split the sting into an array
//   s = s.split(" ")
//   // assume that the first word is the shortest for now
//   shortestWord = s[0];
//   // compare the length of the word with the length of each word in an array
//   for (let i = 0; i < s.length; i++){
//     console.log(`check: ${s[i]}`)
//     if(s[i].length <= shortestWord.length) {
//       shortestWord = s[i]
//       console.log(`shortest word: ${shortestWord}`)
//       console.log()
//     }
//   }
//   return shortestWord.length
// }

// best practice
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map(w => w.length)
  );
}

findShort("bitcoin take over the world maybe who knows perhaps");
