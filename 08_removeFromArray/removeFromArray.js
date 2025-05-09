const removeFromArray = function (array, ...args) {
  return array.filter((val) => !args.includes(val));
};

// alternative
// 不能用 for...of 改寫，因為 ...args 是 array ，if 條件式無法直接跟各別 item 做比較
//
// const removeFromArray = function (array, ...args) {
//   const result = [];
//   array.forEach((item) => {
//     if (!args.includes(item)) {
//       result.push(item);
//     }
//   });
//   return result;
// };

// my second version
//
// const removeFromArray = function (array, removeItem1, removeItem2) {
//   const newArray = [];
//   for (const item of array) {
//     if (item !== removeItem1 && item !== removeItem2) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// };

// my first version
//
// const removeFromArray = function(array, removeItem1, removeItem2, removeItem3, removeItem4) {
//   for (let i = 0; i < array.length; i++) {
//     if (
//       array[i] === removeItem1 ||
//       array[i] === removeItem2 ||
//       array[i] === removeItem3 ||
//       array[i] === removeItem4
//     ) {
//       array.splice(i, 1);
//       i--;
//     }
//   }
//   return array;
// };

// Do not edit below this line
module.exports = removeFromArray;
