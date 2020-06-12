function isPlural(word) {
  const letterS = word[word.length - 1]
  console.log(letterS)
  return letterS === 's' ? true : false
}

console.log(isPlural('beach'))
console.log(isPlural('houses'))
