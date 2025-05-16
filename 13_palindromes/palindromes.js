const palindromes = function (string) {
  const lettersArray = string
    .toLowerCase()
    .split("")
    .filter(val => /[a-z0-9]/.test(val));

  // for (let i = 1; i <= Math.round(lettersArray.length / 2); i++) {
  //   if (lettersArray.at(i - 1) !== lettersArray.at(-i)) {
  //     return false;
  //   }
  // }
  // return true;

  const cleanedString = lettersArray.join("");
  return cleanedString === cleanedString.split("").reverse().join("");
};


// transfer to lower case
// transfer string to array and remove punctuation
// array's first and the first to the end letter should be the same, 
// also the second and the second to the end, etc.
// use for loop to test if all pairs of letters are always the same.

// Do not edit below this line
module.exports = palindromes;
