function checkSquareAndCube(arr) {
  const sqrt1st = Math.sqrt(arr[0])
  const cbrt2nd = Math.cbrt(arr[1])

  if (sqrt1st === cbrt2nd) {
    return true
  } else {
    return false
  }
}

console.log(checkSquareAndCube([4, 8]))
