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

console.log(c + d) // ReferenceError: c is not defined

console.log('Program never reaches to this point due to a reference error above')
