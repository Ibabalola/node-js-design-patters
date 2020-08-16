/**
 * Behavioral: Strategy
 * 
 * Let you create multiple algorithms for specific tasks,
 * and then dynamically decide upon to use at run time.
 * 
 * e.g. payment processing
 * 
 * Intent: "Define a family of algorithms, encapsulate
 * each one, and make them interchangeable. Strategy
 * lets the algorithm vary independently from clients
 * that use it." 
 */

 const logger = require('./Logger');

 logger.log('Hello World');
 logger.log('Hi World');
 logger.log('Yo World');

 logger.changeStrategy('none');

 logger.log('Hello World');
 logger.log('Hi World');
 logger.log('Yo World');
