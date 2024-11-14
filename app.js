'use strict'
console.log(this) // Points to the window object

// regular function or function expression

function go() {
  console.log('Regular Function', this) // undefined
}

go()

const calcAge = function (birthYear) {
  const age = new Date().getFullYear() - birthYear
  console.log(age)
  console.log('Function Expression', this) // undefined (in strict mode)
}

// arrow function: this is not available in arrow function but if used, it points to the surrounding outer space!

const calcPrice = (advancePayment, currentPrice) => {
  let amountToPay = advancePayment - currentPrice
  console.log(this) // outer surrounding Lexical Scope is window
}

calcAge(1992)
calcPrice(30, 19)
