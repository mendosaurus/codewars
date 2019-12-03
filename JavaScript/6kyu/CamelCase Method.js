// https://www.codewars.com/kata/camelcase-method/train/javascript

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

String.prototype.camelCase = function() {
  return this.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

"hello case".camelCase(); // => HelloCase
// "camel case word".camelCase() // => CamelCaseWord
