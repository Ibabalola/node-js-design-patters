/**
 * Creational: Builder
 * 
 * Intent: "Seperate the construction of a complex object
 * from its representation so that the same construction
 * process can create different representations."
 * 
 * Helps to prevent the [Anti-Pattern] telescoping constructor, 
 * to many parameters will mean it'll be confusing
 * understanding what the arguments are
 */

 const PersonBuilder = require('./PersonBuilder');

 const people = [];

 // Employees
 const isaac = new PersonBuilder('Isaac').makeEmployee().makeManager(60).build(); 
 const theresa = new PersonBuilder('Theresa').makeEmployee().makePartTime().build();
 const jacob = new PersonBuilder('Jacob').makeEmployee().build();

 people.push(isaac);
 people.push(theresa);
 people.push(jacob);

 // Shopper
 const yaya = new PersonBuilder('Yaya')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();

 const zara = new PersonBuilder('zara')
    .withMoney()
    .build();

people.push(yaya);
people.push(zara);

people.forEach(person => {
    console.log(person.toString());
});