// What is prototypal inheritance in JavaScript?
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


The story of Talut(known as Saul in the Bible) in the Quran, found in Surah Al - Baqarah(2: 246 - 251), provides profound insights into human nature and the concept of reliability.When the Israelites were oppressed and sought a leader, they asked their prophet for a king to lead them in battle.God appointed Talut, a man of humble means but chosen for his wisdom and physical strength, as their king.However, many among them questioned Talut’s selection, doubting his qualifications because he lacked wealth and status.
