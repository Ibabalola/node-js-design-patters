/**
 * Structural: Composites
 * 
 * Sometimes we want to perform an operation on single element 
 * as we would do a group of elements.
 * 
 * Intent: Compose objects into tree structures to represent
 * part-whole hierarchies. Composite lets clients treat individual
 * objects and compositions of objects uniformly.
 * 
 * Useful for when traversing a tree of file system
 */

const CatalogItem = require('./CatalogItem');
const CatalogGroup = require('./CatalogGroup');

const boots = new CatalogItem('Leather Boots', 79.99);
const trainers = new CatalogItem('Nike', 39.99);
const flipFlops = new CatalogItem('Savanah', 19.99);

const group_shoes = new CatalogGroup("shoes", [boots, trainers, flipFlops]);
const group_food = new CatalogGroup("food", [
    new CatalogItem("Milkshake", 5.99),
    new CatalogItem("Fries", 3.99)
]);

const keychain = new CatalogItem("key chain", 0.99);

const catalog = new CatalogGroup("Clothes and Food", [group_shoes, keychain, group_food]);

console.log(`Catalog Total: £${catalog.total}`);

catalog.print();

// console.log('boots total: ', `£${boots.total}`);
// console.log('shoes total: ', `£${group_shoes.total}`);

// boots.print();
// trainers.print();

// group_shoes.print();