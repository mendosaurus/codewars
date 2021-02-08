// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  const arr = s.split("");
  let result = [];
  arr.forEach((current, index, arr) => {
    if (current === "#") {
      result.pop();
    } else {
      result.push(current);
    }
  });
  return result.join("");
}

// Test.assertEquals(cleanString("abc#d##c"), "ac");
// Test.assertEquals(cleanString("abc####d##c#"), "");
