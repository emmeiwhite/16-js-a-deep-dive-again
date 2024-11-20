/** --- Heading to Deep Clone| Let's first take an example of shallow clone again --- */

const customer = {
  userName: 'john doe',
  cart: ['milk shake']
}

const customer2 = { ...customer }
customer2.cart.push('biryani')

/* ---
console.log('Customer 1', customer)
console.log('Customer 2', customer2)

// Here we note that this is a shallow clone customer and customer2 have same items in the cart

--- */

/** 1) Deep Clone Modern JS - structuredClone()  */

const deepClonedCustomer = structuredClone(customer)

deepClonedCustomer.cart.push('butter milk')
deepClonedCustomer.cart.push('carrots')

console.log(customer)
console.log(deepClonedCustomer)
