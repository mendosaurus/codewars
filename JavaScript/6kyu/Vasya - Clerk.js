// https://www.codewars.com/kata/vasya-clerk/train/javascript

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

// function tickets(peopleInLine){
//   var m25 = 0, m50 = 0;

//     for (var i = 0; i < peopleInLine.length; i++) {
//         switch(peopleInLine[i]){
//             case 25:
//                 m25++;
//                 break;
//             case 50:
//                 m25 > 0 ? m25-- : m25 = -1;
//                 m50++;
//                 break;
//             case 100:
//                 m25 > 0 && m50 > 0 ? m50-- : (m25 > 2 ? m25 -= 2 : m25 = -1);
//                 m25--;
//                 break;
//         }
//        if(m25<0){
//           return "NO";
//        }
//     }
//     return "YES";
// }

// // best practice
function tickets(peopleInLine) {
  let bill = [0, 0, 0];

  for (let i = 0; i < peopleInLine.length; i++) {
    console.log(bill);
    switch (peopleInLine[i]) {
      case 25:
        bill[0]++;
        break;

      case 50:
        bill[1]++;
        bill[0]--;
        break;

      case 100:
        // Check if exists(>0) 50 bill
        // bills[1] = 50
        // bills[0] = 25
        // if(bill50){
        // bill50--;
        // } else {
        // coins25-=2;
        // }
        // condition ? exprIfTrue : exprIfFalse
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        bill[1] ? bill[1]-- : (bill[0] -= 2);
        bill[0]--;
        break;
    }
  }
  console.log(bill);
  if (bill[0] < 0) {
    return "NO";
  }
  return "YES";
}

tickets([
  25,
  25,
  25,
  25,
  50,
  25,
  100,
  25,
  25,
  25,
  100,
  100,
  50,
  100,
  50,
  100,
  50
]);
