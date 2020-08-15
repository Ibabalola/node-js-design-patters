class InventoryItem {
    
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    get name() {
        return this._name;
    }

    print() {
        console.log(`${this._name} costs ${this._price}`);
    }

}

class GoldenInventoryItem {
   
    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }

}

class DiamondInventoryItem {

    constructor(baseItem) {
        this.name = `Diamond ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
        this.cutsGlass = true;
    }

    print() {
        console.log(`${this.name} costs a lot of money...`);
    }

}

module.exports = {
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem
}