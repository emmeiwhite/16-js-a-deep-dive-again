'use strict'
function Person(firstName, lastName) {
  console.log(this)
  /* --- 
     Step-1: 'this' points to an empty object as soon as the function is invoked with a new keyword

     this ----->{}


  --- */

  /* ---
    Step-2: "Now that we have an empty object to begin with, & we know that this object will be returned by the constructor function, let's start to add few properties on it
    --- */

  this.FN = firstName
  this.LN = lastName

  /* ---
      this = {
              FN:firstName,
              LN:lastName
             }
     *  --- */

  /*  Step-3: The object created will be linked to a prototype  --- */
  /*  Step-4: The created object is finally returned from the constructor function ---*/
}

const john = new Person('john', 'smilga')
console.log(john)

/* --- Arrow function cannot be used as the constructor function --- */
const Student = (name, age) => {
  this.name = name
  this.age = age
}

/**
 *
 * const student = new Student('john', '32')
 * app.js:41 Uncaught TypeError: Student is not a constructor

 * NOTE: An arrow function cannot be used as the constructor function!
 */

// Exercise: Function Expression

const Book = function (title, author, price) {
  this.title = title
  this.author = author
  this.price = price

  // Adding methods to the object (think of this pointing to that object! this) | However this is not recommended! Never do this way
  this.userDetails = function () {
    return `Title: ${this.title}, Author: ${this.author}, Price: ${this.price}`
  }
}

// Created 3 objects:
const book1 = new Book('Sacred Knowledge', 'Ibn_Jawzi', 456)
const book2 = new Book('Do not be sad', 'Al-Areefi', 555)
const book3 = new Book('Al-Fawaid', 'Ibnul-Qayyim', 878)

// We have added userDetails on the constructor function pattern, however this is not encouraged! Because for each object created this way, the new userDetails method will be created and it is not good for 2 reasons: 1) More Memory consumption         2) Redundancy

/** --- Every function except arrow function has a prototype property but its main use case is during the creation of objects with constructor function --- */

/** --- Every object has a hidden link to this prototype object, from where it can inherit methods and properties __proto__ (or [[Prototype]] ---- */

const Table = function (height, width) {
  this.height = height
  this.width = width
}

/** --- Adding methods to prototype object --- */

Table.prototype.calArea = function () {
  return parseFloat((this.height * this.width).toFixed(2))
}

const table1 = new Table(2, 1.5)
const table2 = new Table(3, 2)

// we say: table1 & table2 are prototypes of Table constructor! Very important to understand

console.log(table1.__proto__ === Table.prototype)
console.log(table1.isPrototypeOf(Table)) // false

console.log(Table.prototype.isPrototypeOf(table1))
