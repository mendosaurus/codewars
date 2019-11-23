// https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

function expandedForm(num) {
  let numStr = num.toString();
  let splitNum = numStr.split("");
  let numLength = splitNum.length;
  let expandedArr = [];
  console.log(numStr, splitNum);

  for (i = 0; i < numLength; i++) {
    let temp = parseInt(splitNum[i]);
    console.log("temp:" + temp, "numLength:" + numLength);

    if (splitNum[i] > 0) {
      expandedArr.push("" + temp + "0".repeat(numLength - (i + 1)));
    }
  }

  return expandedArr.join(" + ");
}

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.
