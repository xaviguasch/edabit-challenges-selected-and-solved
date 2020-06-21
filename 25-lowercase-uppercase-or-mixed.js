function getCase(str) {
  if (str.toLowerCase() === str) {
    return 'lower'
  } else if (str.toUpperCase() === str) {
    return 'upper'
  } else {
    return 'mixed'
  }
}

console.log(getCase('whisper...'))
console.log(getCase('SHOUT!'))
console.log(getCase('Indoor Voice'))
