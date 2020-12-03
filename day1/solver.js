const input = require('./input')
const { forEach } = require('./input')
const data = require('./input')

let years = {}

const yearSum = (data) => {
  data.forEach((year1) => {
    data.forEach((year2) => {
      if (year1 + year2 == 2020) {
        years = {
          year1: year1,
          year2: year2,
        }
      }
    })
  })
}

const multiplyYears = (year1, year2) => {
  return year1 * year2
}

yearSum(data)

console.log(multiplyYears(years.year1, years.year2))
