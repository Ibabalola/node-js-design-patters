/**
 * Creational: Singleton
 * 
 * Intent: "Ensure a class only has one instance, and
 * provide a global point of access to it"
 * 
 * Problem: "We have 3 instance of the logger we're only looking at 
 * the information for the main instance"
 * 
 * Solution: "Singleton Design Pattern"
 */

const Shopper = require('./Shopper');
const Store = require('./Store');
const logger = require('./Logger');

 logger.log('starting app...');

 const shopper = new Shopper('isaac', 500)
 const football_shop = new Store('FDM Sports Ltd', [
     {
         item: 'Mitre',
         qty: 5,
         price: 75
     },
     {
         item: 'Nike',
         qty: 2,
         price: 100
     }
 ]);

 logger.log('finished config...');

 console.log(`${logger.count} logs total`);
 logger.logs.map(log => console.log(`    ${log.message}`));