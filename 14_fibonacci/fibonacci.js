const fibonacci = function (n) {
  const number = parseInt(n);
  if (number === 0) {
    return 0;
  } else if (number < 0) {
    return "OOPS";
  } else {
    const fib = [1, 1];

    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
