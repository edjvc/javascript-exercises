const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, cur) => total + cur, 0);
};

const multiply = function (arr) {
  return arr.reduce((result, cur) => result * cur, 1);
};

const power = function (a, power) {
  return a ** power;
};

const factorial = function (n) {
  // if (n === 0) {
  //   return 1;
  // } else {
  //   let result = 1;
  //   for (let i = 1; i <= n; i++) {
  //     result *= i;
  //   }
  //   return result;
  // }

  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
