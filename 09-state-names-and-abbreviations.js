function filterStateNames(arr, type) {
  if (type === 'abb') {
    return arr.filter((place) => place.length <= 2)
  }
  if (type === 'full') {
    return arr.filter((place) => place.length > 2)
  }
}

console.log(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'abb'))
console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full'))
