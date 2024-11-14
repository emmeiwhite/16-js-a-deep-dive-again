// var, let, const

function abc() {
  var cart = []
}

// console.log(cart)
// UnCaught ReferenceError: cart is not defined at line 6 (cart is not in the Global scope)

function abbc() {
  console.log(cart)
  cart = 'I am a cart, woohooo hoo hoo'
}

abbc()
// console.log(cart)
