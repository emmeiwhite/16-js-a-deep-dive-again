/** --- 1)  primitives vs reference types --- */

// Primitive Type

/* ---
let age = 30
let oldAge = age

age = age + 1

console.log(age)
console.log(oldAge)

--- */
// Reference  Type

let bottle = {
  itemName: 'bottle',
  price: 34
}

const copperBottle = bottle

copperBottle.price = 40

console.log('Regular Bottle:', bottle)
console.log('Copper Bottle', copperBottle)

// In both the cases the price is updated to 40, since these are reference types

/** --- 2) Shallow Clone --- */

const imranBeforeMarriage = {
  name: 'Imran Rafiq Rather',
  married: false,
  address: {
    state: 'J&K',
    country: 'India',
    pinCode: 190015,
    city: 'Chanapora Srinagar'
  },
  family: ['brother', 'sister', 'parents']
}

console.log(imranBeforeMarriage)

const copyImran = Object.assign({}, imranBeforeMarriage)

copyImran.family.push('wife')
console.log(copyImran)
