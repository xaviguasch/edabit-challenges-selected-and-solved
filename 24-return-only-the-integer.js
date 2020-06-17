function returnOnlyInteger(arr) {
  return arr.filter((item) => Number.isInteger(item))
}

console.log(returnOnlyInteger(['hello', 81, 'basketball', 123, 'fox']))
