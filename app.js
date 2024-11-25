'use strict'
function Person(firstName, lastName) {
  console.log(this)
  // this points to an empty object as soon as the function is invoked with a new keyword
}

new Person('john', 'smilga')
