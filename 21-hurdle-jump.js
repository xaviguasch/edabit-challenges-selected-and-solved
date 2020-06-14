function hurdleJump(hurdles, jumpHeight) {
  const result = hurdles.map((h) => h <= jumpHeight)

  return result.every((res) => res)
}

console.log(hurdleJump([1, 2, 3, 4, 5], 5))
