class Shopper {

    constructor(name, money) {
        this._name = name;
        this._money = money;
    }

    toString() {
        return `Shopper: ${this._name} has £${this._money}`;
    }
}

module.exports = Shopper;