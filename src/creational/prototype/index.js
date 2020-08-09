/**
 * Creational: Prototype
 * 
 * Intent: "Specify the kinds of object to create using prototypical instance, 
 * and create new objects by copying this prototype."
 * 
 * e.g. like houses
 * 
 * A way in which we can create objects from a master blueprint and
 * eliminate redundancy
 */

 const scount_prototype = require('./scout_prototype');

 const shopper = scount_prototype.clone();
 shopper.name = 'Shopper 1';
 shopper.addItemToList('An Item for shopper 1');

 const shopper2 = scount_prototype.clone();
 shopper2.name = 'Shopper 2';
 shopper2.addItemToList('An Item for shopper 2');

 console.log(`${shopper.name}: ${shopper.list}`);
 console.log(`${shopper2.name}: ${shopper2.list}`);