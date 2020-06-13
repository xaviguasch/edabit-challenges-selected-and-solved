function checkFactors(factors, num) {
  return factors.every((factor) => num % factor === 0)
}

console.log(checkFactors([1, 2, 50, 43], 100))
console.log(checkFactors([2, 3, 4], 12))
