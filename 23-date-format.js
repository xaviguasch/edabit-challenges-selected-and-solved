function formatDate(date) {
  const [month, day, year] = date.split('/')

  return year + day + month
}

console.log(formatDate('11/12/2019'))
