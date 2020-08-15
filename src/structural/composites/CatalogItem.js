class CatalogItem {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get total() {
        return this.price;
    }

    print() {
        console.log(`${this.name} £${this.price}`);
    }
}

module.exports = CatalogItem;