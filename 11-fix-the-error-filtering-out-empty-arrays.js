// Fix this incorrect code so that all tests pass!
// function removeEmptyArrays(arr) {
// 	return arr.filter(x => x !== [])
// }

function removeEmptyArrays(arr) {
  return arr.filter((x) => x.length !== 0)
}

console.log(removeEmptyArrays([1, 2, [], 4]))
