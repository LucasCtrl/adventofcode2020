const input = require('./input')
const { forEach } = require('./input')
const data = require('./input')

let years = {}

const yearSum = (data) => {
  data.forEach((year1) => {
    data.forEach((year2) => {
      data.forEach((year3) => {
        if (year1 + year2 + year3 == 2020) {
          years = {
            year1: year1,
            year2: year2,
            year3: year3,
          }
          console.log(years)
        }
      })
    })
  })
}

const multiplyYears = (year1, year2, year3) => {
  return year1 * year2 * year3
}

yearSum(data)
console.log(years)

console.log(multiplyYears(years.year1, years.year2, years.year3))
