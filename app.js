'use strict'
console.log(this) // Points to the window object

const calcAge = function (birthYear) {
  const age = new Date().getFullYear() - birthYear
  console.log(age)
  console.log(this) // undefined in strict mode
}

calcAge(1992)
