function kToK(n, k) {
  if (Math.pow(k, k) === n) {
    return true
  } else {
    return false
  }
}

console.log(kToK(3124, 5))
console.log(kToK(4, 2))
