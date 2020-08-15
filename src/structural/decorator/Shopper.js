class Shopper {

    constructor(name, money) {
        this.name = name;
        this.money = money;
        this.items = [];
    }

    purchase(item) {
        if (item.price > this.money)
            console.log(`Cannot afford ${item.name}`);
        else {
            console.log(`Purchasing item ${item.name}`);
            this.money -= item.price;
            this.items.push(item);
        }
    }

    printStatus() {
        console.log(`${this.name} has purcahsed ${this.items.length} items:`);
        this.items.forEach(item => {
            console.log(` * ${item.name} - ${item.price}`);
        });
        console.log(`${this.name} has £${this.money.toFixed(2)} remaining`);
    }
}

module.exports = Shopper;