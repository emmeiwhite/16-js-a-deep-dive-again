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
try {
  foobar() // ReferenceError: Cannot access foobar before initialization
} catch (e) {
  console.log('ReferenceError Handled')
}

// Function Expression
const foobar = function () {}
// Here we note that regular expression has been declared with const, for let we'll get the same error above on line 25: ReferenceError: Cannot access foobar before initialization

/* --- Very Important: SyntaxErrors are not caught with try/catch block
function move() {
    try {
        const progress; 
        // SyntaxError occurs during parse time not at run time try{}catch handles code at run tim
    } catch (error) {
         console.log('SyntaxError handled!')
    }
}

move()
--- */

/* --- const progress; // SyntaxError: Missing initializer in const declaration --- */

/*--- EXAMPLE: Dangers of Hoisting! --- */

console.log(numberOfProducts)

if (!numberOfProducts) deleteProductsFromCart()
var numberOfProducts = 10

function deleteProductsFromCart() {
  console.log('all the products are deleted successfully!!')
}
