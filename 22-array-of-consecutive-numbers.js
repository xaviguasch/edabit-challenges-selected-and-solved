function getSequence(low, high) {
  let arr = []
  for (let i = low; i <= high; i++) {
    arr.push(i)
  }

  return arr
}

console.log(getSequence(1, 5))
