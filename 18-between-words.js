function isBetween(first, last, word) {
  if (word > first) {
    if (word < last) {
      return true
    } else {
      return false
    }
  }
  return false
}

console.log(isBetween('apple', 'banana', 'azure'))
console.log(isBetween('bookend', 'boolean', 'boost'))
