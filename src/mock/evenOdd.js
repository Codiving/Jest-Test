function isEvenOdd(number, onResult) {
  if (number % 2) onResult("odd");
  else onResult("even");
}

module.exports = isEvenOdd;
