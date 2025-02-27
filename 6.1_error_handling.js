// 1) Bug vs Error

/**
 * Bug: A bug causes a program to run in an unintended way.
 * Error: An error causes a program to stop running
 *
 * Common Error Types: Syntax, Reference and  TypeErrors
 */

function addNums(a, b) {
  console.log(a + b)
}

addNums(3, 6)
addNums('1', 6) // outputs 16, which is a bug

console.log('Still Running')

/* --- ReferenceError: Example

    console.log(c + d) // ReferenceError: c is not defined

    console.log('Program never reaches to this point due to a reference error above')

--- */

/* --- TypeError: Examples
    a) example-1
    const isTrue = true

    isTrue = 'false' // TypeError: Assignment to constant variable.

    b) example-2

let myVar
console.log(myVar.length) // app.js:38 Uncaught TypeError: Cannot read properties of undefined (reading 'length')

    c) example-3
let num = 10
num.push(5) // TypeError: num.push is not a function

    d) example-4
console.log(null.toString())

    e) example-5
const person = { name: 'Alice' }

console.log(person.age.toString())

 --- */

try {
  console.log(a + b)
} catch (err) {
  console.log(err)
}

console.log('program continues!!!')

// We can also throw on purpose at times with throw new ReferenceError() or throw new Error()

try {
  throw new ReferenceError()
} catch (err) {
  console.log(err)
  console.log('ReferenceError handled!!!')
}

console.log('And again the program continues to run, Program execution does not stop')

try {
  console.log('Hello'.pop()) //TypeError: "Hello".pop is not a function
} catch (err) {
  console.log('TypeError is handled!!')
}

/** ---
 * Let's see some syntax errors & these are Compilation Errors and cannot be handled with try/catch 

console.log('We are here! We are here!')
// const abc; Uncaught SyntaxError: Missing initializer in const declaration (at app.js:82:7)
const abc

try {
    let y 10; // SyntaxError:
} catch (error) {
    console.log('Code never reaches here becasue the SyntaxError are not caught by try/catch block')
}


Simple Example:
let a = 10,b;

console.log(`a is ${a} & b is ${b}`)

const c; // Uncaught SyntaxError: Missing initializer in const declaration
--- ***/
