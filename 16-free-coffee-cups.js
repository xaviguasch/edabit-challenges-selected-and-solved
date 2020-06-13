function totalCups(n) {
  let extraCups = 0

  if (n % 6 === 0) {
    extraCups = n / 6
  } else {
    extraCups = Math.floor(n / 6)
  }

  return n + extraCups
}

console.log(totalCups(6))

console.log(totalCups(12))

console.log(totalCups(213))
