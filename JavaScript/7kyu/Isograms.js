//www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(string) {
  let arr = string.toLowerCase().split("");
  let isogram = [];

  arr.filter((element, index, array) => {
    if (arr.indexOf(element) === index) {
      isogram.push(element);
    }
  });
  return isogram.join("") === arr.join("") ? true : false;
}

// sample test
// Test.assertSimilar(isIsogram("Dermatoglyphics"), true);
// Test.assertSimilar(isIsogram("isogram"), true);
// Test.assertSimilar(isIsogram("aba"), false, "same chars may not be adjacent");
// Test.assertSimilar(
//   isIsogram("moOse"),
//   false,
//   "same chars may not be same case"
// );
// Test.assertSimilar(isIsogram("isIsogram"), false);
// Test.assertSimilar(isIsogram(""), true, "an empty string is a valid isogram");
