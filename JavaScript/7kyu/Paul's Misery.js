// https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript
// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'

// // use arr.forEach()
// function paul(x){
//     let score = 0
    
//     x.forEach(element => {
//         if(element === 'kata'){
//             score += 5
//         }
//         else if(element === 'Petes kata'){
//             score += 10
//         }
//         else if(element === 'eating'){
//             score += 1
//         }
//     });

//       return score < 40 ? 'Super happy!'
//         : score < 70 ? condition = 'Happy!' 
//         : score < 100 ? condition = 'Sad!'
//         : 'Miserable!'
// }

// use arr.reduce()
function paul(x){
  const obj = {kata: 5, 'Petes kata': 10, life: 0, eating: 1}
  const score = x.reduce((acc, current) => acc += obj[current],0)
  console.log(score)

  return score < 40 ? 'Super happy!'
    : score < 70 ? condition = 'Happy!' 
    : score < 100 ? condition = 'Sad!'
    : 'Miserable!'
}