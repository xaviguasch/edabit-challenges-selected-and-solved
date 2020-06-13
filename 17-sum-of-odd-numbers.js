function addOddToN(n) {
  let number = 0
  for (let i = 1; i <= n; i += 2) {
    number += i
  }

  return number
}

console.log(addOddToN(5))
console.log(addOddToN(13))
console.log(addOddToN(47))
