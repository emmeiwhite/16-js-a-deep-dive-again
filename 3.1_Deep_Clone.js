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

/** 1) Deep Clone Modern JS - structuredClone() --- */

const deepClonedCustomer = structuredClone(customer)

deepClonedCustomer.cart.push('butter milk')
deepClonedCustomer.cart.push('carrots')

/* ---
console.log(customer)
console.log(deepClonedCustomer)
--- */

/** 2) Deep Clone with JSON.parse(JSON.stringify()) --- */

const customer4 = JSON.parse(JSON.stringify(customer))
customer4.cart.push('notebook')

/** 3) Deep Clone with lodash _.cloneDeep() --- */
const johnBeforeMarriage = {
  name: 'john',
  married: false,
  address: {
    state: 'New York',
    country: 'USA'
  },
  family: ['brother', 'sister', 'parents']
}

// Using Lodash's cloneDeep to create a deep clone
const johnAfterMarriage = _.cloneDeep(johnBeforeMarriage)

johnAfterMarriage.family.push('wife')
johnAfterMarriage.address['pin'] = 234343

console.log(johnBeforeMarriage)
console.log(johnAfterMarriage)
