'use strict'
/** --- A) Pitfall: this keyword (in Arrow & Regular Functions) --- */
const imran = {
  firstName: 'imran',
  year: 1992,
  calAge: function () {
    return 2024 - this.year
  },
  greet: () => {
    console.log(this) // window
    console.log(`Hello ${this.firstName}`) // window.undefined
  }
}

imran.greet()

/** --- B) A regular function inside a method --- */

const customer = {
  email: 'test@customer.com',
  itemsInCart: [],
  getItemDetails: function () {
    itemsInCart = ['laptop', 'notepad', 'ipad']

    // This is treated as a regular function not part of object, & follows similar rules for the regular function's this keyword which is undefined! in the strict mode
    function getCartDetails() {
      console.log(`Total Items: ${this.itemsInCart}`) // undefined.<Non Existing Value>, which is ReferenceError
    }
    getCartDetails()
  }
}

customer.getItemDetails()

/** --- When we try to access a non-existing field on an object we get undefined, not the error --- */

const obj = {
  age: 32
}

console.log(obj.isTrue) // undefined
