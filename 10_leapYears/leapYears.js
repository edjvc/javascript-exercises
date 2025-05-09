const leapYears = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}


// #2
// const leapYears = function (year) {
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else if (year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }


// #1
// const leapYears = function (year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Do not edit below this line
module.exports = leapYears;

// leap year: 被4整除, 不被100整除, 被400整除
