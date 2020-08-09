/**
 * Creational: Factory
 * 
 * Intent: "Define an interface for creating an object,
 * but let the subclasses decide which class to instantiate.
 * Factory Method lets a class defer instantiation to subclasses."
 * 
 * Problem: could occur as the application begins to grow
 * 
 * Solution: Use a factory method to dictate what kind of 
 * object should be instantiated.
 */

const userFactory = require('./userFactory')

const shopper = userFactory('shopper name', 100, userFactory.SHOPPER);
const employee = userFactory('employee name', 100, userFactory.EMPLOYEE, 'This and That');
employee.payDay(100);

console.log(shopper.toString());
console.log(employee.toString());