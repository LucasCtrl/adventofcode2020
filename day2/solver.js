const data = require('./input')

let validPasswordPart1 = 0
let validPasswordPart2 = 0

const testPasswordPart1 = (data) => {
  data.forEach((password) => {
    let [qty, letter, pass] = password.split(' ')
    let [minQty, maxQty] = qty.split('-')
    let passArray = pass.split('')

    console.log(qty, letter, pass, minQty, maxQty, passArray)

    let letters = passArray.filter((l) => l == letter.slice(0, -1))
    console.log(letters, letters.length)
    if (letters.length >= minQty && letters.length <= maxQty) validPasswordPart1++
  })
}

const testPasswordPart2 = (data) => {
  data.forEach((password) => {
    let [pos, letter, pass] = password.split(' ')
    let [pos1, pos2] = pos.split('-')
    let passArray = pass.split('')

    let letter1 = passArray[pos1 - 1]
    let letter2 = passArray[pos2 - 1]

    if (letter1 == letter.slice(0, -1) && letter2 == letter.slice(0, -1)) return
    else if (letter1 == letter.slice(0, -1) || letter2 == letter.slice(0, -1)) {
      console.log(true, pos, letter, letter1, letter2)
      validPasswordPart2++
    }
  })
}

testPasswordPart1(data)
testPasswordPart2(data)
console.log(validPasswordPart1)
console.log(validPasswordPart2)
