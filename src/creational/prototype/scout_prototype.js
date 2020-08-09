const Shopper = require('./Shopper');

const scount = new Shopper();
scount.addItemToList('Item 1');
scount.addItemToList('Item 2');
scount.addItemToList('Item 3');
scount.addItemToList('Item 4');

module.exports = scount;