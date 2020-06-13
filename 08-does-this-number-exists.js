function validStrNumber(n) {
  const newNum = Number(n)

  return isNaN(newNum) ? false : true
}

console.log(validStrNumber('25'))
console.log(validStrNumber('25.4'))
console.log(validStrNumber('25..4'))
console.log(validStrNumber('number'))
