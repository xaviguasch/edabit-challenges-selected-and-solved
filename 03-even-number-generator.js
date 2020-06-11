function findEvenNums(num) {
  let result = []
  for (let i = 2; i <= num; i++) {
    if (i % 2 === 0) {
      result.push(i)
    }
  }
  return result
}
