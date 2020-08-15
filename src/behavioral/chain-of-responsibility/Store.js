const Storage = require('./Storage');

class Store {

    constructor(name, store) {
        this.name = name;

        const floor = new Storage('store floor', store.floor);
        const backroom = new Storage('store backroom', store.backroom);
        const localstore = new Storage('store local', store.localstore, 1);
        const warehouse = new Storage('warehouse', store.warehouse, 5);

        floor.setNext(backroom);
        backroom.setNext(localstore);
        localstore.setNext(warehouse);

        this.storage = floor;
    }

    find(itemName) {
        return this.storage.find(itemName);
    }

}

module.exports = Store;