const sumAll = function (a, b) {
  if (![a, b].every((item) => Number.isInteger(item) && item > 0)) {
    return "ERROR";
  }
  const height = Math.abs(a - b) + 1;
  return (a + b) * height / 2;
};

// for...of 寫法
// const sumAll = function (a, b) {
//   for (const item of [a, b]) {
//     if (!(Number.isInteger(item) && item > 0)) {
//       return "ERROR";
//     }
//   }
//   const height = Math.abs(a - b) + 1;
//   return (a + b) * height / 2;
// };

// #2
// const sumAll = function(a, b) {
//   if (!(Number.isInteger(a) && a > 0) || !(Number.isInteger(b) && b > 0)) {
//     return "ERROR";
//   }
//   const height = Math.abs(a - b) + 1;
//   return (a + b) * height / 2
// };

// #1
// const sumAll = function (a, b) {
//   let result = 0;
//   for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//     result += i;
//   }
//   return result;
// };

// Do not edit below this line
module.exports = sumAll;
