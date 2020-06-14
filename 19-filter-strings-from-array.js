function filterArray(arr) {
  return arr.filter((arr) => Number.isInteger(arr))
}

console.log(filterArray([1, 2, 3, 'a', 'b', 4]))
console.log(filterArray(['A', 0, 'Edabit', 1729, 'Python', '1729']))
