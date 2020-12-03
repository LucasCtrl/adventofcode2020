const data = require('./input')

let validPassword = 0

const testPassword = (data) => {
  data.forEach((password) => {
    let [qty, letter, pass] = password.split(' ')
    let [minQty, maxQty] = qty.split('-')
    let passArray = pass.split('')

    console.log(qty, letter, pass, minQty, maxQty, passArray)

    let letters = passArray.filter((l) => l == letter.slice(0, -1))
    console.log(letters, letters.length)
    if (letters.length >= minQty && letters.length <= maxQty) validPassword++
  })
}

testPassword(data)
console.log(validPassword)
