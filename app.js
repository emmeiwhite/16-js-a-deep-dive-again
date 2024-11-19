/** --- 1)  primitives vs reference types --- */

// Primitive Type
let age = 30
let oldAge = age

age = age + 1

console.log(age)
console.log(oldAge)

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
