// A) What is prototypal inheritance in JavaScript?
// Prototypal inheritance is a feature in JavaScript where an object can inherit properties and methods from another object without the need to create classes. In JavaScript each and every object has a hidden link (called [[Prototype]]) to another object, known as object's prototype.

/** ---  1) Directly inheriting from another object (where another object becomes the prototype of newly created object) --- */

const cat = {
  name: 'demo cat',
  sound: function () {
    console.log(`${this.name} is making cute sounds`)
  }
}

const whiteCat = Object.create(cat) // cat object acts as a prototype for whiteCat

// overriding name property from the prototype | which is the cat object
whiteCat.name = 'persian white cat'

whiteCat.sound()

// B) Constructor Function:
/** ---
 * To programmatically create objects we use constructor functions.
 * The Constructor function is a regular function or a function expression. The only difference is that the constructor function is invoked with a new keyword. Arrow functions cannot be used as the constructor function.
 *
 * function Person(firstName, lastName){
 * }
 *
 * new Person('Immi',1992);
 *
 * 4 things happen when we call a function with new keyword:
 * 1. A new empty object is created {}
 * 2. The this keyword of the function points to the newly created object this = {}
 * 3. The newly created object is linked to a prototype object (We must not forget that each and every object in JavaScript is linked to a special object called its prototype from where it can access properties and methods --- this is called prototypal inheritance)
      {} ----> prototype object
 * 4. Finally the object created in the process is returned from the constructor function to be accessible to the program using it.
 *  --- */

function Person(firstName, lastName) {
  console.log(this)
  // this points to an empty object as soon as the function is invoked with a new keyword
}

new Person('john', 'smilga')
