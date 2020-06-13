function isLastCharacterN(word) {
  const newWord = word.split('')

  if (newWord[newWord.length - 1] === 'n') {
    return true
  } else {
    return false
  }
}

console.log(isLastCharacterN('Bert'))
console.log(isLastCharacterN('Dean'))
