const R = require('remeda')

const isDivisibleBy3 = (x: number) => x % 3 === 0
const isDivisibleBy4 = (x: number) => x % 4 === 0

const fns = [isDivisibleBy3, isDivisibleBy4]

const isDivisibleBy3And4 = R.allPass(fns)

module.exports = {
  isDivisibleBy3And4
}