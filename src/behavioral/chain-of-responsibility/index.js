/**
 * Behavioral: Chain Of Responsibility
 * 
 * Intent: "Avoid coupling the sender of a request to its
 * receiver by giving more than one object a change to handle
 * the request. Chain the receiving objects and pass the request
 * along the chain."
 */

 const Store = require('./Store');
 const inventory = require('./inventory');

 const skiShop = new Store('Steep and Deep', inventory);

 const searchItem = 'ski hoods';
 const results = skiShop.find(searchItem);

 console.log(results);