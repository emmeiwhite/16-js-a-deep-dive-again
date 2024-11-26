/* --- 1. CLOSURES: A closure is a function that remembers its lexical scope even when the function is executed outside of that scope. Scenarios where we have an inner function accessing variables of the outer function and inner function being returned from the function, the inner function is the closure function.
--- */

// Practical UseCase --- Data Encapsulation for Privacy of data

function counter() {
  let count = 0

  return {
    increment: () => {
      count++
      console.log(count)
    },
    decrement: () => {
      count--
      console.log(count)
    },
    getCount: () => {
      console.log(count)
    }
  }
}
