/* --- Data Types | New Explorations
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MAX_VALUE * 2) // Infinity
console.log(Number.MAX_VALUE * -2) // Infinity
console.log(Number.MIN_VALUE * -1) // --5e-324 (Minimum value closer to 0)
console.log(Math.sqrt(-1)) // NaN (Imaginary Numbers)
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

--- */
// UnderStanding debugger in Error Handling & Debugging topic

/**
 * Step Out: Understanding "Step Out" in Debuggers
The "Step Out" button in a debugger is used to exit the current function and return to the caller function. If you're currently stepping through a function and want to skip the rest of it, pressing Step Out allows the function to run to completion and returns control to the point where the function was called.
 *
 * */

function outerFunction() {
  function innerFunction() {
    let sum = 0
    for (let i = 1; i <= 5; i++) {
      sum += i // Debug here
    }
    console.log('Sum in innerFunction:', sum)
  }

  innerFunction()
}

outerFunction() // Caller Function

// function firstFunction() {
//   console.log('Entering firstFunction')

//   function secondFunction() {
//     console.log('Entering secondFunction')
//     let message = 'Hello from secondFunction' // Debug here
//     console.log(message)
//   }

//   secondFunction()
//   console.log('Back in firstFunction')
// }

// firstFunction()
// console.log('End of program')

// ocnsole.log('start')

// const msg "Hello";

try {
  const msg = 'Hello'
  msg += ' world' // TypeError: Assignment to a constant variable
} catch (error) {
  console.log(error)
}

try {
  onsole.log(x) // ReferenceError: onsole is not defined
} catch (error) {
  console.log(error)
}

try {
  const obj = null
  console.log(obj.birthYear) // TypeError:Cannot read properties of null (reading birthYear)
} catch (error) {
  console.log(error)
}

console.log('Program continues !!!')
