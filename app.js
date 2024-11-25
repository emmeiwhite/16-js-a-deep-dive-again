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

new Person('john', 'smilga')
