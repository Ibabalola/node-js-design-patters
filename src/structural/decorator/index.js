/**
 * Structural: Decorator
 * 
 * A design pattern that allows us to dynamically attach 
 * additional properties and methods to exsisting objects
 * 
 * Indent: "Attach additional responsibilities to an object
 * dynamically. Decorators provide a flexible alternative
 * to subclassing for extedning functionality."
 */

const Shopper = require('./Shopper');
const { 
     InventoryItem, 
     GoldenInventoryItem, 
     DiamondInventoryItem
} = require('./InventoryItem');

const shopper = new Shopper('Isaac', 3500);

const item1 = new InventoryItem('iPhone 7 Plus', 1100);
const item2 = new InventoryItem('Bracelet', 29.99);

const gold_bracelet = new GoldenInventoryItem(item2);
const diamond_gold_bracelet = new DiamondInventoryItem(gold_bracelet);

const diamond_iphone = new DiamondInventoryItem(item1);

shopper.purchase(diamond_gold_bracelet );
shopper.purchase(diamond_iphone);

shopper.printStatus();

diamond_iphone.print();