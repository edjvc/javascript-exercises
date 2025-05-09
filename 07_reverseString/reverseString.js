const reverseString = function (string) {
  return string.split("").reverse().join("");
};

// my first version

// const reverseString = function (string) {
//   let result = "";
//   for (let i = 1; i <= string.length; i++) {
//     result += string.at(-i);
//   }
//   return result;
// };

// Do not edit below this line
module.exports = reverseString;
