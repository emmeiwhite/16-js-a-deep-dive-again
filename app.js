// var, let, const

function abc() {
  var cart = []
}

// console.log(cart)
// UnCaught ReferenceError: cart is not defined at line 6 (cart is not in the Global scope)

function abbc() {
  console.log(cart) // undefined; Hoisting in place!
  var cart = 'I am a cart, woohooo hoo hoo' // In old days this without declared variable used to go to the global scope, but for some reason now: It is spitting error: ReferenceError: cart is not defined
}

abbc()
// console.log(cart)

// Hoisting in Action: regular function

foo() // Regular function are hoisted as a whole actual function
function foo() {
  console.log('hello!')
}
