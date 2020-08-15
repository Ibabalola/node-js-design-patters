class Storage {

    constructor(name, inventory=[], deliveryTime=0) {

        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;

        this.next = null;
    }

    lookInLocalInventory(itemName) {
        const index = this.inventory.map(item => item.name).indexOf(itemName);
        return this.inventory[index];
    }

    setNext(storage) {
        this.next = storage;
    }

    find(itemName) {
        const found = this.lookInLocalInventory(itemName);
        if (found) {
            return {
                ...found,
                location: this.name,
                deliveryTime:  (!this.deliveryTime) ? 'now' : `${this.deliveryTime} day(s)`
            }
        } else if (this.next) {
            return this.next.find(itemName);
        } else {
            return `Unfortunately we can not find this item ${itemName}`;
        }
    }
}

module.exports = Storage;