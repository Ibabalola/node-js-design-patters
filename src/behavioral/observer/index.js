/**
 * Behavioral: Observer
 * 
 * Intent: "Define a one to many dependency between
 * objects so that when on object changes state, all its
 * dependents are notified and updated automatically."
 */

 const Store = require('./Store');
 const Shopper = require('./Shopper');
 const Mall = require('./Mall');

 const store1 = new Store('store 1');
 const store2 = new Store('Store 2');

 const shopper1 = new Shopper('name 1');
 const shopper2 = new Shopper('name 2');
 const shopper3 = new Shopper('name 3');
 const shopper4 = new Shopper('name 4');

 const mall = new Mall();

 store1.subscribe(shopper1);
 store1.subscribe(shopper2);
 store1.subscribe(shopper3);
 store1.subscribe(mall);

 store2.subscribe(shopper4);
 store2.subscribe(mall);

 store1.sale(20);
 store2.sale(50);

 console.log(mall.sales);