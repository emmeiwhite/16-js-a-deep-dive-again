'use strict'

/** this is a special keyword or a variable and by default this points to the owner of the function in which the this keyword is used (Almost 100% times some parent object!) */

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

/** Object Example: */
const rawdha = {
  dob: 1998,
  calcAge: function () {
    // Function Expression
    return 2024 - this.dob
  }
}

console.log(rawdha.calcAge())

const imran = {
  dob: 1992,
  calcAge: () => {
    // Since, it is an arrow function, it will not have its own this variable.
    console.log(this) // It points to the outer environment of the object imran
  }
}

imran.calcAge()
