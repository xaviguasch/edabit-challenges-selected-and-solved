function reverse(arr) {
  let reversedArr = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
  }
  return reversedArr
}

console.log(reverse([2, -9, 2, 3, 4]))
