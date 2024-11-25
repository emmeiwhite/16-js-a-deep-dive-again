// Constructor Function:
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
