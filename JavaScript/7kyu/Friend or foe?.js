// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// function friend(friends) {
//   let answer = [];
//   let arr = friends.forEach((friend) => {
//     if (friend.length === 4) {
//       answer.push(friend);
//     }
// 		console.log(answer)
//   });
//   return answer;
// }

function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}

friend(["Ryan", "Kieran", "Mark"]);
// ["Ryan", "Mark"];
